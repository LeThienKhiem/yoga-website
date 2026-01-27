'use client';

import { useState, useEffect } from 'react';
import { Globe, User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Classes', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className={`text-2xl font-bold font-playfair transition-colors duration-500 ${
            isScrolled ? 'text-gray-900' : 'text-white'
          }`}>
            Zen
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative font-inter font-medium transition-colors duration-500 group ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-gray-900' : 'bg-white'
                }`} />
              </a>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <button
                className={`transition-all duration-500 hover:opacity-80 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
                aria-label="Language"
              >
                <Globe size={20} />
              </button>
              <button
                className={`transition-all duration-500 hover:opacity-80 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
                aria-label="Profile"
              >
                <User size={20} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden transition-colors duration-500 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4 bg-white/95 backdrop-blur-md rounded-lg mt-4 px-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block font-inter font-medium text-gray-800 hover:text-gray-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                  <button
                    className="text-gray-800 hover:text-gray-600 transition-colors"
                    aria-label="Language"
                  >
                    <Globe size={20} />
                  </button>
                  <button
                    className="text-gray-800 hover:text-gray-600 transition-colors"
                    aria-label="Profile"
                  >
                    <User size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
