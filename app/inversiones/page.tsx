'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingChat from '@/components/FloatingChat';
import Link from 'next/link';
import { ArrowRight, TrendingUp } from 'lucide-react';

const inversiones = [
  {
    id: 'fondos',
    name: 'Fondos de Inversión',
    description: 'Diversifica tu portafolio',
    icon: '📊',
    color: 'from-blue-500 to-blue-600',
    amount: 'Desde $1,000',
    return: 'Hasta 12% anual',
    risk: 'Medio',
    features: [
      'Diversificación automática',
      'Administración profesional',
      'Liquidez en 48 horas',
      'Sin comisiones de entrada',
      'Rebalanceo automático',
    ],
  },
  {
    id: 'cetes',
    name: 'CETES',
    description: 'Inversión garantizada por el gobierno',
    icon: '🏛️',
    color: 'from-green-500 to-green-600',
    amount: 'Desde $100',
    return: 'Tasa actual 10.5%',
    risk: 'Muy bajo',
    features: [
      'Garantizado por el gobierno',
      'Plazos de 28 a 364 días',
      'Alta liquidez',
      'Sin comisiones',
      'Rendimientos predecibles',
    ],
  },
  {
    id: 'bolsa',
    name: 'Bolsa de Valores',
    description: 'Invierte en acciones',
    icon: '📈',
    color: 'from-purple-500 to-purple-600',
    amount: 'Desde $5,000',
    return: 'Variable',
    risk: 'Alto',
    features: [
      'Acceso al mercado mexicano',
      'Plataforma de trading',
      'Análisis en tiempo real',
      'Comisiones competitivas',
      'Asesoría especializada',
    ],
  },
  {
    id: 'afore',
    name: 'AFORE',
    description: 'Planifica tu retiro',
    icon: '🏖️',
    color: 'from-orange-500 to-orange-600',
    amount: 'Sin mínimo',
    return: 'Promedio 6-8% anual',
    risk: 'Bajo a Medio',
    features: [
      'Ahorro para el retiro',
      'Beneficios fiscales',
      'Aportaciones voluntarias',
      'Sin comisiones altas',
      'Portabilidad total',
    ],
  },
];

export default function InversionesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-12 h-12" />
              <h1 className="text-5xl font-bold">Inversiones</h1>
            </div>
            <p className="text-xl text-primary-50 mb-8 max-w-2xl">
              Haz crecer tu patrimonio con opciones de inversión seguras y rentables. Desde conservadoras hasta agresivas.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="text-sm font-medium">🎯 Inversión mínima desde $100</span>
            </div>
          </div>
        </section>

        {/* Inversiones Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {inversiones.map((inversion, index) => {
                const images = [
                  'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
                  'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80',
                  'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
                  'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
                ];
                return (
                  <div
                    key={inversion.id}
                    className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow group"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={images[index]}
                        alt={inversion.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <h2 className="text-3xl font-bold mb-2">{inversion.name}</h2>
                        <p className="text-white/90 text-lg">{inversion.description}</p>
                      </div>
                    </div>

                  <div className="p-6">
                    <div className="grid grid-cols-3 gap-4 mb-6 bg-gray-50 rounded-lg p-4">
                      <div>
                        <div className="text-xs text-gray-600 mb-1">Inversión</div>
                        <div className="font-semibold text-gray-900">{inversion.amount}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600 mb-1">Rendimiento</div>
                        <div className="font-semibold text-primary-600">{inversion.return}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600 mb-1">Riesgo</div>
                        <div className="font-semibold text-gray-900">{inversion.risk}</div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {inversion.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700">
                          <span className="text-primary-500">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/registro"
                      className="block w-full py-3 bg-primary-500 text-white text-center rounded-lg font-semibold hover:bg-primary-600 transition-colors flex items-center justify-center gap-2"
                    >
                      Comenzar a Invertir
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Perfil de Riesgo */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
              ¿Qué perfil de inversionista eres?
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Encuentra las inversiones adecuadas según tu tolerancia al riesgo
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Conservador</h3>
                <p className="text-gray-700 mb-4">
                  Prefieres seguridad y estabilidad sobre altos rendimientos
                </p>
                <div className="space-y-2">
                  <div className="text-sm text-gray-600">Recomendado:</div>
                  <div className="font-medium">• CETES</div>
                  <div className="font-medium">• AFORE</div>
                </div>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <div className="text-4xl mb-4">⚖️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Moderado</h3>
                <p className="text-gray-700 mb-4">
                  Buscas balance entre seguridad y crecimiento
                </p>
                <div className="space-y-2">
                  <div className="text-sm text-gray-600">Recomendado:</div>
                  <div className="font-medium">• Fondos de Inversión</div>
                  <div className="font-medium">• Mix CETES + Fondos</div>
                </div>
              </div>

              <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Agresivo</h3>
                <p className="text-gray-700 mb-4">
                  Buscas máximo rendimiento y toleras volatilidad
                </p>
                <div className="space-y-2">
                  <div className="text-sm text-gray-600">Recomendado:</div>
                  <div className="font-medium">• Bolsa de Valores</div>
                  <div className="font-medium">• Fondos Agresivos</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingChat />
    </div>
  );
}
