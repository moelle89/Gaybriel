import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Shield } from 'lucide-react';

interface HeaderProps {
  onOpenCheckout: () => void;
  onOpenNewsletter: () => void;
}

export default function Header({ onOpenCheckout, onOpenNewsletter }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-xs border-b border-portuguese-yellow-100/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            id="header-logo"
            href="#hero"
            className="flex items-center space-x-2 group focus:outline-none"
          >
            <span className="w-9 h-9 rounded-full bg-linear-to-r from-portuguese-yellow-500 to-ocean-blue-500 flex items-center justify-center text-white shadow-xs transition-transform group-hover:scale-105">
              <Heart className="w-4.5 h-4.5 fill-white text-white" />
            </span>
            <div className="flex flex-col text-left">
              <div className="text-2xl font-black tracking-tighter text-ocean-blue-500 leading-none">
                GAYBRIEL<span className="text-portuguese-yellow-500 font-normal">.</span>
              </div>
              <span className="text-[9px] font-sans font-bold tracking-widest text-portuguese-yellow-600 uppercase leading-none mt-1">
                Acceptance & Mentorship
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-8">
            <a
              id="nav-link-story"
              href="#story"
              className="text-sm font-semibold uppercase tracking-wider text-slate-600 hover:text-portuguese-yellow-600 transition-colors"
            >
              My Story
            </a>
            <a
              id="nav-link-myths"
              href="#myths"
              className="text-sm font-semibold uppercase tracking-wider text-slate-600 hover:text-portuguese-yellow-600 transition-colors"
            >
              Myths vs Truths
            </a>
            <a
              id="nav-link-gallery"
              href="#gallery"
              className="text-sm font-semibold uppercase tracking-wider text-slate-600 hover:text-portuguese-yellow-600 transition-colors"
            >
              Gallery
            </a>
            <a
              id="nav-link-guide"
              href="#guide"
              className="text-sm font-semibold uppercase tracking-wider text-slate-600 hover:text-portuguese-yellow-600 transition-colors"
            >
              The Guide
            </a>
            <a
              id="nav-link-faq"
              href="#faq"
              className="text-sm font-semibold uppercase tracking-wider text-slate-600 hover:text-portuguese-yellow-600 transition-colors"
            >
              FAQs
            </a>
          </nav>

          {/* Desktop Call to Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              id="header-btn-newsletter"
              onClick={onOpenNewsletter}
              className="text-xs font-bold tracking-wider uppercase text-ocean-blue-600 hover:text-ocean-blue-700 focus:outline-none cursor-pointer"
            >
              Join Circle
            </button>
            <button
              id="header-btn-checkout"
              onClick={onOpenCheckout}
              className="px-6 py-2 bg-portuguese-yellow-500 hover:bg-portuguese-yellow-600 text-slate-950 font-bold rounded-full text-sm shadow-xs border border-portuguese-yellow-200 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              Start Your Journey
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-white/95 backdrop-blur-md border-b border-portuguese-yellow-100 animate-fadeIn">
          <div className="px-4 pt-2 pb-6 space-y-4 shadow-xs">
            <a
              id="mobile-nav-link-story"
              href="#story"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-700 hover:text-ocean-blue-500"
            >
              My Story
            </a>
            <a
              id="mobile-nav-link-myths"
              href="#myths"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-700 hover:text-ocean-blue-500"
            >
              Myths vs Truths
            </a>
            <a
              id="mobile-nav-link-gallery"
              href="#gallery"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-700 hover:text-ocean-blue-500"
            >
              Gallery
            </a>
            <a
              id="mobile-nav-link-guide"
              href="#guide"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-700 hover:text-ocean-blue-500"
            >
              The Guide
            </a>
            <a
              id="mobile-nav-link-faq"
              href="#faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-700 hover:text-ocean-blue-500"
            >
              FAQs
            </a>

            <div className="pt-4 border-t border-slate-100 flex flex-col space-y-3">
              <button
                id="mobile-btn-newsletter"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenNewsletter();
                }}
                className="w-full text-center py-2.5 rounded-full border border-ocean-blue-200 text-ocean-blue-700 font-medium text-sm hover:bg-ocean-blue-50"
              >
                Join Newsletter Circle
              </button>
              <button
                id="mobile-btn-checkout"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenCheckout();
                }}
                className="w-full text-center py-2.5 rounded-full bg-portuguese-yellow-500 text-slate-950 font-bold text-sm hover:bg-portuguese-yellow-600"
              >
                Unlock Your True Self
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
