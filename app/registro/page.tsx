'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { User, Mail, Phone, Lock, CreditCard, MapPin } from 'lucide-react';

export default function RegistroPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Paso 1: Datos personales
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    // Paso 2: Dirección
    street: '',
    city: '',
    state: '',
    zipCode: '',
    // Paso 3: Seguridad
    password: '',
    confirmPassword: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-16 bg-gray-50">
          <div className="max-w-2xl mx-auto px-6">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Success Header with Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=800&q=80"
                  alt="Success"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-6xl text-primary-500">✓</span>
                  </div>
                </div>
              </div>

              <div className="p-8 text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                ¡Registro Exitoso!
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Bienvenido a Multiplica Bank, {formData.firstName}
              </p>
              <div className="bg-primary-50 rounded-lg p-6 mb-6">
                <p className="text-sm text-gray-700 mb-4">
                  <strong>Próximos pasos:</strong>
                </p>
                <ul className="text-left space-y-2 text-sm text-gray-700">
                  <li>1. Verifica tu email ({formData.email})</li>
                  <li>2. Completa tu perfil</li>
                  <li>3. Realiza tu primera operación</li>
                </ul>
              </div>
              <button
                onClick={() => window.location.href = '/'}
                className="px-8 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-semibold"
              >
                Ir al Inicio
              </button>
              </div>
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

      {/* Hero Section with Background */}
      <section className="relative bg-gradient-to-br from-primary-500 to-secondary-500 py-12">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1600&q=80"
            alt="Banking"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Únete a Multiplica Bank</h1>
          <p className="text-xl text-primary-50">
            Abre tu cuenta 100% digital en minutos. Sin comisiones, sin complicaciones.
          </p>
        </div>
      </section>

      <main className="flex-1 py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                      step >= s
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {s}
                  </div>
                  {s < 3 && (
                    <div
                      className={`flex-1 h-1 mx-2 transition-colors ${
                        step > s ? 'bg-primary-500' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Datos Personales</span>
              <span>Dirección</span>
              <span>Seguridad</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Form Header with Image */}
            <div className="relative h-32 bg-gradient-to-r from-primary-500 to-secondary-500">
              <div className="absolute inset-0 opacity-20">
                <img
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
                  alt="Banking"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-2xl font-bold">Paso {step} de 3</h2>
                  <p className="text-primary-50 text-sm mt-1">
                    {step === 1 && 'Datos Personales'}
                    {step === 2 && 'Dirección'}
                    {step === 3 && 'Seguridad'}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8">

            <form onSubmit={handleSubmit}>
              {/* Paso 1: Datos Personales */}
              {step === 1 && (
                <div className="space-y-6">

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre(s) *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Juan"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Apellidos *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Pérez García"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-1" />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-1" />
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="55 1234 5678"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-full py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                  >
                    Continuar
                  </button>
                </div>
              )}

              {/* Paso 2: Dirección */}
              {step === 2 && (
                <div className="space-y-6">

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Calle y Número *
                    </label>
                    <input
                      type="text"
                      name="street"
                      value={formData.street}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Av. Reforma 123"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ciudad *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Ciudad de México"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Estado *
                      </label>
                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      >
                        <option value="">Selecciona un estado</option>
                        <option value="CDMX">Ciudad de México</option>
                        <option value="Estado de México">Estado de México</option>
                        <option value="Jalisco">Jalisco</option>
                        <option value="Nuevo León">Nuevo León</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Código Postal *
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                      maxLength={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="01000"
                    />
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Atrás
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="flex-1 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                    >
                      Continuar
                    </button>
                  </div>
                </div>
              )}

              {/* Paso 3: Seguridad */}
              {step === 3 && (
                <div className="space-y-6">

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contraseña *
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      minLength={8}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Mínimo 8 caracteres"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Debe contener mayúsculas, minúsculas y números
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Confirmar Contraseña *
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      minLength={8}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Repite tu contraseña"
                    />
                  </div>

                  <div className="bg-primary-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Protección de Datos</h3>
                    <p className="text-sm text-gray-700">
                      Tus datos están protegidos con encriptación de 256 bits y cumplimos con todas las regulaciones bancarias.
                    </p>
                  </div>

                  <div className="border-t pt-4">
                    <label className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        required
                        className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700">
                        Acepto los términos y condiciones y el aviso de privacidad de Multiplica Bank
                      </span>
                    </label>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Atrás
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                    >
                      Abrir Cuenta
                    </button>
                  </div>
                </div>
              )}
            </form>
            </div>
          </div>

          {/* Beneficios */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4 shadow-sm text-center">
              <div className="text-3xl mb-2">🔒</div>
              <div className="font-semibold text-gray-900 mb-1">100% Seguro</div>
              <div className="text-sm text-gray-600">Protección bancaria</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm text-center">
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-semibold text-gray-900 mb-1">En 5 Minutos</div>
              <div className="text-sm text-gray-600">Apertura digital</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm text-center">
              <div className="text-3xl mb-2">💳</div>
              <div className="font-semibold text-gray-900 mb-1">Sin Costos</div>
              <div className="text-sm text-gray-600">Ni comisiones ni anualidad</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
