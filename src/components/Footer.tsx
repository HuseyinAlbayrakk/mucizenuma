/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Instagram, Youtube, Facebook, MapPin, Mail, Award, ArrowUp } from "lucide-react";

interface FooterProps {
  onViewChange?: (view: string) => void;
}

export default function Footer({ onViewChange }: FooterProps) {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (view: string) => {
    if (onViewChange) {
      onViewChange(view);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer id="iletisim" className="bg-[#300C32] text-cream-100 relative pt-20 pb-12 overflow-hidden border-t border-[#220325]">
      {/* Subtle details */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#4A154B]/20 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-950/20 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Main Grid: Info, Quick Links, Contacts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Column 1: Brand details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              {/* Overlapping logo vector */}
              <div className="relative w-10 h-10 flex-shrink-0">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gold-500"
                >
                  <path
                    d="M 28,75 L 36,45 L 50,65 Z"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M 55,65 L 68,18 L 90,49 Z"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline font-sans text-base tracking-tight text-white">
                  <span className="font-extrabold">mu'cize</span>
                  <span className="font-light ml-1 text-gold-450">nümâ</span>
                </div>
                <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-gold-400 font-bold mt-0.5">
                  Ayşe Erendor
                </span>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-purple-100 leading-relaxed font-medium">
              Akademik birikim, uluslararası standartlarda ileri düzey uzmanlık sertifikasyonları ve bizzat tasarladığım şahsıma ait özel seans teknikleriyle, Kilis bölgesinde zihinsel ve ruhsal dönüşümün ilk ve tek profesyonel adresiyiz.
            </p>

            {/* Slogan plaque */}
            <div className="p-5 rounded bg-[#4A154B]/30 border border-purple-900 border-l-2 border-l-gold-500 shadow-sm">
              <p className="italic font-serif text-sm text-gold-100 font-medium">
                "İmkânsız kelimesi dahi imkân'dan oluşuyorsa, her şey mümkün."
              </p>
              <span className="block font-sans text-[10px] text-right font-bold text-gold-450 uppercase tracking-widest mt-1.5">
                – Ayşe Erendor
              </span>
            </div>
          </div>

          {/* Column 2: Quick Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-widest border-b border-purple-800 pb-2">
              Hızlı Gezinme
            </h4>
            <ul className="font-sans text-xs sm:text-sm space-y-3 text-purple-250 font-semibold" id="footer-nav">
              <li>
                <button onClick={() => handleLinkClick("home")} className="hover:text-gold-400 transition text-left cursor-pointer">Ana Sayfa</button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("about")} className="hover:text-gold-400 transition text-left cursor-pointer">Ayşe Erendor Hakkında</button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("services")} className="hover:text-gold-400 transition text-left cursor-pointer">Destek ve Seans Terapileri</button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("solutions")} className="hover:text-gold-400 transition text-left cursor-pointer">Çözüm Alanlarımız</button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("quizzes")} className="hover:text-gold-400 transition text-left cursor-pointer">Farkındalık Testleri & Analizler</button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("blog")} className="hover:text-gold-400 transition text-left cursor-pointer">Motivasyon Makaleleri</button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contacts & Regions (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-widest border-b border-purple-800 pb-2">
              İletişim & Konum
            </h4>
            <div className="space-y-4 font-sans text-xs sm:text-sm text-purple-200" id="footer-contacts">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] font-bold text-white uppercase tracking-wildest">
                    HİZMET FAKTÖRÜ
                  </span>
                  <span className="text-purple-105 font-semibold">Kilis, Türkiye</span>
                  <span className="block text-[10px] text-purple-350 font-bold mt-1">Kendi Özel Seanslığında Yüz Yüze • Online</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] font-bold text-white uppercase tracking-wildest">
                    TELEFON & WHATSAPP
                  </span>
                  <a href="tel:05421994079" className="text-purple-105 hover:text-gold-400 transition font-bold text-base">
                    0542 199 40 79
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] font-bold text-white uppercase tracking-wildest">
                    DİJİTAL ADRES
                  </span>
                  <span className="text-purple-105 font-bold">iletisim@mucizenuma.com</span>
                </div>
              </div>
            </div>

            {/* Social media connections */}
            <div className="space-y-3 pt-2">
              <span className="block font-sans text-[10px] font-bold uppercase tracking-widest text-purple-300">
                Erişim Kanallarımız
              </span>
              <div className="flex gap-3" id="footer-social-panel">
                <a
                  href="https://instagram.com/mucizenuma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded bg-[#4A154B]/50 hover:bg-gold-500 hover:text-purple-950 text-gold-500 border border-purple-800/40 flex items-center justify-center transition-all shadow-sm"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com/@mucizenuma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded bg-[#4A154B]/50 hover:bg-gold-500 hover:text-purple-950 text-gold-500 border border-purple-800/40 flex items-center justify-center transition-all shadow-sm"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com/mucizenuma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded bg-[#4A154B]/50 hover:bg-gold-500 hover:text-purple-950 text-gold-500 border border-purple-800/40 flex items-center justify-center transition-all shadow-sm"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        <hr className="border-purple-900/40" />

        {/* Legal, Regional and Top Arrow Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6" id="footer-legal-bar">
          <div className="text-center sm:text-left space-y-1">
            <p className="font-sans text-xs text-purple-300 font-bold">
              © {new Date().getFullYear()} mu'cize nüma. Tüm Hakları Saklıdır.
            </p>
            <p className="font-sans text-[10px] text-purple-400 font-medium max-w-xl leading-normal">
              Sitedeki bilgiler, geleneksel ve tamamlayıcı yöntemler ve rezonans dengelerini içerir. Doğrudan tıbbi muayene, koyulan teşhisler veya reçete yerine geçmez. Tıbbi durumlar için öncelikle hekiminize danışınız.
            </p>
          </div>

          <button
            onClick={handleScrollTop}
            className="group flex items-center gap-1.5 px-4 py-2 rounded bg-[#4A154B] hover:bg-[#3d113f] border border-purple-800/40 text-xs text-purple-300 hover:text-gold-450 transition font-bold uppercase tracking-wider"
            id="back-to-top-btn"
          >
            <span>Yukarı</span>
            <ArrowUp className="w-4 h-4 transform group-hover:translate-y-[-2px] transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
