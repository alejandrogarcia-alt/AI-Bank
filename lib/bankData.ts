import { BankSection, BankProduct } from '@/types';

// Estructura de navegación del banco (3 niveles)
export const bankSections: BankSection[] = [
  {
    id: 'cuentas',
    title: 'Cuentas',
    description: 'Administra tu dinero de forma segura y eficiente',
    icon: 'Wallet',
    href: '/cuentas',
    subsections: [
      {
        id: 'cuenta-corriente',
        title: 'Cuenta Corriente',
        description: 'Maneja tus finanzas diarias sin comisiones',
        href: '/cuentas/corriente',
      },
      {
        id: 'cuenta-ahorro',
        title: 'Cuenta de Ahorro',
        description: 'Ahorra y genera rendimientos',
        href: '/cuentas/ahorro',
      },
      {
        id: 'cuenta-nomina',
        title: 'Cuenta Nómina',
        description: 'Recibe tu sueldo con beneficios exclusivos',
        href: '/cuentas/nomina',
      },
      {
        id: 'cuenta-joven',
        title: 'Cuenta Joven',
        description: 'Diseñada para estudiantes y jóvenes',
        href: '/cuentas/joven',
      },
    ],
  },
  {
    id: 'creditos',
    title: 'Créditos',
    description: 'Financia tus proyectos con las mejores tasas',
    icon: 'DollarSign',
    href: '/creditos',
    subsections: [
      {
        id: 'credito-personal',
        title: 'Crédito Personal',
        description: 'Préstamos rápidos para lo que necesites',
        href: '/creditos/personal',
      },
      {
        id: 'credito-hipotecario',
        title: 'Crédito Hipotecario',
        description: 'Compra la casa de tus sueños',
        href: '/creditos/hipotecario',
      },
      {
        id: 'credito-automotriz',
        title: 'Crédito Automotriz',
        description: 'Financia tu auto nuevo o seminuevo',
        href: '/creditos/automotriz',
      },
      {
        id: 'credito-pyme',
        title: 'Crédito PyME',
        description: 'Impulsa tu negocio',
        href: '/creditos/pyme',
      },
    ],
  },
  {
    id: 'tarjetas',
    title: 'Tarjetas',
    description: 'Encuentra la tarjeta perfecta para ti',
    icon: 'CreditCard',
    href: '/tarjetas',
    subsections: [
      {
        id: 'tarjeta-debito',
        title: 'Tarjetas de Débito',
        description: 'Accede a tu dinero en cualquier momento',
        href: '/tarjetas/debito',
      },
      {
        id: 'tarjeta-credito',
        title: 'Tarjetas de Crédito',
        description: 'Compra ahora y paga después',
        href: '/tarjetas/credito',
      },
      {
        id: 'tarjeta-empresarial',
        title: 'Tarjetas Empresariales',
        description: 'Controla los gastos de tu empresa',
        href: '/tarjetas/empresarial',
      },
    ],
  },
  {
    id: 'inversiones',
    title: 'Inversiones',
    description: 'Haz crecer tu patrimonio',
    icon: 'TrendingUp',
    href: '/inversiones',
    subsections: [
      {
        id: 'fondos-inversion',
        title: 'Fondos de Inversión',
        description: 'Invierte de forma diversificada',
        href: '/inversiones/fondos',
      },
      {
        id: 'cetes',
        title: 'CETES',
        description: 'Inversión segura con el gobierno',
        href: '/inversiones/cetes',
      },
      {
        id: 'bolsa-valores',
        title: 'Bolsa de Valores',
        description: 'Invierte en el mercado accionario',
        href: '/inversiones/bolsa',
      },
      {
        id: 'afore',
        title: 'AFORE',
        description: 'Planifica tu retiro',
        href: '/inversiones/afore',
      },
    ],
  },
  {
    id: 'seguros',
    title: 'Seguros',
    description: 'Protege lo que más importa',
    icon: 'Shield',
    href: '/seguros',
    subsections: [
      {
        id: 'seguro-vida',
        title: 'Seguro de Vida',
        description: 'Protege a tu familia',
        href: '/seguros/vida',
      },
      {
        id: 'seguro-auto',
        title: 'Seguro de Auto',
        description: 'Viaja tranquilo y protegido',
        href: '/seguros/auto',
      },
      {
        id: 'seguro-hogar',
        title: 'Seguro de Hogar',
        description: 'Protege tu patrimonio',
        href: '/seguros/hogar',
      },
      {
        id: 'seguro-gastos-medicos',
        title: 'Seguro de Gastos Médicos',
        description: 'Cuida tu salud sin preocupaciones',
        href: '/seguros/gastos-medicos',
      },
    ],
  },
  {
    id: 'servicios',
    title: 'Servicios',
    description: 'Realiza operaciones desde cualquier lugar',
    icon: 'Settings',
    href: '/servicios',
    subsections: [
      {
        id: 'banca-movil',
        title: 'Banca Móvil',
        description: 'Administra tus cuentas desde tu celular',
        href: '/servicios/banca-movil',
      },
      {
        id: 'banca-internet',
        title: 'Banca por Internet',
        description: 'Opera desde tu computadora',
        href: '/servicios/banca-internet',
      },
      {
        id: 'transferencias',
        title: 'Transferencias',
        description: 'Envía dinero de forma rápida y segura',
        href: '/servicios/transferencias',
      },
      {
        id: 'pago-servicios',
        title: 'Pago de Servicios',
        description: 'Paga tus recibos en línea',
        href: '/servicios/pago-servicios',
      },
    ],
  },
];

