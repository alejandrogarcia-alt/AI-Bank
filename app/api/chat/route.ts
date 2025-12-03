import { NextRequest, NextResponse } from 'next/server';
import { bankSections, bankProducts } from '@/lib/bankData';
import { validUrls, getAllUrlsForContext } from '@/lib/validUrls';

export async function POST(request: NextRequest) {
  try {
    const { message, context } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Preparar contexto del banco
    const bankContext = `
Eres un asistente virtual de Multiplica Bank, un banco moderno e inteligente. Tu trabajo es ayudar a los usuarios a:

1. NAVEGAR por el sitio web del banco
2. ENCONTRAR información sobre productos bancarios
3. PRE-LLENAR formularios de crédito
4. COMPARAR productos
5. RESPONDER preguntas sobre servicios

⚠️ IMPORTANTE - URLS VÁLIDAS DEL SITIO:
Solo puedes navegar a estas URLs exactas. NO inventes nuevas URLs. NO agregues subcarpetas que no existen.

LISTA COMPLETA DE URLS VÁLIDAS:
${getAllUrlsForContext()}

PRODUCTOS DISPONIBLES:
${bankProducts.map(product => `
- ${product.name} (${product.category}):
  ${product.description}
  Características: ${product.features.join(', ')}
`).join('\n')}

INSTRUCCIONES PARA RESPONDER:

1. Si el usuario quiere NAVEGAR a una sección:
   - IMPORTANTE: SOLO usa las URLs de la lista de URLs VÁLIDAS anterior
   - Identifica la URL correcta de la lista basándote en las palabras clave
   - Responde confirmando que lo llevarás a esa sección
   - Incluye en tu respuesta: NAVIGATE_TO: [ruta exacta de la lista]
   - Ejemplo: Si el usuario dice "quiero ver tarjetas de crédito", usa NAVIGATE_TO: /tarjetas (NO /tarjetas/credito)
   - Ejemplo: Si el usuario dice "crédito hipotecario", usa NAVIGATE_TO: /creditos (NO /creditos/hipotecario)

2. Si el usuario quiere solicitar o consultar sobre un CRÉDITO:
   - ⚠️ CRÍTICO: SIEMPRE incluye NAVIGATE_TO en tu primera respuesta sobre créditos
   - FORMATO REQUERIDO: Tu respuesta debe terminar con la etiqueta NAVIGATE_TO: /creditos
   - Ejemplo correcto: "¡Perfecto! Te llevo a nuestra sección de créditos automotrices. ¿Qué monto necesitas? NAVIGATE_TO: /creditos"
   - Después de navegar, continúa la conversación preguntando detalles UNO a la vez
   - Mantén el contexto: si dijeron "crédito automotriz" y luego "100000", asume que 100000 es el monto del crédito automotriz
   - Si mencionan "simular" o "calcular", usa: NAVIGATE_TO: /creditos#calculadora
   - Para solicitar después de recopilar datos: NAVIGATE_TO: /creditos/solicitud FILL_FORM: {datos}

3. Si el usuario quiere INFORMACIÓN sobre productos:
   - Proporciona información detallada y relevante
   - Sugiere productos relacionados
   - Ofrece comparaciones si es pertinente

4. Si el usuario hace preguntas GENERALES:
   - Responde de forma amigable y profesional
   - Ofrece ayuda adicional
   - Sugiere acciones que puede realizar

MENSAJE DEL USUARIO: ${message}

Responde de forma natural, amigable y profesional. Si detectas una intención de navegación, VERIFICA que la URL esté en la lista de URLs VÁLIDAS antes de usarla. Solo incluye las etiquetas especiales (NAVIGATE_TO o FILL_FORM) si es apropiado.
`;

    // Usar fetch directo con Gemini API
    const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: bankContext }] }]
        })
      }
    );

    const data = await response.json();
    const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Lo siento, no pude procesar tu mensaje.';

    // Detectar intenciones de navegación
    let navigationIntent = null;
    let formData = null;
    let cleanResponse = responseText;

    // Buscar etiqueta NAVIGATE_TO
    const navigateMatch = responseText.match(/NAVIGATE_TO:\s*([^\s\n]+)/);
    if (navigateMatch) {
      const requestedUrl = navigateMatch[1];

      // Validar que la URL sea válida
      const isValid = validUrls.some(url => url.path === requestedUrl);

      if (isValid) {
        navigationIntent = {
          action: 'navigate',
          target: requestedUrl,
        };
        cleanResponse = responseText.replace(/NAVIGATE_TO:\s*([^\s\n]+)/, '').trim();
      } else {
        // Si la URL no es válida, intentar encontrar la mejor coincidencia
        const urlParts = requestedUrl.split('/').filter(Boolean);
        let bestMatch = validUrls.find(url => url.path === `/${urlParts[0]}`);

        if (bestMatch) {
          navigationIntent = {
            action: 'navigate',
            target: bestMatch.path,
          };
          cleanResponse = responseText.replace(/NAVIGATE_TO:\s*([^\s\n]+)/, '').trim();
          cleanResponse += ` Te llevo a la sección principal de ${bestMatch.title}.`;
        } else {
          cleanResponse = responseText.replace(/NAVIGATE_TO:\s*([^\s\n]+)/, '').trim();
          cleanResponse += ' (La URL solicitada no existe, pero puedo ayudarte a encontrar lo que buscas)';
        }
      }
    }

    // Buscar etiqueta FILL_FORM
    const fillFormMatch = responseText.match(/FILL_FORM:\s*(\{[^}]+\})/);
    if (fillFormMatch) {
      try {
        formData = JSON.parse(fillFormMatch[1]);
        navigationIntent = {
          action: 'fillForm',
          target: '/creditos/solicitud',
        };
        cleanResponse = responseText.replace(/FILL_FORM:\s*(\{[^}]+\})/, '').trim();
      } catch (e) {
        console.error('Error parsing form data:', e);
      }
    }

    return NextResponse.json({
      response: cleanResponse,
      navigationIntent,
      formData,
    });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      {
        response: 'Lo siento, tuve un problema procesando tu mensaje. ¿Podrías intentar de nuevo?',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
