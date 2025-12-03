'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, Smartphone, Monitor, Send, FileText } from 'lucide-react';

const servicios = [
  {
    id: 'banca-movil',
    name: 'Banca Móvil',
    description: 'Tu banco en la palma de tu mano',
    icon: '📱',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    features: [
      'Consulta saldos y movimientos',
      'Transferencias instantáneas',
      'Pago de servicios',
      'Touch ID / Face ID',
      'Retiro sin tarjeta en cajeros',
      'Alertas personalizadas',
    ],
  },
  {
    id: 'banca-internet',
    name: 'Banca por Internet',
    description: 'Administra desde tu computadora',
    icon: '💻',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    features: [
      'Dashboard completo',
      'Descarga de estados de cuenta',
      'Programación de pagos',
      'Inversiones en línea',
      'Gestor de presupuestos',
      'Reportes detallados',
    ],
  },
  {
    id: 'transferencias',
    name: 'Transferencias',
    description: 'Envía dinero rápido y seguro',
    icon: '💸',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
    features: [
      'SPEI inmediatas',
      'Transferencias internacionales',
      'Entre cuentas Multiplica',
      'Programación de transferencias',
      'Historial completo',
      'Confirmación por SMS',
    ],
  },
  {
    id: 'pago-servicios',
    name: 'Pago de Servicios',
    description: 'Paga todo desde un solo lugar',
    icon: '📄',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    features: [
      'Luz, agua, gas, teléfono',
      'Tarjetas de crédito',
      'Colegiaturas',
      'Impuestos',
      'Pagos recurrentes',
      'Sin comisiones',
    ],
  },
];

export default function ServiciosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-5xl font-bold mb-6">Servicios Digitales</h1>
            <p className="text-xl text-primary-50 mb-8 max-w-2xl">
              Opera desde cualquier lugar, en cualquier momento. Banca 100% digital a tu alcance.
            </p>
            <div className="flex gap-4 flex-wrap">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <Smartphone className="w-5 h-5" />
                <span className="text-sm font-medium">App Móvil</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <Monitor className="w-5 h-5" />
                <span className="text-sm font-medium">Banca Web</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <Send className="w-5 h-5" />
                <span className="text-sm font-medium">24/7 Disponible</span>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {servicios.map((servicio) => (
                <div
                  key={servicio.id}
                  className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={servicio.image}
                      alt={servicio.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-4xl mb-2">{servicio.icon}</div>
                      <h2 className="text-2xl font-bold">{servicio.name}</h2>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-600 mb-6 text-lg">{servicio.description}</p>

                    <ul className="space-y-2 mb-6">
                      {servicio.features.map((feature, index) => (
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
                      Activar Servicio
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Apps Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Descarga nuestra App
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Lleva tu banco contigo. Disponible para iOS y Android con más de 100,000 descargas.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Rápida y Segura</h3>
                      <p className="text-gray-600">Tecnología de punta con seguridad bancaria</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📊</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Control Total</h3>
                      <p className="text-gray-600">Todas tus operaciones en un solo lugar</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🔔</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Notificaciones Inteligentes</h3>
                      <p className="text-gray-600">Alertas en tiempo real de tus movimientos</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href="#"
                    className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <span className="text-2xl">🍎</span>
                    <div className="text-left">
                      <div className="text-xs">Descargar en</div>
                      <div className="font-semibold">App Store</div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <span className="text-2xl">🤖</span>
                    <div className="text-left">
                      <div className="text-xs">Descargar en</div>
                      <div className="font-semibold">Google Play</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
                  alt="App Multiplica Bank"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Atención al Cliente */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              ¿Necesitas Ayuda?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Nuestro equipo está disponible 24/7 para asistirte
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="font-semibold text-gray-900 mb-2">Teléfono</h3>
                <p className="text-primary-600 font-medium">800-MULTIPLICA</p>
                <p className="text-sm text-gray-600">Atención 24/7</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="font-semibold text-gray-900 mb-2">Chat</h3>
                <p className="text-primary-600 font-medium">Asistente Virtual</p>
                <p className="text-sm text-gray-600">Respuesta inmediata</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-primary-600 font-medium">ayuda@multiplica.com</p>
                <p className="text-sm text-gray-600">Respuesta en 24 hrs</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
