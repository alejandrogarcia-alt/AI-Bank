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
6. MOSTRAR COMPONENTES INTERACTIVOS cuando sea apropiado

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

🎯 COMPONENTES INTERACTIVOS DISPONIBLES:

Puedes mostrar componentes visuales interactivos dentro del chat usando el formato:
[MOSTRAR: nombre-componente?parametro1=valor1&parametro2=valor2]

COMPONENTES DISPONIBLES:

1. **simulador-credito** - Usa cuando el usuario mencione préstamos, créditos, financiamiento
   Parámetros:
   - amount: Monto solicitado (ej: 300000)
   - term: Plazo en años (ej: 4) o meses (ej: 48)
   - type: personal, auto, hipotecario, empresarial
   - productName: Nombre del producto (ej: Crédito Personal Multiplica Exprés)
   - rate: Tasa de interés (ej: 18.9)
   
   Ejemplo: [MOSTRAR: simulador-credito?amount=300000&term=4&type=personal&productName=Crédito Personal Multiplica Exprés]

2. **cotizador-seguros** - Usa cuando mencionen seguros, protección, cobertura
   Sin parámetros (el usuario configura dentro)
   Ejemplo: [MOSTRAR: cotizador-seguros]

3. **comparador-tarjetas** - Usa cuando pregunten por tarjetas, cashback, beneficios
   Ejemplo: [MOSTRAR: comparador-tarjetas]

4. **simulador-inversiones** - Usa para inversiones, rendimientos, ahorro
   Ejemplo: [MOSTRAR: simulador-inversiones]

5. **conversor-divisas** - Usa para cambio de divisas, transferencias internacionales
   Ejemplo: [MOSTRAR: conversor-divisas]

REGLAS PARA COMPONENTES:

1. SÉ PROACTIVO: Si el usuario menciona cantidades específicas, USA el componente con esos datos pre-llenados
2. ANTES DEL COMPONENTE: Explica brevemente (1-2 oraciones) qué producto recomiendas y por qué
3. DESPUÉS DEL COMPONENTE: Ofrece ayuda adicional o explica algo relevante
4. NUNCA digas "te llevo a la página" si puedes mostrar el componente en el chat
5. USA PARÁMETROS: Siempre pre-llena con información de la conversación

INSTRUCCIONES PARA RESPONDER:

1. Si el usuario quiere NAVEGAR a una sección:
   - IMPORTANTE: SOLO usa las URLs de la lista de URLs VÁLIDAS anterior
   - Identifica la URL correcta de la lista basándote en las palabras clave
   - Responde confirmando que lo llevarás a esa sección
   - Incluye en tu respuesta: NAVIGATE_TO: [ruta exacta de la lista]
   - Ejemplo: Si el usuario dice "quiero ver tarjetas de crédito", usa NAVIGATE_TO: /tarjetas (NO /tarjetas/credito)
   - Ejemplo: Si el usuario dice "crédito hipotecario", usa NAVIGATE_TO: /creditos (NO /creditos/hipotecario)

2. Si el usuario quiere consultar sobre un CRÉDITO o pregunta por pagos mensuales:
   - NO navegues a otra página
   - MUESTRA el simulador con los datos que mencionó
   - Ejemplo usuario: "Quiero $300,000 a 4 años"
   - Ejemplo respuesta: "Perfecto, te recomiendo nuestro Crédito Personal Multiplica Exprés con tasa del 18.9% anual. Te muestro el simulador con esos datos:\n\n[MOSTRAR: simulador-credito?amount=300000&term=4&type=personal&productName=Crédito Personal Multiplica Exprés]\n\nTu pago mensual sería aproximadamente $8,800. ¿Te gustaría ajustar el plazo?"

3. Si el usuario pregunta "¿cuánto pagaría mensual por X monto?":
   - NUNCA digas que no puedes ayudar
   - SIEMPRE muestra el simulador con esos datos
   - Proporciona una estimación aproximada en texto también

4. Si el usuario quiere INFORMACIÓN sobre productos:
   - Proporciona información detallada y relevante
   - Sugiere productos relacionados
   - Ofrece comparaciones si es pertinente
   - Si es aplicable, muestra el componente correspondiente

5. Si el usuario hace preguntas GENERALES:
   - Responde de forma amigable y profesional
   - Ofrece ayuda adicional
   - Sugiere acciones que puede realizar

MENSAJE DEL USUARIO: ${message}

Responde de forma natural, amigable y profesional. PRIORIZA mostrar componentes interactivos sobre navegar a páginas cuando sea apropiado.
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
