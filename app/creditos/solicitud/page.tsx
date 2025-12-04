'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CreditFormData } from '@/types';

function CreditApplicationForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState<CreditFormData>({
    fullName: '',
    email: '',
    phone: '',
    amount: 0,
    term: 12,
    purpose: '',
    monthlyIncome: 0,
    employment: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Función para recibir datos del chat
  const handleFormFill = (data: Partial<CreditFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
    // Scroll al formulario
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'amount' || name === 'term' || name === 'monthlyIncome' ? parseFloat(value) || 0 : value,
    }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-16 bg-gray-50">
          <div className="max-w-2xl mx-auto px-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">✓</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                ¡Solicitud Enviada!
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Hemos recibido tu solicitud de crédito. Te contactaremos en las próximas 24 horas.
              </p>
              <div className="bg-primary-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-700">
                  <strong>Número de referencia:</strong> CR-{Date.now().toString().slice(-8)}
                </p>
              </div>
              <button
                onClick={() => window.location.href = '/'}
                className="px-8 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
              >
                Volver al Inicio
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Solicitud de Crédito</h1>
            <p className="text-xl text-gray-600">
              Completa el formulario y obtén una respuesta en 24 horas
            </p>
            <div className="mt-4 inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm">
              💡 Tip: Usa el asistente virtual para llenar el formulario más rápido
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
            {/* Información Personal */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Información Personal</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Juan Pérez García"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="juan@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="55 1234 5678"
                  />
                </div>
                <div>
                  <label htmlFor="employment" className="block text-sm font-medium text-gray-700 mb-2">
                    Situación Laboral *
                  </label>
                  <select
                    id="employment"
                    name="employment"
                    value={formData.employment}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="empleado">Empleado</option>
                    <option value="independiente">Independiente</option>
                    <option value="empresario">Empresario</option>
                    <option value="jubilado">Jubilado</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Información del Crédito */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Información del Crédito</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
                    Monto Solicitado *
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      id="amount"
                      name="amount"
                      value={formData.amount || ''}
                      onChange={handleChange}
                      required
                      min="1000"
                      max="500000"
                      step="1000"
                      className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="50000"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Monto entre $1,000 y $500,000</p>
                </div>
                <div>
                  <label htmlFor="term" className="block text-sm font-medium text-gray-700 mb-2">
                    Plazo (meses) *
                  </label>
                  <select
                    id="term"
                    name="term"
                    value={formData.term}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="12">12 meses</option>
                    <option value="24">24 meses</option>
                    <option value="36">36 meses</option>
                    <option value="48">48 meses</option>
                    <option value="60">60 meses</option>
                    <option value="72">72 meses</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="monthlyIncome" className="block text-sm font-medium text-gray-700 mb-2">
                    Ingreso Mensual *
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      id="monthlyIncome"
                      name="monthlyIncome"
                      value={formData.monthlyIncome || ''}
                      onChange={handleChange}
                      required
                      min="10000"
                      step="1000"
                      className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="15000"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 mb-2">
                    Destino del Crédito *
                  </label>
                  <select
                    id="purpose"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="auto">Compra de auto</option>
                    <option value="vivienda">Vivienda</option>
                    <option value="educacion">Educación</option>
                    <option value="negocio">Negocio</option>
                    <option value="consolidacion">Consolidación de deudas</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Cálculo estimado */}
            {formData.amount > 0 && (
              <div className="mb-8 bg-primary-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Pago Mensual Estimado</h3>
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  ${(formData.amount * 1.189 / formData.term).toFixed(2)}
                </div>
                <p className="text-sm text-gray-600">
                  Tasa de interés estimada: 18.9% anual
                </p>
              </div>
            )}

            {/* Términos */}
            <div className="mb-6">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  required
                  className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
                <span className="text-sm text-gray-700">
                  Acepto los términos y condiciones y autorizo a Multiplica Bank a consultar mi historial crediticio
                </span>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Wrapper con Suspense para evitar errores de prerender
export default function CreditApplicationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Cargando formulario...</p>
          </div>
        </main>
        <Footer />
      </div>
    }>
      <CreditApplicationForm />
    </Suspense>
  );
}
