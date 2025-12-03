'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, Shield } from 'lucide-react';

const seguros = [
  {
    id: 'vida',
    name: 'Seguro de Vida',
    description: 'Protege a tu familia',
    icon: '❤️',
    color: 'from-red-500 to-pink-600',
    price: 'Desde $150/mes',
    coverage: 'Hasta $5,000,000',
    features: [
      'Cobertura por fallecimiento',
      'Muerte accidental doble',
      'Invalidez total y permanente',
      'Enfermedades graves',
      'Asistencia funeraria',
    ],
  },
  {
    id: 'auto',
    name: 'Seguro de Auto',
    description: 'Viaja tranquilo y protegido',
    icon: '🚗',
    color: 'from-blue-500 to-cyan-600',
    price: 'Desde $3,500/año',
    coverage: 'Amplia o Limitada',
    features: [
      'Responsabilidad civil',
      'Daños materiales',
      'Robo total',
      'Asistencia vial 24/7',
      'Auto sustituto',
    ],
  },
  {
    id: 'hogar',
    name: 'Seguro de Hogar',
    description: 'Protege tu patrimonio',
    icon: '🏠',
    color: 'from-green-500 to-emerald-600',
    price: 'Desde $200/mes',
    coverage: 'Hasta $3,000,000',
    features: [
      'Daños por incendio',
      'Robo de contenidos',
      'Fenómenos naturales',
      'Responsabilidad civil',
      'Asistencia en el hogar',
    ],
  },
  {
    id: 'gastos-medicos',
    name: 'Gastos Médicos Mayores',
    description: 'Cuida tu salud sin preocupaciones',
    icon: '🏥',
    color: 'from-purple-500 to-violet-600',
    price: 'Desde $800/mes',
    coverage: 'Hasta $10,000,000',
    features: [
      'Hospitalización',
      'Cirugías',
      'Medicamentos',
      'Red de hospitales',
      'Maternidad opcional',
    ],
  },
];

export default function SegurosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-12 h-12" />
              <h1 className="text-5xl font-bold">Seguros</h1>
            </div>
            <p className="text-xl text-primary-50 mb-8 max-w-2xl">
              Protege lo que más importa. Seguros con cobertura amplia y pagos flexibles para tu tranquilidad.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="text-sm font-medium">✓ Cotización sin compromiso</span>
            </div>
          </div>
        </section>

        {/* Seguros Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {seguros.map((seguro, index) => {
                const images = [
                  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
                  'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&q=80',
                  'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
                  'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80',
                ];
                return (
                  <div
                    key={seguro.id}
                    className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow group"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={images[index]}
                        alt={seguro.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <h2 className="text-3xl font-bold mb-2">{seguro.name}</h2>
                        <p className="text-white/90 text-lg">{seguro.description}</p>
                      </div>
                    </div>

                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6 bg-gray-50 rounded-lg p-4">
                      <div>
                        <div className="text-xs text-gray-600 mb-1">Prima</div>
                        <div className="font-semibold text-gray-900">{seguro.price}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-600 mb-1">Suma asegurada</div>
                        <div className="font-semibold text-primary-600">{seguro.coverage}</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">Coberturas incluidas:</h3>
                      <ul className="space-y-2">
                        {seguro.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-700">
                            <span className="text-primary-500">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/registro"
                      className="block w-full py-3 bg-primary-500 text-white text-center rounded-lg font-semibold hover:bg-primary-600 transition-colors flex items-center justify-center gap-2"
                    >
                      Cotizar Seguro
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Por qué contratar */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              ¿Por qué contratar un seguro?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Protección Financiera</h3>
                <p className="text-gray-600">
                  Evita gastos inesperados que puedan afectar tu patrimonio y estabilidad económica
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Tranquilidad Familiar</h3>
                <p className="text-gray-600">
                  Asegura el bienestar de tus seres queridos ante cualquier eventualidad
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💼</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Respaldo Profesional</h3>
                <p className="text-gray-600">
                  Accede a servicios de calidad con respaldo de aseguradoras de prestigio
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
