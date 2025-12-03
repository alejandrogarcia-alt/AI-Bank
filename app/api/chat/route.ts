import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/genai';
import { bankSections, bankProducts } from '@/lib/bankData';

const genai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

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

ESTRUCTURA DEL SITIO WEB (3 niveles de navegación):

${bankSections.map(section => `
${section.title} (${section.href}):
${section.subsections?.map(sub => `  - ${sub.title}: ${sub.description} (${sub.href})`).join('\n')}
`).join('\n')}

PRODUCTOS DISPONIBLES:
${bankProducts.map(product => `
- ${product.name} (${product.category}):
  ${product.description}
  Características: ${product.features.join(', ')}
`).join('\n')}

INSTRUCCIONES PARA RESPONDER:

1. Si el usuario quiere NAVEGAR a una sección:
   - Responde confirmando que lo llevarás a esa sección
   - Incluye en tu respuesta: NAVIGATE_TO: [ruta]
   - Ejemplo: "Te llevaré a la sección de créditos hipotecarios. NAVIGATE_TO: /creditos/hipotecario"

2. Si el usuario quiere solicitar un CRÉDITO:
   - Haz preguntas para obtener: nombre completo, email, teléfono, monto deseado, plazo, ingreso mensual
   - Cuando tengas toda la información, incluye: FILL_FORM: {datos en JSON}
   - Ejemplo: "Perfecto, voy a pre-llenar tu solicitud. FILL_FORM: {\"fullName\":\"Juan\",\"amount\":50000,...}"

3. Si el usuario quiere INFORMACIÓN sobre productos:
   - Proporciona información detallada y relevante
   - Sugiere productos relacionados
   - Ofrece comparaciones si es pertinente

4. Si el usuario hace preguntas GENERALES:
   - Responde de forma amigable y profesional
   - Ofrece ayuda adicional
   - Sugiere acciones que puede realizar

MENSAJE DEL USUARIO: ${message}

Responde de forma natural, amigable y profesional. Si detectas una intención de navegación o llenado de formulario, incluye las etiquetas especiales (NAVIGATE_TO o FILL_FORM) al final de tu respuesta.
`;

    const model = genai.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent(bankContext);
    const responseText = result.response.text();

    // Detectar intenciones de navegación
    let navigationIntent = null;
    let formData = null;
    let cleanResponse = responseText;

    // Buscar etiqueta NAVIGATE_TO
    const navigateMatch = responseText.match(/NAVIGATE_TO:\s*([^\s\n]+)/);
    if (navigateMatch) {
      navigationIntent = {
        action: 'navigate',
        target: navigateMatch[1],
      };
      cleanResponse = responseText.replace(/NAVIGATE_TO:\s*([^\s\n]+)/, '').trim();
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