// Productos destacados
export const bankProducts: BankProduct[] = [
  {
    id: 'cuenta-corriente-multiplica',
    category: 'cuenta',
    name: 'Cuenta Corriente Multiplica',
    description: 'Sin comisiones por manejo de cuenta ni saldo mínimo',
    features: [
      'Sin comisión por manejo de cuenta',
      'Sin saldo mínimo',
      'Tarjeta de débito incluida',
      'Banca móvil y por internet',
      'Retiros sin comisión en cajeros',
    ],
    benefits: [
      'Acceso 24/7 a tu dinero',
      'Transferencias ilimitadas',
      'Alertas SMS gratuitas',
      'Atención personalizada',
    ],
    requirements: [
      'Identificación oficial vigente',
      'Comprobante de domicilio',
      'Mayor de 18 años',
    ],
    image: '/images/products/cuenta-corriente.jpg',
  },
  {
    id: 'credito-personal-express',
    category: 'credito',
    name: 'Crédito Personal Express',
    description: 'Obtén hasta $500,000 con respuesta en 24 horas',
    features: [
      'Hasta $500,000',
      'Plazos de 12 a 72 meses',
      'Respuesta en 24 horas',
      'Sin garantía hipotecaria',
      'Tasa fija',
    ],
    benefits: [
      'Dinero en tu cuenta en 48 horas',
      'Sin penalización por pago anticipado',
      'Domiciliación automática',
      'Simulador en línea',
    ],
    requirements: [
      'Ingresos mínimos de $10,000',
      'Antigüedad laboral de 1 año',
      'Buen historial crediticio',
    ],
    interestRate: 18.9,
    image: '/images/products/credito-personal.jpg',
  },
  {
    id: 'tarjeta-oro',
    category: 'tarjeta',
    name: 'Tarjeta Multiplica Oro',
    description: 'Gana puntos en cada compra y disfruta beneficios exclusivos',
    features: [
      'Hasta $100,000 de línea de crédito',
      '2% de cashback en todas las compras',
      'Meses sin intereses',
      'Protección de compras',
      'Sin anualidad el primer año',
    ],
    benefits: [
      'Acceso a salas VIP de aeropuertos',
      'Seguro de viaje incluido',
      'Asistencia en carretera',
      'Programa de recompensas',
    ],
    requirements: [
      'Ingresos mínimos de $15,000',
      'Buen historial crediticio',
    ],
    interestRate: 42.0,
    image: '/images/products/tarjeta-oro.jpg',
  },
  {
    id: 'inversion-multiplica',
    category: 'inversion',
    name: 'Inversión Multiplica',
    description: 'Inversión desde $1,000 con rendimientos competitivos',
    features: [
      'Inversión desde $1,000',
      'Rendimientos hasta 12% anual',
      'Disponibilidad inmediata',
      'Sin comisiones',
      'Garantizado',
    ],
    benefits: [
      'Rendimientos diarios',
      'Retiros sin penalización',
      'Estado de cuenta mensual',
      'Reinversión automática',
    ],
    image: '/images/products/inversion.jpg',
  },
];
