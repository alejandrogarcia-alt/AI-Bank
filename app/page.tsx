'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { bankSections, bankProducts } from '@/lib/bankData';
import Link from 'next/link';
import { ArrowRight, Sparkles, Shield, Zap, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-500 via-secondary-500 to-primary-600 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
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
                <img
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
                  alt="App Multiplica Bank"
                  className="rounded-2xl shadow-2xl"
                />
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
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <div className="relative h-40 overflow-hidden bg-gradient-to-br from-primary-500 to-secondary-500">
                    <img
                      src={
                        product.category === 'cuenta' ? 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&q=80' :
                        product.category === 'credito' ? 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80' :
                        product.category === 'tarjeta' ? 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80' :
                        'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=80'
                      }
                      alt={product.name}
                      className="w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
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
              {bankSections.map((section, index) => {
                const images = [
                  'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=80',
                  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
                  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
                  'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
                  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
                  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
                ];
                return (
                  <Link
                    key={section.id}
                    href={section.href}
                    className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all hover:border-primary-500"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={images[index]}
                        alt={section.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-2xl font-semibold text-white mb-1">
                          {section.title}
                        </h3>
                        <p className="text-white/90 text-sm">{section.description}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      {section.subsections && (
                        <ul className="space-y-2">
                          {section.subsections.slice(0, 3).map((subsection) => (
                            <li key={subsection.id} className="text-sm text-gray-600 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                              {subsection.title}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </Link>
                );
              })}
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
    </div>
  );
}
