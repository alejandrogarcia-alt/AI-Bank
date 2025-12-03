'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingChat from '@/components/FloatingChat';
import Link from 'next/link';
import { ArrowRight, Calculator } from 'lucide-react';
import { useState } from 'react';

const creditos = [
  {
    id: 'personal',
    name: 'Crédito Personal Express',
    description: 'Préstamo rápido sin garantía',
    icon: '💰',
    color: 'from-blue-500 to-blue-600',
    amount: 'Hasta $500,000',
    rate: '18.9%',
    term: '12 a 72 meses',
    features: [
      'Respuesta en 24 horas',
      'Sin garantía hipotecaria',
      'Tasa fija',
      'Dinero en 48 horas',
    ],
    href: '/creditos/solicitud',
  },
  {
    id: 'hipotecario',
    name: 'Crédito Hipotecario',
    description: 'Compra la casa de tus sueños',
    icon: '🏠',
    color: 'from-green-500 to-green-600',
    amount: 'Hasta $5,000,000',
    rate: '10.5%',
    term: 'Hasta 20 años',
    features: [
      'Hasta 90% del valor',
      'Tasa competitiva',
      'Seguro incluido',
      'Sin comisión por apertura',
    ],
    href: '/creditos/solicitud',
  },
  {
    id: 'automotriz',
    name: 'Crédito Automotriz',
    description: 'Financia tu auto nuevo o seminuevo',
    icon: '🚗',
    color: 'from-red-500 to-red-600',
    amount: 'Hasta $800,000',
    rate: '14.9%',
    term: '12 a 60 meses',
    features: [
      'Hasta 80% del valor',
      'Aprobación rápida',
      'Seguro opcional',
      'Autos nuevos y seminuevos',
    ],
    href: '/creditos/solicitud',
  },
  {
    id: 'pyme',
    name: 'Crédito PyME',
    description: 'Impulsa tu negocio',
    icon: '🏢',
    color: 'from-purple-500 to-purple-600',
    amount: 'Hasta $2,000,000',
    rate: '16.5%',
    term: '12 a 84 meses',
    features: [
      'Capital de trabajo',
      'Equipo y maquinaria',
      'Expansión de negocio',
      'Asesoría incluida',
    ],
    href: '/creditos/solicitud',
  },
];

export default function CreditosPage() {
  const [calcAmount, setCalcAmount] = useState(100000);
  const [calcTerm, setCalcTerm] = useState(24);
  const [calcRate] = useState(18.9);

  const calculateMonthly = () => {
    const monthlyRate = calcRate / 100 / 12;
    const monthly = (calcAmount * monthlyRate * Math.pow(1 + monthlyRate, calcTerm)) /
      (Math.pow(1 + monthlyRate, calcTerm) - 1);
    return monthly.toFixed(2);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-5xl font-bold mb-6">Créditos</h1>
            <p className="text-xl text-primary-50 mb-8 max-w-2xl">
              Financia tus proyectos con las mejores tasas del mercado. Respuesta rápida y trámite 100% digital.
            </p>
            <Link
              href="/creditos/solicitud"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Solicitar Crédito
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Créditos Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {creditos.map((credito, index) => {
                const images = [
                  'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=800&q=80',
                  'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
                  'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&q=80',
                  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
                ];
                return (
                  <div
                    key={credito.id}
                    className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow group"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={images[index]}
                        alt={credito.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <h2 className="text-2xl font-bold mb-2">{credito.name}</h2>
                        <p className="text-white/90">{credito.description}</p>
                      </div>
                    </div>

                  <div className="p-6">
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Monto</div>
                        <div className="font-semibold text-gray-900">{credito.amount}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Tasa</div>
                        <div className="font-semibold text-primary-600">{credito.rate}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Plazo</div>
                        <div className="font-semibold text-gray-900">{credito.term}</div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {credito.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700">
                          <span className="text-primary-500">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={credito.href}
                      className="block w-full py-3 bg-primary-500 text-white text-center rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                    >
                      Solicitar Ahora
                    </Link>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Calculadora */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-4">
                <Calculator className="w-5 h-5" />
                <span className="font-medium">Calculadora de Crédito</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Calcula tu Pago Mensual
              </h2>
              <p className="text-xl text-gray-600">
                Simula tu crédito y conoce cuánto pagarías al mes
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="space-y-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monto del Crédito: ${calcAmount.toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min="10000"
                    max="500000"
                    step="10000"
                    value={calcAmount}
                    onChange={(e) => setCalcAmount(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>$10,000</span>
                    <span>$500,000</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Plazo: {calcTerm} meses
                  </label>
                  <input
                    type="range"
                    min="12"
                    max="72"
                    step="12"
                    value={calcTerm}
                    onChange={(e) => setCalcTerm(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>12 meses</span>
                    <span>72 meses</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-2">Tu pago mensual sería de:</div>
                  <div className="text-5xl font-bold text-primary-600 mb-4">
                    ${calculateMonthly()}
                  </div>
                  <div className="text-sm text-gray-600 mb-6">
                    Tasa de interés: {calcRate}% anual
                  </div>
                  <Link
                    href="/creditos/solicitud"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                  >
                    Solicitar este Crédito
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Requisitos */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Requisitos Generales
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Documentación</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Identificación oficial vigente</li>
                  <li>• Comprobante de domicilio</li>
                  <li>• Comprobante de ingresos</li>
                  <li>• Estado de cuenta bancario</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Perfil</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Mayor de 18 años</li>
                  <li>• Ingresos comprobables</li>
                  <li>• Antigüedad laboral mínima</li>
                  <li>• Buen historial crediticio</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Proceso</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Solicitud en línea</li>
                  <li>• Análisis en 24 horas</li>
                  <li>• Firma digital</li>
                  <li>• Depósito en 48 horas</li>
                </ul>
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
