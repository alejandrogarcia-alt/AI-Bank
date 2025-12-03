'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

const tarjetas = [
  {
    id: 'oro',
    name: 'Tarjeta Multiplica Oro',
    type: 'Crédito',
    description: 'Cashback y beneficios premium',
    icon: '💎',
    color: 'from-yellow-500 to-yellow-600',
    features: [
      '2% cashback en todas las compras',
      'Hasta $100,000 de crédito',
      'Meses sin intereses',
      'Sin anualidad el primer año',
      'Acceso a salas VIP',
      'Seguro de viaje incluido',
    ],
    benefits: ['Protección de compras', 'Asistencia en carretera', 'Programa de recompensas'],
    rate: '42% anual',
  },
  {
    id: 'clasica',
    name: 'Tarjeta Clásica',
    type: 'Crédito',
    description: 'Tu primera tarjeta de crédito',
    icon: '💳',
    color: 'from-blue-500 to-blue-600',
    features: [
      'Hasta $50,000 de crédito',
      'Sin anualidad',
      'Meses sin intereses',
      'App móvil',
      'Alertas de compra',
      'Bloqueo temporal',
    ],
    benefits: ['Fácil aprobación', 'Construcción de historial', 'Atención 24/7'],
    rate: '45% anual',
  },
  {
    id: 'debito',
    name: 'Tarjeta de Débito',
    type: 'Débito',
    description: 'Accede a tu dinero al instante',
    icon: '💰',
    color: 'from-green-500 to-green-600',
    features: [
      'Sin comisiones por uso',
      'Retiros gratis en cajeros',
      'Compras en línea seguras',
      'Contactless (NFC)',
      'Control desde app',
      'Alertas instantáneas',
    ],
    benefits: ['Sin cuota anual', 'Protección contra fraude', 'Reemplazo inmediato'],
    rate: 'N/A',
  },
  {
    id: 'empresarial',
    name: 'Tarjeta Empresarial',
    type: 'Crédito Empresarial',
    description: 'Para los gastos de tu negocio',
    icon: '🏢',
    color: 'from-purple-500 to-purple-600',
    features: [
      'Hasta $500,000 de crédito',
      'Tarjetas adicionales sin costo',
      'Control de gastos por empleado',
      'Reportes detallados',
      'Días de crédito extendidos',
      'Descuentos corporativos',
    ],
    benefits: ['Facturación automática', 'Portal administrativo', 'Asesor dedicado'],
    rate: '38% anual',
  },
];

export default function TarjetasPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-5xl font-bold mb-6">Tarjetas</h1>
            <p className="text-xl text-primary-50 mb-8 max-w-2xl">
              Encuentra la tarjeta perfecta para ti. Crédito, débito o empresarial, tenemos la opción ideal.
            </p>
          </div>
        </section>

        {/* Tarjetas Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tarjetas.map((tarjeta, index) => {
                const images = [
                  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
                  'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
                  'https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&q=80',
                  'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
                ];
                return (
                  <div
                    key={tarjeta.id}
                    className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow group"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={images[index]}
                        alt={tarjeta.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="text-sm font-medium mb-2 opacity-90">{tarjeta.type}</div>
                        <h2 className="text-3xl font-bold mb-2">{tarjeta.name}</h2>
                        <p className="text-white/90">{tarjeta.description}</p>
                      </div>
                    </div>

                  <div className="p-6">
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Características</h3>
                      <ul className="space-y-2">
                        {tarjeta.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-700">
                            <Check className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6 bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Tasa de interés</span>
                        <span className="text-lg font-semibold text-primary-600">{tarjeta.rate}</span>
                      </div>
                    </div>

                    <Link
                      href="/registro"
                      className="block w-full py-3 bg-primary-500 text-white text-center rounded-lg font-semibold hover:bg-primary-600 transition-colors flex items-center justify-center gap-2"
                    >
                      Solicitar Tarjeta
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
              Compara Nuestras Tarjetas
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left text-gray-900 font-semibold border-b">Característica</th>
                    <th className="px-6 py-4 text-center text-gray-900 font-semibold border-b">Oro</th>
                    <th className="px-6 py-4 text-center text-gray-900 font-semibold border-b">Clásica</th>
                    <th className="px-6 py-4 text-center text-gray-900 font-semibold border-b">Débito</th>
                    <th className="px-6 py-4 text-center text-gray-900 font-semibold border-b">Empresarial</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-6 py-4 text-gray-700">Anualidad</td>
                    <td className="px-6 py-4 text-center">Gratis 1er año</td>
                    <td className="px-6 py-4 text-center text-primary-600 font-semibold">$0</td>
                    <td className="px-6 py-4 text-center text-primary-600 font-semibold">$0</td>
                    <td className="px-6 py-4 text-center">$1,200/año</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 text-gray-700">Cashback</td>
                    <td className="px-6 py-4 text-center text-primary-600 font-semibold">2%</td>
                    <td className="px-6 py-4 text-center">-</td>
                    <td className="px-6 py-4 text-center">-</td>
                    <td className="px-6 py-4 text-center">1%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 text-gray-700">Límite de crédito</td>
                    <td className="px-6 py-4 text-center">Hasta $100,000</td>
                    <td className="px-6 py-4 text-center">Hasta $50,000</td>
                    <td className="px-6 py-4 text-center">Tu saldo</td>
                    <td className="px-6 py-4 text-center text-primary-600 font-semibold">Hasta $500,000</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-700">Beneficios adicionales</td>
                    <td className="px-6 py-4 text-center">Salas VIP</td>
                    <td className="px-6 py-4 text-center">-</td>
                    <td className="px-6 py-4 text-center">Retiros gratis</td>
                    <td className="px-6 py-4 text-center">Portal admin</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
