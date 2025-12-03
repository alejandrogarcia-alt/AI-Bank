export interface ValidUrl {
  path: string;
  title: string;
  description: string;
  keywords: string[];
}

export const validUrls: ValidUrl[] = [
  {
    path: '/',
    title: 'Inicio',
    description: 'Página principal de Multiplica Bank con resumen de todos los productos y servicios',
    keywords: ['inicio', 'home', 'principal', 'bienvenida', 'empezar'],
  },
  {
    path: '/cuentas',
    title: 'Cuentas Bancarias',
    description: 'Todas las cuentas bancarias: Cuenta Corriente, Cuenta de Ahorro, Cuenta Nómina, Cuenta Joven',
    keywords: ['cuentas', 'cuenta corriente', 'cuenta ahorro', 'cuenta nómina', 'cuenta joven', 'cuentas bancarias'],
  },
  {
    path: '/creditos',
    title: 'Créditos',
    description: 'Todos los créditos: Crédito Personal, Hipotecario, Automotriz, PyME. Incluye calculadora de crédito',
    keywords: ['créditos', 'crédito personal', 'hipotecario', 'automotriz', 'pyme', 'préstamos', 'financiamiento'],
  },
  {
    path: '/creditos/solicitud',
    title: 'Solicitud de Crédito',
    description: 'Formulario para solicitar cualquier tipo de crédito',
    keywords: ['solicitar crédito', 'aplicar crédito', 'formulario crédito', 'pedir préstamo'],
  },
  {
    path: '/tarjetas',
    title: 'Tarjetas',
    description: 'Todas las tarjetas: Oro (crédito premium), Clásica (crédito), Débito, Empresarial',
    keywords: ['tarjetas', 'tarjeta crédito', 'tarjeta débito', 'tarjeta oro', 'tarjeta clásica', 'tarjeta empresarial'],
  },
  {
    path: '/inversiones',
    title: 'Inversiones',
    description: 'Opciones de inversión: Fondos de Inversión, CETES, Bolsa de Valores, AFORE',
    keywords: ['inversiones', 'invertir', 'fondos', 'cetes', 'bolsa', 'afore', 'rendimientos'],
  },
  {
    path: '/seguros',
    title: 'Seguros',
    description: 'Seguros: Vida, Auto, Hogar, Gastos Médicos Mayores',
    keywords: ['seguros', 'seguro vida', 'seguro auto', 'seguro hogar', 'gastos médicos', 'protección'],
  },
  {
    path: '/servicios',
    title: 'Servicios',
    description: 'Servicios bancarios: Transferencias, Pagos de Servicios, Domiciliación, Asesoría Financiera',
    keywords: ['servicios', 'transferencias', 'pagos', 'domiciliación', 'asesoría', 'banca en línea'],
  },
  {
    path: '/registro',
    title: 'Registro / Abrir Cuenta',
    description: 'Formulario para abrir una cuenta nueva en Multiplica Bank',
    keywords: ['registro', 'registrarse', 'abrir cuenta', 'nueva cuenta', 'crear cuenta', 'inscribirse'],
  },
];

export function findBestMatchingUrl(userMessage: string): ValidUrl | null {
  const messageLower = userMessage.toLowerCase();

  // Buscar coincidencias exactas primero
  for (const url of validUrls) {
    if (url.keywords.some(keyword => messageLower.includes(keyword))) {
      return url;
    }
  }

  return null;
}

export function getAllUrlsForContext(): string {
  return validUrls.map(url =>
    `- ${url.path}: ${url.title} - ${url.description}`
  ).join('\n');
}
