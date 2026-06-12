/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { useToast } from "./components/Toast";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import SolutionsPanel from "./components/SolutionsPanel";
import AwarenessQuiz from "./components/AwarenessQuiz";
import Feedbacks from "./components/Feedbacks";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import { Phone, Mail, MapPin, MessageSquare, Clock, Calendar, ShieldCheck, Heart } from "lucide-react";

export default function App() {
  const toast = useToast();
  const [currentView, setCurrentView] = useState<string>("home");

  // Dynamic route dispatcher
  const renderCurrentView = () => {
    switch (currentView) {
      case "about":
        return (
          <div className="animate-fade-in">
            <About />
          </div>
        );
      case "services":
        return (
          <div className="animate-fade-in">
            <Services />
          </div>
        );
      case "solutions":
        return (
          <div className="animate-fade-in">
            <SolutionsPanel />
          </div>
        );
      case "quizzes":
        return (
          <div className="animate-fade-in">
            <AwarenessQuiz />
          </div>
        );
      case "comment":
        return (
          <div className="animate-fade-in">
            <Feedbacks />
          </div>
        );
      case "blog":
        return (
          <div className="animate-fade-in">
            <Blog />
          </div>
        );
      case "contact":
        return (
          <div className="animate-fade-in py-24 bg-cream-50" id="contact-page-view">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] px-3 py-1 bg-purple-900/5 border border-purple-900/10 rounded inline-block">
                  Birebir Görüşme & İletişim
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-purple-900 italic">
                  Bütünsel Dönüşüm Seans Randevusu
                </h2>
                <p className="font-sans text-xs sm:text-sm text-purple-800 font-semibold leading-relaxed">
                  Zihinsel düğümlerinizi çözmek, bilinçaltı blokajlarınızı gidermek veya frekans analizlerimize katılmak için randevunuzu hemen talep edin.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Contact Coordinates */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="bg-white rounded border border-purple-900/10 p-6 sm:p-8 space-y-6 shadow-sm">
                    <h3 className="font-display font-bold text-lg text-purple-950 italic">
                      Ayşe Erendor İletişim Bilgileri
                    </h3>
                    
                    <div className="space-y-4 font-sans text-xs sm:text-sm text-purple-900">
                      <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded bg-cream-50 border border-purple-900/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-[#D4AF37]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-purple-950">Ofis & Adres</h4>
                          <p className="font-semibold text-purple-750 mt-1 leading-relaxed">
                            Ekrem Çetin Mahallesi, Aslanbey Cd. No:33, Kilis Merkez, Türkiye
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded bg-cream-50 border border-purple-900/10 flex items-center justify-center flex-shrink-0">
                          <Phone className="w-5 h-5 text-[#D4AF37]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-purple-950">Telefon Hattı</h4>
                          <p className="font-semibold text-purple-750 mt-1 select-all font-mono">
                            +90 (542) 199 40 79
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded bg-cream-50 border border-purple-900/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="w-5 h-5 text-[#D4AF37]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-purple-950">E-Posta Adresi</h4>
                          <p className="font-semibold text-purple-750 mt-1 select-all font-mono">
                            info@mucizenuma.com
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded bg-cream-50 border border-purple-900/10 flex items-center justify-center flex-shrink-0">
                          <Clock className="w-5 h-5 text-[#D4AF37]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-purple-950">Seans Saatleri</h4>
                          <p className="font-semibold text-purple-750 mt-1 leading-relaxed">
                            Pazartesi - Cumartesi: 09:30 - 18:30 <br />
                            (Pazar günleri seansa kapalıdır.)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Kilis Specialty badge */}
                  <div className="p-6 bg-gradient-to-r from-purple-900 to-indigo-950 text-white rounded border border-purple-950/10 shadow-sm flex items-center gap-4">
                    <ShieldCheck className="w-10 h-10 text-gold-400 flex-shrink-0" />
                    <div>
                      <p className="font-serif italic text-sm text-gold-200 font-bold">Kilis’te İlk ve Tek!</p>
                      <p className="font-sans text-xs text-purple-200 mt-1 font-semibold leading-relaxed">
                        Kilis merkezli tek patentli Healy Biyofrekans & Profesyonel Aile Yaşam Danışmanlığı merkezi.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Interactive Reservation Request Form */}
                <div className="lg:col-span-7 bg-white rounded border border-purple-900/10 p-6 sm:p-8 shadow-sm">
                  <h3 className="font-display font-bold text-lg text-purple-950 italic mb-6">
                    Ön Randevu & Bilgi Talep Formu
                  </h3>

                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      const form = e.currentTarget;
                      const name = (form.elements.namedItem("fullName") as HTMLInputElement).value;
                      const phone = (form.elements.namedItem("phoneNum") as HTMLInputElement).value;
                      const service = (form.elements.namedItem("serviceSelect") as HTMLSelectElement).value;
                      const note = (form.elements.namedItem("userNotes") as HTMLTextAreaElement).value;

                      const textMsg = `Merhaba Ayşe Hanım, web sitenizdeki Ön Randevu Formu üzerinden size ulaşıyorum.\n\nİsim: ${name}\nTelefon: ${phone}\nTalep Edilen Hizmet: ${service}\nNotlar: ${note}`;
                      
                      toast.gold("Ön randevu talebiniz hazırlandı! WhatsApp seans hattımıza yönlendiriliyorsunuz...");
                      setTimeout(() => {
                        window.open(`https://wa.me/905421994079?text=${encodeURIComponent(textMsg)}`, "_blank");
                      }, 1000);
                    }}
                    className="space-y-4 font-sans text-xs sm:text-sm text-purple-950"
                  >
                    <div>
                      <label className="block text-purple-950 font-bold mb-1.5 text-xs text-left">Adınız Soyadınız *</label>
                      <input 
                        type="text" 
                        name="fullName"
                        required 
                        placeholder="Örn. Ayşe Yılmaz" 
                        className="w-full p-3 border border-purple-900/10 rounded focus:border-[#D4AF37] focus:outline-none bg-cream-50/30"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-purple-950 font-bold mb-1.5 text-xs text-left">Telefon Numaranız *</label>
                        <input 
                          type="tel" 
                          name="phoneNum"
                          required 
                          placeholder="05xx xxx xx xx" 
                          className="w-full p-3 border border-purple-900/10 rounded focus:border-[#D4AF37] focus:outline-none bg-cream-50/30"
                        />
                      </div>
                      <div>
                        <label className="block text-purple-950 font-bold mb-1.5 text-xs text-left">İlgi Alanınız / Hizmet *</label>
                        <select 
                          name="serviceSelect"
                          required
                          className="w-full p-3 border border-purple-900/10 rounded focus:border-[#D4AF37] focus:outline-none bg-cream-50/50"
                        >
                          <option value="Bireysel Aile ve Yaşam Danışmanlığı">Bireysel Aile ve Yaşam Danışmanlığı</option>
                          <option value="Healy Biyofrekans & Frekans Analizi">Healy Biyofrekans & Frekans Analizi</option>
                          <option value="NLP & Bilinçaltı Teknikleri Seansı">NLP & Bilinçaltı Teknikleri Seansı</option>
                          <option value="Kişisel Gelişim & Farkındalık Seansı">Kişisel Gelişim & Farkındalık Seansı</option>
                          <option value="Diğer Danışmanlık Hizmetleri">Diğer Danışmanlık Hizmetleri</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-purple-950 font-bold mb-1.5 text-xs text-left">Durumunuz / Eklemek İstedikleriniz</label>
                      <textarea 
                        name="userNotes"
                        rows={4}
                        placeholder="Yaşadığınız durum veya kilitli olduğunuzu hissettiğiniz alanlar hakkında kısa bilgi ekleyebilirsiniz..." 
                        className="w-full p-3 border border-purple-900/10 rounded focus:border-[#D4AF37] focus:outline-none bg-cream-50/30"
                      />
                    </div>

                    <p className="text-[10px] text-purple-650 leading-relaxed font-semibold">
                      * Randevu talebinizi gönderdiğinizde, yazdığınız bilgiler otomatik olarak Ayşe Erendor'un seans hattına WhatsApp mesajı olarak yönlendirilecektir. Şimdiden şifa olsun.
                    </p>

                    <button
                      type="submit"
                      className="w-full bg-[#300C32] hover:bg-[#4A154B] text-white font-sans text-xs font-black uppercase tracking-widest py-4 rounded transition-all shadow cursor-pointer mt-2 flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-4 h-4 text-gold-400" />
                      Ön Randevu Talebini WhatsApp ile İlet
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        );
      case "home":
      default:
        return (
          <div className="animate-fade-in">
            {/* Top Showcase display of her stunning slogan */}
            <Hero />

            {/* Quick gorgeous Greeting teaser from Ayşe Erendor */}
            <section className="py-20 bg-white border-y border-purple-900/5 relative overflow-hidden">
              <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
                <Heart className="w-8 h-8 text-[#D4AF37] mx-auto animate-pulse" />
                <h3 className="font-serif text-xl sm:text-2xl font-black italic text-purple-950 leading-relaxed max-w-2xl mx-auto">
                  "Hayatınızdaki hiçbir tıkanıklık kaderiniz değildir. Ruhsal ve zihinsel bütünlük bir karar uzağınızda."
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                  <button 
                    onClick={() => {
                      setCurrentView("quizzes");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }} 
                    className="bg-[#300C32] hover:bg-purple-900 text-white font-sans font-black text-xs uppercase tracking-widest px-6 py-3.5 rounded shadow cursor-pointer transition-all"
                  >
                    Mizaç Testini Hemen Çöz
                  </button>
                  <button 
                    onClick={() => {
                      setCurrentView("about");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }} 
                    className="border border-purple-900/15 hover:bg-cream-100 text-purple-800 font-sans font-black text-xs uppercase tracking-widest px-6 py-3.5 rounded cursor-pointer transition"
                  >
                    Biyografiyi Keşfet
                  </button>
                </div>
              </div>
            </section>

            {/* Teaser Services Carousel columns */}
            <Services showOnlyTeaser={true} onExploreDetailed={() => {
              setCurrentView("services");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }} />

            {/* Clients Reviews Feedbacks */}
            <Feedbacks />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-cream-50 text-purple-950 selection:bg-gold-400 selection:text-purple-950 font-sans antialiased scroll-smooth" id="app-wrapper">
      {/* Premium Sticky Navigation */}
      <Header currentView={currentView} onViewChange={setCurrentView} />
      
      {/* Dynamic Multi-Page Router Body */}
      <main className="min-h-[60vh]">
        {renderCurrentView()}
      </main>
      
      {/* Structured Communication Detail System */}
      <Footer onViewChange={setCurrentView} />
    </div>
  );
}
