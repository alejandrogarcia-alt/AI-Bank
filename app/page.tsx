'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingChat from '@/components/FloatingChat';
import { bankSections, bankProducts } from '@/lib/bankData';
import Link from 'next/link';
import { ArrowRight, Sparkles, Shield, Zap, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-500 via-secondary-500 to-primary-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-medium">Banca Inteligente con IA</span>
                </div>
                <h1 className="text-5xl font-bold mb-6">
                  Tu banco, más inteligente que nunca
                </h1>
                <p className="text-xl text-primary-50 mb-8">
                  Navega, consulta y solicita productos financieros usando nuestro asistente virtual.
                  Más rápido, más fácil, más inteligente.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="/registro"
                    className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
                  >
                    Abrir Cuenta
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <button
                    onClick={() => {
                      // El botón del chat se abrirá
                      const chatButton = document.querySelector('[aria-label="Abrir chat"]') as HTMLButtonElement;
                      chatButton?.click();
                    }}
                    className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Habla con nuestro asistente
                  </button>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Zap className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Respuesta Instantánea</h3>
                        <p className="text-primary-100 text-sm">Obtén información al instante con IA</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">100% Seguro</h3>
                        <p className="text-primary-100 text-sm">Protección de datos de última generación</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">24/7 Disponible</h3>
                        <p className="text-primary-100 text-sm">Asistencia cuando la necesites</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Productos Destacados */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Productos Destacados</h2>
              <p className="text-xl text-gray-600">Las mejores opciones para tus finanzas</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {bankProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-xl">
                      {product.category === 'cuenta' ? '💳' :
                       product.category === 'credito' ? '💰' :
                       product.category === 'tarjeta' ? '💎' : '📈'}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-primary-500">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/productos/${product.id}`}
                    className="block text-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                  >
                    Más información
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Secciones del Banco */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
              <p className="text-xl text-gray-600">Todo lo que necesitas en un solo lugar</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bankSections.map((section) => (
                <Link
                  key={section.id}
                  href={section.href}
                  className="group bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all hover:border-primary-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                      <span className="text-2xl group-hover:scale-110 transition-transform">
                        {section.icon === 'Wallet' ? '💰' :
                         section.icon === 'DollarSign' ? '💵' :
                         section.icon === 'CreditCard' ? '💳' :
                         section.icon === 'TrendingUp' ? '📈' :
                         section.icon === 'Shield' ? '🛡️' : '⚙️'}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {section.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{section.description}</p>
                      {section.subsections && (
                        <ul className="space-y-1">
                          {section.subsections.slice(0, 3).map((subsection) => (
                            <li key={subsection.id} className="text-sm text-gray-500">
                              • {subsection.title}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">¿Listo para comenzar?</h2>
            <p className="text-xl text-primary-50 mb-8">
              Abre tu cuenta en minutos y empieza a disfrutar de la banca inteligente
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/registro"
                className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                Abrir Cuenta Ahora
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingChat />
    </div>
  );
}
