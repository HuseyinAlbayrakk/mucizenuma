/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Menu, X, Phone, Award } from "lucide-react";

interface HeaderProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

export default function Header({ currentView, onViewChange }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Ana Sayfa", view: "home" },
    { name: "Hakkımda", view: "about" },
    { name: "Hizmetler", view: "services" },
    { name: "Çözümler", view: "solutions" },
    { name: "Analizler", view: "quizzes" },
    { name: "Yorumlar", view: "comment" },
    { name: "Blog", view: "blog" },
    { name: "İletişim", view: "contact" },
  ];

  const handleNavClick = (view: string) => {
    onViewChange(view);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cream-50/95 backdrop-blur-md shadow-sm border-b border-purple-900/10 py-2 xl:py-2.5"
          : "bg-cream-50/80 backdrop-blur-md border-b border-purple-900/5 py-3 xl:py-4"
      }`}
    >
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-14 xl:h-16">
          {/* Logo Brand Area */}
          <button 
            onClick={() => handleNavClick("home")}
            className="flex items-center group focus:outline-none text-left cursor-pointer" 
            id="brand-logo-link"
          >
            <img 
              src="/logo.png" 
              alt="mu'cize nümâ" 
              className="h-52 xl:h-60 w-auto object-contain transition-transform duration-500 group-hover:scale-105 -my-20 xl:-my-24 relative -top-1 xl:-top-1.5"
            />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
            {navItems.map((item) => {
              const isActive = currentView === item.view;
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.view)}
                  className={`font-sans text-[10.5px] xl:text-xs font-black tracking-widest uppercase px-2 xl:px-3 py-1.5 xl:py-2 transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    isActive 
                      ? "text-gold-600 border-b-2 border-gold-500" 
                      : "text-purple-900/85 hover:text-gold-600"
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </nav>

          {/* Call-to-Action Area */}
          <div className="hidden sm:flex items-center gap-3 xl:gap-4 flex-shrink-0">
            <a
              href="https://wa.me/905421994079?text=Merhaba,%20web%20siteniz%20üzerinden%20size%20ulaşıyorum.%20Seans%20ve%20danışmanlık%20hizmetleriniz%20hakkında%20bilgi%20alabilir%20miyim?"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-purple-800 hover:bg-purple-900 text-white font-sans text-[10px] xl:text-xs font-black uppercase tracking-widest px-4 xl:px-5 py-2.5 rounded-full shadow-md transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              id="h_whatsapp_button"
            >
              <Phone className="w-3 h-3 fill-current" />
              Randevu Al
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-purple-900 hover:text-gold-600 p-2 focus:outline-none"
              aria-label="Menüyü aç/kapat"
              id="mobile-menu-btn"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100 py-4 bg-cream-50 shadow-lg border-b border-purple-900/10" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 sm:px-3">
          {navItems.map((item) => {
            const isActive = currentView === item.view;
            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.view)}
                className={`block w-full text-left font-sans text-sm font-bold uppercase tracking-wider px-3 py-2.5 rounded-lg transition-all cursor-pointer ${
                  isActive 
                    ? "bg-purple-800 text-white shadow-sm" 
                    : "text-purple-900 hover:text-gold-600 hover:bg-cream-100"
                }`}
              >
                {item.name}
              </button>
            );
          })}
          <div className="pt-4 border-t border-purple-900/10 flex flex-col gap-3">
            <div className="flex items-center text-purple-800 font-sans text-xs gap-2 px-3">
              <Award className="w-4 h-4 text-gold-500" />
              <span className="font-semibold text-purple-950">Kilis’te İlk ve Tek Uzman Danışmanlık</span>
            </div>
            <a
              href="https://wa.me/905421994079?text=Merhaba,%20web%20siteniz%20üzerinden%20size%20ulaşıyorum.%20Seans%20ve%20danışmanlık%20hizmetleriniz%20hakkında%20bilgi%20alabilir%20miyim?"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-2 bg-purple-800 hover:bg-purple-900 text-white font-sans font-bold text-xs uppercase tracking-widest py-3 rounded-lg shadow-md mx-3"
              id="mobile-whatsapp-btn"
            >
              <Phone className="w-4 h-4 fill-current" />
              WhatsApp Randevu Hattı
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
