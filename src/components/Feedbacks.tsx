/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { MessageSquare, HeartHandshake, Image as ImageIcon, Sparkles, Quote } from "lucide-react";
import { feedbackList } from "../data";

export default function Feedbacks() {
  const [activeCategory, setActiveCategory] = useState<"Tüm" | "Bireysel" | "Toplu">("Tüm");

  const filteredFeedbacks = feedbackList.filter(
    (item) => activeCategory === "Tüm" || item.type === activeCategory
  );

  return (
    <section id="yorumlar" className="py-24 bg-cream-50 scroll-mt-12 text-[#300C32] relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-[15%] left-[-10%] w-[350px] h-[350px] bg-purple-100/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[15%] right-[-10%] w-[350px] h-[350px] bg-gold-200/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title area */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-gold-600 uppercase block">
            SOSYAL KANIT & GERÇEK DÖNÜŞÜMLER
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple-900 tracking-tight italic">
            Danışan Geri Bildirimleri
          </h2>
          <p className="font-sans text-sm sm:text-base text-purple-800 leading-relaxed font-medium">
            Danışan gizliliğini en üst düzeyde korumak amacıyla geri bildirimleri isimlerin sadece baş harfleriyle listeliyoruz. İşte hayatına dokunduğumuz yüreklerin özgün dönüşüm ifadeleri.
          </p>
        </div>

        {/* Tab Controls to toggle reviews */}
        <div className="flex justify-center mb-10">
          <div className="bg-white p-1 rounded border border-purple-900/10 shadow-sm flex gap-1">
            {["Tüm", "Bireysel", "Toplu"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={`px-6 py-2.5 rounded text-xs font-bold uppercase tracking-widest font-sans transition-all focus:outline-none ${
                  activeCategory === cat
                    ? "bg-purple-800 text-white shadow"
                    : "text-purple-800 hover:text-purple-950 hover:bg-cream-50"
                }`}
                id={`feedback-tab-${cat}`}
              >
                {cat === "Tüm" ? "Tüm Hikâyeler" : cat === "Bireysel" ? "Bireysel Seanslar" : "Toplu Çalışmalar / Atölyeler"}
              </button>
            ))}
          </div>
        </div>

        {/* Feedback Cards list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" id="feedback-cards-grid">
          {filteredFeedbacks.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded border border-purple-900/10 shadow-sm p-6 sm:p-8 flex flex-col justify-between relative group hover:border-[#D4AF37]/35 transition-all duration-300"
              id={`feedback-card-${item.id}`}
            >
              {/* Gold Quote background icon */}
              <div className="absolute top-6 right-6 text-purple-100 group-hover:text-gold-200/35 transition-colors duration-300">
                <Quote className="w-8 h-8 rotate-180 fill-current" />
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-gold-600 bg-gold-400/5 px-2.5 py-1 rounded inline-block font-bold border border-gold-500/10">
                    {item.tag}
                  </span>
                  <div className="flex items-center gap-1.5 pt-1.5">
                    <span className="w-2 h-2 rounded-full bg-gold-500" />
                    <span className="font-sans text-xs font-semibold text-purple-800">
                      {item.type === "Bireysel" ? "1'e 1 Bireysel Seans" : "Toplu Atölye / Kolektif Enerji"}
                    </span>
                  </div>
                </div>

                <p className="font-serif italic text-sm sm:text-base text-purple-950 leading-relaxed font-semibold">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-6 border-t border-purple-900/5 flex items-center gap-3 mt-4">
                <div className="w-9 h-9 rounded bg-cream-100 font-display font-black text-sm text-purple-900 flex items-center justify-center border border-purple-900/10">
                  {item.client}
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-purple-900 leading-none">
                    {item.client}
                  </h4>
                  <p className="font-sans text-[10px] text-purple-650 mt-1 uppercase tracking-wider font-bold">
                    {item.type === "Bireysel" ? "Seans Danışanı" : "Atölye Katılımcısı"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Specified Gallery Reservation Area for Toplu Seans, Meditasyon, ve Atölye Görselleri */}
        <div className="bg-[#300C32] text-cream-50 rounded border border-gold-500/20 p-8 sm:p-12 relative overflow-hidden" id="gallery-placeholder-area">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
          <div className="absolute inset-0 bg-opacity-20 bg-[radial-gradient(#eab308_1px,transparent_1px)] [background-size:30px_30px] opacity-[0.03]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-flex items-center gap-1 border border-gold-500/25 px-2.5 py-1 rounded text-[10px] font-bold text-gold-400 uppercase tracking-widest bg-gold-400/5">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                Görsel Hafıza & Sosyal Kanıt
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white italic">
                Toplu Seans Kesitleri & Meditasyon Arşivi
              </h3>
              <p className="font-sans text-xs sm:text-sm text-purple-100 leading-relaxed">
                İlerleyen süreçlerde gerçekleştireceğimiz kolektif seanslardan, meditasyon kamplarımızdan ve çok ses getiren "Kilolara Elvedâ" atölyelerimizden anlık kareleri, atmosferi ve transformasyon anlarını bu alanda şık bir galeri şeklinde paylaşacağız.
              </p>
            </div>

            {/* Simulated placeholder grid design matching moral & classy aesthetic */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4" id="gallery-placeholders">
              {[
                { title: "Kilolara Elvedâ", date: "Haziran 2026" },
                { title: "Toplu Hipnoz Seansı", date: "Gelecek" },
                { title: "Meditasyon Kampı", date: "Gelecek" },
                { title: "Atelye Kesitleri", date: "Gelecek" },
              ].map((g, idx) => (
                <div
                  key={idx}
                  className="aspect-square rounded bg-[#4A154B]/30 border border-purple-800/40 flex flex-col justify-between p-4 relative group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-purple-950/20 group-hover:bg-purple-950/40 transition-colors" />
                  <div className="w-8 h-8 rounded bg-gold-500/10 flex items-center justify-center border border-gold-500/20 relative z-10">
                    <ImageIcon className="w-4 h-4 text-gold-400" />
                  </div>
                  <div className="relative z-10">
                    <span className="block font-sans text-[10px] text-purple-300 font-bold uppercase tracking-wider">
                      Arşiv Hücresi
                    </span>
                    <h4 className="font-display font-semibold text-xs sm:text-sm text-white mt-0.5 whitespace-nowrap">
                      {g.title}
                    </h4>
                    <span className="block text-[9px] font-mono text-gold-400/80 mt-1">
                      {g.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
