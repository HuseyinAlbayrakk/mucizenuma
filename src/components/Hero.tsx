/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, Award, Compass, HeartHandshake } from "lucide-react";

export default function Hero() {
  return (
    <section 
      className="relative min-h-screen pt-28 lg:pt-32 flex items-center justify-center overflow-hidden bg-[#5B3379] text-white"
      style={{
        background: "radial-gradient(circle at 30% 30%, #744397 0%, #5B3379 50%, #391c4e 100%)"
      }}
    >
      {/* Absolute Positioned Portrait on Desktop */}
      <div className="absolute left-0 bottom-0 top-20 w-[42%] hidden lg:block z-10 overflow-hidden">
        <img
          src="/ayseerendor_transparent.png"
          alt="Ayşe Erendor"
          className="w-full h-full object-cover object-left-top"
        />
      </div>

      {/* Decorative Editorial Watermarks & Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        {/* Light glow effects */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[65%] rounded-full bg-gold-600/10 blur-[120px]" />
        <div className="absolute top-[30%] right-[10%] w-[350px] h-[350px] rounded-full bg-purple-500/10 blur-[100px]" />
        
        {/* Editorial elements pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.3]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12 relative z-10 w-full">
        {/* Dynamic Bento-Grid Layout: Left Column is empty on desktop, Right Column has Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left spacer column on desktop (where the absolute portrait is visible) */}
          <div className="hidden lg:block lg:col-span-4 h-20" />
          
          {/* Main Info Columns (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col items-start text-left space-y-6 lg:pl-4">
            
            {/* Mobile View Profile Image (Showing full body from waist up) */}
            <div className="w-full flex justify-center lg:hidden mb-2">
              <div className="relative w-full max-w-[280px] aspect-[3/4] rounded-2xl border-2 border-gold-500/20 overflow-hidden shadow-xl bg-[#300C32]">
                <img 
                  src="/ayseerendor_transparent.png" 
                  alt="Ayşe Erendor" 
                  className="w-full h-full object-cover object-[18%_top]" 
                />
              </div>
            </div>

            {/* Regional Power Factor Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-white/10 bg-white/5 text-gold-300 animate-elegant-float rounded" id="regional-badge">
              <Award className="w-4 h-4 text-gold-500" />
              <span className="font-sans text-[10px] font-bold tracking-widest uppercase">
                Kilis’te İlk ve Tek Akademik Uzman Danışmanlık
              </span>
            </div>

            {/* Academic Credentials Headline */}
            <div className="space-y-2 text-left" id="hero-title-area">
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight italic">
                Ayşe Erendor
              </h1>
              <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold-400 font-bold">
                mu'cize nümâ Kurucusu & Profesyonel Eğitmen
              </p>
            </div>

            {/* Her design request: Slogan is the heart of the home page */}
            <div className="relative w-full py-8 px-6 sm:py-10 sm:px-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg overflow-hidden group">
              {/* Luxury Gold Border lines framing the slogan */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gold-500" />
              <div className="absolute -left-2 -top-4 text-[120px] opacity-[0.04] text-white font-serif select-none pointer-events-none font-black">“</div>
              
              <h2 className="font-serif text-xl sm:text-2xl md:text-3.5xl font-medium text-white leading-relaxed relative z-10">
                İmkânsız kelimesi dahi <span className="text-gold-400 italic font-semibold">imkân</span>'dan oluşuyorsa, her şey mümkün.
              </h2>
              <div className="mt-6 flex items-center gap-3 relative z-10">
                <div className="w-10 h-[1.5px] bg-gold-500"></div>
                <p className="font-serif text-sm sm:text-base italic text-purple-200 font-medium">Ayşe Erendor</p>
              </div>
            </div>

            {/* Explicit Corporate Title Checklist */}
            <div className="w-full bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10" id="credentials-chips">
              <span className="block font-sans text-[10px] font-bold text-gold-400 tracking-wider mb-3 uppercase">AKADEMİK & PROFESYONEL ÖZGEÇMİŞ SEÇKİNİ:</span>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-purple-100">Psikoloji Lisans Mezunu</span>
                <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-purple-100">Sosyoloji Akademik Altyapı</span>
                <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-purple-100">Uluslararası NLP Master Trainer</span>
                <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-purple-100">Profesyonel Aile & Yaşam Danışmanı</span>
                <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-purple-100">Bilinçaltı Teknikleri Uzmanı</span>
              </div>
            </div>

            {/* Interactive Navigation Triggers */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-3" id="hero-ctas">
              <a
                href="#hizmetler"
                className="flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-purple-950 font-sans text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Compass className="w-4 h-4 text-purple-950" />
                Hizmetlerimizi Keşfet
              </a>
              <a
                href="#anket"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/25 text-white border border-white/15 font-sans text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-lg shadow-sm transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <HeartHandshake className="w-4 h-4 text-gold-400" />
                Farkındalık Testini Çöz
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Decorative Wave Divider at the bottom for flowing transition */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cream-50 to-transparent pointer-events-none z-10" />
    </section>
  );
}
