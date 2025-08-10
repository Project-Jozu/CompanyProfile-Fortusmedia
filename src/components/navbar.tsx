'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function ResponsiveNavbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Beranda', path: '/' },
    { name: 'Layanan', path: '/layanan' },
    { name: 'Kontak', path: '/kontak' },
    { name: 'Tentang', path: '/tentang' },
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <img
            src="/img/logo.png"
            alt="Fortus Media Logo"
            className="h-30 w-auto"
          />
        </Link>

        {/* Desktop Navigation (unchanged from original) */}
        <nav className="hidden md:flex items-center ml-10 gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`font-medium transition-colors ${
                pathname === item.path
                  ? 'text-[#F2960B] underline'
                  : scrolled
                  ? 'text-blue-900 hover:text-[#F2960B]'
                  : 'text-blue-900 hover:text-[#F2960B]'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button (hidden on desktop) */}
        <button
          className="md:hidden p-2 text-blue-900 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Mobile menu overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" 
               onClick={() => setMobileMenuOpen(false)}>
          </div>
        )}

        {/* Mobile menu content */}
        <div className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full pt-20 px-6">
            <nav className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`text-lg font-medium transition-colors ${
                    pathname === item.path
                      ? 'text-[#F2960B] underline'
                      : 'text-blue-900 hover:text-[#F2960B]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}