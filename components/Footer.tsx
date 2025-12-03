'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-400">Multiplica Bank</h3>
            <p className="text-gray-400 text-sm mb-4">
              Tu banco inteligente con asistente virtual. Simplificamos tus finanzas con tecnología de última generación.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Productos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Productos</h3>
            <ul className="space-y-2">
              <li><Link href="/cuentas" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Cuentas</Link></li>
              <li><Link href="/creditos" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Créditos</Link></li>
              <li><Link href="/tarjetas" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Tarjetas</Link></li>
              <li><Link href="/inversiones" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Inversiones</Link></li>
              <li><Link href="/seguros" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Seguros</Link></li>
            </ul>
          </div>

          {/* Ayuda */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Ayuda</h3>
            <ul className="space-y-2">
              <li><Link href="/ayuda/preguntas-frecuentes" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Preguntas Frecuentes</Link></li>
              <li><Link href="/ayuda/contacto" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Contacto</Link></li>
              <li><Link href="/ayuda/sucursales" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Sucursales</Link></li>
              <li><Link href="/ayuda/cajeros" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Cajeros Automáticos</Link></li>
              <li><Link href="/ayuda/seguridad" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Seguridad</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <div>800-MULTIPLICA</div>
                  <div>800-685-8474</div>
                </div>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>contacto@multiplicabank.com</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Av. Reforma 123, Ciudad de México</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2024 Multiplica Bank. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacidad" className="text-gray-400 hover:text-primary-400 transition-colors">
              Privacidad
            </Link>
            <Link href="/terminos" className="text-gray-400 hover:text-primary-400 transition-colors">
              Términos
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-primary-400 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
