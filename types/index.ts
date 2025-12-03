// Tipos para el chat
export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  navigationIntent?: NavigationIntent;
  formData?: Partial<CreditFormData>;
  accountInfo?: AccountInfo;
}

// Intenciones de navegación
export interface NavigationIntent {
  action: 'navigate' | 'fillForm' | 'showInfo' | 'compare';
  target?: string;
  data?: any;
}

// Formularios
export interface CreditFormData {
  fullName: string;
  email: string;
  phone: string;
  amount: number;
  term: number;
  purpose: string;
  monthlyIncome: number;
  employment: string;
}

export interface AccountInfo {
  type: 'checking' | 'savings' | 'investment';
  name: string;
  description: string;
  benefits: string[];
  requirements: string[];
}

// Productos bancarios
export interface BankProduct {
  id: string;
  category: 'cuenta' | 'credito' | 'inversion' | 'seguro' | 'tarjeta';
  name: string;
  description: string;
  features: string[];
  benefits: string[];
  requirements?: string[];
  interestRate?: number;
  image?: string;
}

// Secciones del sitio
export interface BankSection {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  subsections?: BankSubsection[];
}

export interface BankSubsection {
  id: string;
  title: string;
  description: string;
  href: string;
}
