# Multiplica Bank - Banca Digital Inteligente

![Multiplica Bank](https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Gemini AI](https://img.shields.io/badge/Gemini-AI-4285F4?style=for-the-badge&logo=google)

Sitio web bancario simulado con asistente virtual inteligente que permite navegar el sitio, consultar productos financieros y pre-llenar formularios usando inteligencia artificial de Google Gemini.

## 🌟 Características

- **🤖 Asistente Virtual Inteligente**: Chat flotante con IA que interpreta intenciones de navegación
- **🚀 Navegación Asistida por IA**: Navega por el sitio usando lenguaje natural
- **📝 Pre-llenado de Formularios**: Completa formularios de crédito conversando con el asistente
- **💳 Productos Bancarios Completos**: Cuentas, créditos, tarjetas, inversiones y seguros
- **📱 Diseño Responsive**: Optimizado para desktop, tablet y móvil
- **🎨 Estética Moderna**: Basada en el diseño de Multiplica Shop

## 🏗️ Estructura del Sitio

### Nivel 1 - Secciones Principales
- Cuentas
- Créditos
- Tarjetas
- Inversiones
- Seguros
- Servicios

### Nivel 2 - Subsecciones (Ejemplo: Créditos)
- Crédito Personal
- Crédito Hipotecario
- Crédito Automotriz
- Crédito PyME

### Nivel 3 - Páginas de Detalle
- Información del producto
- Características y beneficios
- Requisitos
- Formularios de solicitud

## 🚀 Instalación

### Prerrequisitos
- Node.js 18+
- npm o yarn
- API Key de Google Gemini

### Pasos de Instalación

1. **Clona el repositorio**
```bash
cd "/Users/amgarcia71/Development/AI Bank/multiplica-bank"
```

2. **Instala las dependencias**
```bash
npm install
```

3. **Configura las variables de entorno**
```bash
cp .env.example .env
```

Edita el archivo `.env` y agrega tu API key de Gemini:
```
GEMINI_API_KEY=tu_api_key_aqui
```

Para obtener una API key gratuita de Gemini:
- Visita: https://makersuite.google.com/app/apikey
- Inicia sesión con tu cuenta de Google
- Crea una nueva API key

4. **Inicia el servidor de desarrollo**
```bash
npm run dev
```

5. **Abre tu navegador**
```
http://localhost:3000
```

## 💬 Uso del Asistente Virtual

El asistente virtual puede ayudarte con:

### Navegación
```
Usuario: "Quiero ver las opciones de crédito hipotecario"
Asistente: Te llevaré a la sección de créditos hipotecarios...
→ Navega automáticamente a /creditos/hipotecario
```

### Pre-llenado de Formularios
```
Usuario: "Quiero solicitar un crédito personal por 50 mil pesos"
Asistente: ¡Perfecto! Para ayudarte con tu solicitud, necesito algunos datos...
Usuario: "Mi nombre es Juan Pérez, correo juan@email.com..."
Asistente: Excelente, voy a pre-llenar tu solicitud...
→ Navega a /creditos/solicitud con los datos pre-llenados
```

### Información de Productos
```
Usuario: "¿Qué tarjetas de crédito ofrecen?"
Asistente: Tenemos varias opciones de tarjetas de crédito:
- Tarjeta Multiplica Oro: 2% cashback, hasta $100,000...
- Tarjeta Clásica: Sin anualidad, hasta $50,000...
```

## 🛠️ Tecnologías Utilizadas

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **IA**: Google Gemini 1.5 Flash
- **Iconos**: Lucide React
- **HTTP Client**: Axios

## 📁 Estructura del Proyecto

```
multiplica-bank/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # API endpoint para el chat con Gemini
│   ├── creditos/
│   │   └── solicitud/
│   │       └── page.tsx           # Formulario de crédito con pre-llenado
│   ├── globals.css                # Estilos globales
│   ├── layout.tsx                 # Layout principal
│   └── page.tsx                   # Página de inicio
├── components/
│   ├── FloatingChat.tsx           # Chat flotante con IA
│   ├── Header.tsx                 # Navegación principal
│   └── Footer.tsx                 # Footer del sitio
├── lib/
│   └── bankData.ts                # Datos de productos y secciones
├── types/
│   └── index.ts                   # Tipos de TypeScript
└── public/
    └── images/                    # Imágenes del sitio
```

## 🎨 Personalización

### Colores del Tema

Los colores principales se definen en `tailwind.config.ts`:

```typescript
primary: {
  500: '#00E68A',  // Verde principal
  600: '#00B36B',
}
secondary: {
  500: '#0075A2',  // Azul secundario
  600: '#005C7F',
}
```

### Productos Bancarios

Edita `lib/bankData.ts` para modificar:
- Secciones del sitio
- Productos disponibles
- Características y beneficios

## 🤝 Contribuciones

Este es un proyecto de demostración. Si deseas contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 🙏 Agradecimientos

- Diseño basado en [Multiplica Shop](../AI%20Shop/multiplica-shop)
- IA powered by Google Gemini
- Iconos por Lucide React

## 📧 Contacto

Para preguntas o sugerencias:
- Email: amgarcia71@example.com
- Proyecto: AI Bank

---

Hecho con ❤️ usando Next.js y Google Gemini
