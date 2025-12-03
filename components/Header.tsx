'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, User, LogIn } from 'lucide-react';
import { bankSections } from '@/lib/bankData';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Multiplica Bank
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {bankSections.map((section) => (
              <div
                key={section.id}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(section.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={section.href}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors flex items-center gap-1"
                >
                  {section.title}
                </Link>

                {/* Dropdown */}
                {section.subsections && activeDropdown === section.id && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 animate-fadeIn">
                    {section.subsections.map((subsection) => (
                      <Link
                        key={subsection.id}
                        href={subsection.href}
                        className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                      >
                        <div className="font-medium text-gray-900">{subsection.title}</div>
                        <div className="text-sm text-gray-600">{subsection.description}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/login"
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-primary-600 transition-colors"
            >
              <User className="w-5 h-5" />
              <span>Mi Cuenta</span>
            </Link>
            <Link
              href="/registro"
              className="flex items-center gap-2 px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
            >
              <LogIn className="w-5 h-5" />
              <span>Abrir Cuenta</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-primary-600"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            {bankSections.map((section) => (
              <div key={section.id} className="mb-4">
                <Link
                  href={section.href}
                  className="block text-gray-900 font-semibold mb-2"
                >
                  {section.title}
                </Link>
                {section.subsections && (
                  <div className="ml-4 space-y-2">
                    {section.subsections.map((subsection) => (
                      <Link
                        key={subsection.id}
                        href={subsection.href}
                        className="block text-gray-600 hover:text-primary-600"
                      >
                        {subsection.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-gray-200">
              <Link
                href="/login"
                className="flex items-center justify-center gap-2 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <User className="w-5 h-5" />
                <span>Mi Cuenta</span>
              </Link>
              <Link
                href="/registro"
                className="flex items-center justify-center gap-2 px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
              >
                <LogIn className="w-5 h-5" />
                <span>Abrir Cuenta</span>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
