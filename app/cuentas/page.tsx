'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingChat from '@/components/FloatingChat';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

const cuentas = [
  {
    id: 'corriente',
    name: 'Cuenta Corriente Multiplica',
    description: 'Ideal para el día a día',
    image: '💳',
    features: [
      'Sin comisión por manejo de cuenta',
      'Sin saldo mínimo requerido',
      'Tarjeta de débito incluida',
      'Banca móvil y por internet',
      'Retiros ilimitados sin comisión',
      'Transferencias SPEI gratuitas',
    ],
    benefits: [
      'Acceso 24/7 a tu dinero',
      'Alertas SMS gratuitas',
      'Estado de cuenta digital',
      'Atención personalizada',
    ],
    cta: 'Abrir Cuenta',
    href: '/registro',
  },
  {
    id: 'ahorro',
    name: 'Cuenta de Ahorro',
    description: 'Ahorra y genera rendimientos',
    image: '💰',
    features: [
      'Rendimientos hasta 8% anual',
      'Sin comisiones',
      'Retiros ilimitados',
      'Inversión desde $1',
      'Disponibilidad inmediata',
      'Reinversión automática',
    ],
    benefits: [
      'Rendimientos diarios',
      'Sin penalización por retiro',
      'Seguro de depósito',
      'Banca digital incluida',
    ],
    cta: 'Abrir Cuenta',
    href: '/registro',
  },
  {
    id: 'nomina',
    name: 'Cuenta Nómina',
    description: 'Beneficios exclusivos para tu sueldo',
    image: '💵',
    features: [
      'Sin comisión con depósito de nómina',
      'Crédito pre-aprobado',
      'Seguro de vida incluido',
      'Tarjeta de débito premium',
      'Cashback en compras',
      'Adelanto de nómina',
    ],
    benefits: [
      'Hasta $50,000 de crédito',
      '3% de cashback',
      'Seguro hasta $500,000',
      'Sin anualidad',
    ],
    cta: 'Solicitar',
    href: '/registro',
  },
  {
    id: 'joven',
    name: 'Cuenta Joven',
    description: 'Para estudiantes y jóvenes',
    image: '🎓',
    features: [
      'Gratis hasta los 25 años',
      'Sin saldo mínimo',
      'Tarjeta personalizada',
      'Descuentos en comercios',
      'App móvil exclusiva',
      'Cashback en entretenimiento',
    ],
    benefits: [
      '10% de descuento en cines',
      'Cashback en streaming',
      'Retiros gratis en todo el país',
      'Sin anualidad',
    ],
    cta: 'Abrir Cuenta',
    href: '/registro',
  },
];

export default function CuentasPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-5xl font-bold mb-6">Cuentas Bancarias</h1>
            <p className="text-xl text-primary-50 mb-8 max-w-2xl">
              Encuentra la cuenta perfecta para administrar tu dinero. Sin comisiones ocultas, con todos los beneficios.
            </p>
          </div>
        </section>

        {/* Cuentas Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {cuentas.map((cuenta, index) => {
                const images = [
                  'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80',
                  'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80',
                  'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=800&q=80',
                  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
                ];
                return (
                <div
                  key={cuenta.id}
                  className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={images[index]}
                      alt={cuenta.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h2 className="text-3xl font-bold mb-2">{cuenta.name}</h2>
                      <p className="text-white/90 text-lg">{cuenta.description}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Características</h3>
                      <ul className="space-y-2">
                        {cuenta.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-700">
                            <Check className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Beneficios</h3>
                      <ul className="space-y-2">
                        {cuenta.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-700">
                            <span className="text-primary-500">✓</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={cuenta.href}
                      className="block w-full py-3 bg-primary-500 text-white text-center rounded-lg font-semibold hover:bg-primary-600 transition-colors flex items-center justify-center gap-2"
                    >
                      {cuenta.cta}
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Comparación */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Compara Nuestras Cuentas
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left text-gray-900 font-semibold border-b">Característica</th>
                    <th className="px-6 py-4 text-center text-gray-900 font-semibold border-b">Corriente</th>
                    <th className="px-6 py-4 text-center text-gray-900 font-semibold border-b">Ahorro</th>
                    <th className="px-6 py-4 text-center text-gray-900 font-semibold border-b">Nómina</th>
                    <th className="px-6 py-4 text-center text-gray-900 font-semibold border-b">Joven</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-6 py-4 text-gray-700">Comisión mensual</td>
                    <td className="px-6 py-4 text-center text-primary-600 font-semibold">$0</td>
                    <td className="px-6 py-4 text-center text-primary-600 font-semibold">$0</td>
                    <td className="px-6 py-4 text-center text-primary-600 font-semibold">$0*</td>
                    <td className="px-6 py-4 text-center text-primary-600 font-semibold">$0</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 text-gray-700">Saldo mínimo</td>
                    <td className="px-6 py-4 text-center">$0</td>
                    <td className="px-6 py-4 text-center">$0</td>
                    <td className="px-6 py-4 text-center">$0</td>
                    <td className="px-6 py-4 text-center">$0</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 text-gray-700">Rendimientos</td>
                    <td className="px-6 py-4 text-center">-</td>
                    <td className="px-6 py-4 text-center text-primary-600 font-semibold">8% anual</td>
                    <td className="px-6 py-4 text-center">-</td>
                    <td className="px-6 py-4 text-center">-</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 text-gray-700">Transferencias SPEI</td>
                    <td className="px-6 py-4 text-center">Gratis</td>
                    <td className="px-6 py-4 text-center">Gratis</td>
                    <td className="px-6 py-4 text-center">Gratis</td>
                    <td className="px-6 py-4 text-center">Gratis</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-700">Cashback</td>
                    <td className="px-6 py-4 text-center">-</td>
                    <td className="px-6 py-4 text-center">-</td>
                    <td className="px-6 py-4 text-center text-primary-600 font-semibold">3%</td>
                    <td className="px-6 py-4 text-center text-primary-600 font-semibold">En comercios</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              * Con depósito de nómina mínimo de $7,000
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingChat />
    </div>
  );
}
