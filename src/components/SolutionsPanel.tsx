/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Brain, Heart, EyeOff, ShieldAlert, Zap, Compass, Phone } from "lucide-react";
import { solutionCategories } from "../data";

export default function SolutionsPanel() {
  const [selectedTab, setSelectedTab] = useState("sol1");

  const iconsMap: Record<string, React.ReactNode> = {
    sol1: <Brain className="w-5 h-5 text-gold-600" />,
    sol2: <Heart className="w-5 h-5 text-gold-600" />,
    sol3: <EyeOff className="w-5 h-5 text-gold-600" />,
    sol4: <Zap className="w-5 h-5 text-gold-600" />,
    sol5: <ShieldAlert className="w-5 h-5 text-gold-600" />,
  };

  const activeCategory = solutionCategories.find((c) => c.id === selectedTab) || solutionCategories[0];

  return (
    <section id="cozumler" className="py-24 bg-cream-50 text-[#300C32] scroll-mt-12 relative overflow-hidden">
      {/* Subtle details background */}
      <div className="absolute top-[10%] right-[5%] w-80 h-80 bg-purple-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-80 h-80 bg-gold-100/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title area */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-semibold tracking-widest text-gold-600 uppercase block">
            KİŞİSEL FARKINDALIK VE BÜTÜNCÜL ANALİZ
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#300C32] tracking-tight italic">
            Siz Hangisini Yaşıyorsunuz?
          </h2>
          <p className="font-sans text-sm sm:text-base text-purple-800 leading-relaxed font-medium">
            Aşağıdaki durumlardan bir veya birkaçını sıklıkla tecrübe ediyorsanız, bunlar zihninizde çözülmeyi bekleyen bir kilit veya hücresel düzeyde bir blokaj olduğuna işaret eder. Çözüm odaklı uzmanlık alanlarımızı inceleyin.
          </p>
        </div>

        {/* Tab & Contents container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Tab buttons (Vertical layout on tablet/desktop) (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-3 pr-0 lg:pr-4">
            {solutionCategories.map((tab) => {
              const isActive = tab.id === selectedTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`flex items-center gap-4 text-left p-4 rounded border font-sans font-bold tracking-widest text-xs uppercase transition-all duration-300 focus:outline-none ${
                    isActive
                      ? "bg-purple-900 border-purple-800 text-gold-400 shadow-md"
                      : "bg-white border-purple-900/10 text-purple-950 hover:bg-cream-100"
                  }`}
                  id={`tab-btn-${tab.id}`}
                >
                  <div className={`p-2 rounded transition-colors ${isActive ? "bg-purple-950" : "bg-purple-50"}`}>
                    {iconsMap[tab.id]}
                  </div>
                  <span className={isActive ? "text-white" : "text-purple-950"}>
                    {tab.category}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Details Box (8 cols) */}
          <div className="lg:col-span-8 bg-white border border-purple-900/10 rounded-lg shadow-sm p-6 sm:p-10 relative overflow-hidden flex flex-col justify-between min-h-[440px]" id="solutions-details-box">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-6">
              {/* Category Header */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-[#300C32] flex items-center justify-center">
                  {iconsMap[activeCategory.id]}
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-purple-900 italic">
                  {activeCategory.title}
                </h3>
              </div>

              <hr className="border-purple-900/5" />

              {/* Symptom Check grid list */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeCategory.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded hover:bg-cream-50/50 transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-gold-500 border border-gold-600 flex-shrink-0 mt-2" />
                    <span className="font-sans text-sm text-purple-950 font-semibold leading-normal">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Insight explanation and CTA */}
            <div className="mt-10 pt-6 border-t border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <p className="font-serif italic text-purple-900 text-sm font-medium">
                  "Sıradan kalıpları yıkın; geçmiş düğümlerini tescilli seanslarımızla çözün."
                </p>
                <p className="font-sans text-[11px] text-purple-500 font-bold tracking-wide">
                  Kilis Bölge Seansları: Yüz Yüze • Online • Toplu Seans ve Analiz Desteği
                </p>
              </div>

              <a
                href={`https://wa.me/905421994079?text=${encodeURIComponent(
                  `Merhaba, web sitenizdeki '${activeCategory.title}' çözüm odaklı uzmanlık alanlarınız hakkında bilgi almak ve bana en uygun seans tipini öğrenmek istiyorum.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-purple-800 hover:bg-purple-900 text-white font-sans text-xs font-bold uppercase tracking-widest px-6 py-4 rounded shadow transition-all"
                id="solutions-cta-whatsapp"
              >
                <Phone className="w-3.5 h-3.5 fill-current text-gold-400" />
                Seans Keşfet (WhatsApp)
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
