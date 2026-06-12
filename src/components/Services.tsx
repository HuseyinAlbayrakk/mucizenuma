/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Sparkles, Users, Brain, Eye, Compass, Activity, TreePine, X, Phone, CheckCircle2, ChevronRight } from "lucide-react";

interface ServiceItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  badge?: string;
  shortDesc: string;
  longDesc: string;
  whatsappMsg: string;
}

interface ServicesProps {
  showOnlyTeaser?: boolean;
  onExploreDetailed?: () => void;
}

export default function Services({ showOnlyTeaser = false, onExploreDetailed }: ServicesProps = {}) {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

  useEffect(() => {
    if (activeService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeService]);

  const servicesList: ServiceItem[] = [
    {
      id: 1,
      icon: <Sparkles className="w-6 h-6 text-gold-500" />,
      title: "Kişiselleştirilmiş Seanslar & Özel Teknikler",
      badge: "Kişiye Özel",
      shortDesc: "Geniş bilgi birikimiyle bizzat tasarladığım şahsıma ait özel teknikler kullanarak köklü yaşam kilitlerini açıyoruz.",
      longDesc: "Sorunlarınız, hikayeniz ve acılarınız size özeldir; dolayısıyla şifa yolculuğunuz da tamamen size özel olmalıdır. Edindiğim geniş bilgi birikiminin ve derin tecrübelerin ışığında, seanslarımı tamamen danışanın ihtiyacına göre şekillendiriyorum. Standart kalıpların ve ezbere metotların dışına taşarak, bizzat şahsıma ait özel tekniklerle, hayatınızdaki en köklü kilitleri bile açacak kişiye özel dönüşüm süreçleri yürütüyorum.",
      whatsappMsg: "Kişiselleştirilmiş Seanslar ve Özel Teknikleriniz hakkında bilgi almak ve randevu oluşturmak istiyorum."
    },
    {
      id: 2,
      icon: <Users className="w-6 h-6 text-gold-500" />,
      title: "Bütüncül Şifa Tekniği & Toplu Çalışmalar",
      badge: "Özgün Metot",
      shortDesc: "Tescilli kolektif enerji çalışmalarımız, toplu hipnoz ve meditasyon kampları ile zihinsel-ruhsal uyanış.",
      longDesc: "Bireysel sınırlarınızı aşan bu kolektif enerji çalışmalarıyla, zihinsel ve ruhsal özgürleşmeyi toplu bir uyanışa dönüştürüyoruz. Kendi bizzat geliştirdiğim ve mucizevi dönüşümlere vesile olan Bütüncül Şifa Tekniği ile toplu seans çalışmaları, toplu hipnoz süreçleri ve derin meditasyon kampları düzenliyorum. Grubun sinerjisi ve kolektif bilincin uyanışıyla adeta hücresel bir arınma gerçekleştiriyoruz.",
      whatsappMsg: "Bütüncül Şifa Tekniği ve Toplu Çalışmalarınız / Kamplarınız hakkında bilgi almak istiyorum."
    },
    {
      id: 3,
      icon: <Brain className="w-6 h-6 text-gold-500" />,
      title: "Hipnoterapi, Regresyon & EMDR",
      badge: "Kilis'te Tek Yetkili",
      shortDesc: "Zihnin derin katmanlarına inerek travma, kaygı ve panik yaratan düğümleri etkili şekilde duyarsızlaştırıyoruz.",
      longDesc: "Zihnin en derin katmanlarına inerek geçmiş travmaları, kökleşmiş korkuları (deprem, yalnızlık, araba, uçak fobilileri vb.) ve panik durumlarını profesyonel metodolojilerle duyarsızlaştırıyor; zihinsel işletim sisteminizi adeta baştan yazıyoruz. Kilis’teki tek yetkili uygulayıcısı ve uzmanı olduğum EMDR (Göz Hareketleriyle Duyarsızlaştırma) ve regresyon süreçlerini profesyonel Hipnoterapi teknikleriyle taçlandırarak eşsiz bir özgürleşme sunuyorum.",
      whatsappMsg: "Kilis'te tek yetkili uyguladığınız EMDR, Regresyon ve Hipnoterapi seansı için randevu almak istiyorum."
    },
    {
      id: 4,
      icon: <Eye className="w-6 h-6 text-gold-500" />,
      title: "Kadim Bilgelik, Duru Görü & I Ching",
      badge: "Yüksek Algı",
      shortDesc: "Duru görü yeteneğim, kişisel enerji bakımları ve 3000 yıllık kadim Çin değişimler rehberi I Ching sentezi.",
      longDesc: "Görünen dünyanın ötesindeki enerjileri anlamak ve geleceğe rehberlik etmek adına; yüksek algı boyutunu kullanan kişisel Duru Görü yeteneğimi ve enerji saptama metotlarımı seanslara dahil ediyorum. Bunun yanı sıra, insanlığın en eski kehanet ve bilgelik kaynaklarından biri kabul edilen kadim I Ching (Değişimler Kitabı) öğretisini de entegre ederek, seçimleriniz ve yol haritanız üzerinde eşsiz derinlikte bir öngörü sağlıyoruz.",
      whatsappMsg: "Duru Görü, Özel Bakımlar ve Kadim I Ching Değişimler Kitabı analizi için randevu talep ediyorum."
    },
    {
      id: 5,
      icon: <Compass className="w-6 h-6 text-gold-500" />,
      title: "Dönüşüm Atölyeleri (Kilolara Elveda)",
      badge: "Yoğun İlgi",
      shortDesc: "Fazlalıkların ardındaki duygusal yükleri, anksiyete ve değersizlik hislerini yıktığımız tematik buluşmalar.",
      longDesc: "Dönemsel olarak açtığım özel tematik atölyelerle danışanlarımla buluşuyorum. Fiziksel ağırlıkların arkasındaki zihinsel ve duygusal blokajları yıktığımız, yoğun ilgi gören 'Kilolara Elveda' Atölyesi gibi programlarla hem bedensel hem de ruhsal bir hafifleme sağlıyoruz. Kilo almanıza veya verememenize sebep olan o savunma mekanizmalarını yıkarak özgürleşiyoruz.",
      whatsappMsg: "Yoğun ilgi gören 'Kilolara Elveda' Atölyenize ve sonraki tematik atölye tarihlerinize kayıt yaptırmak istiyorum."
    },
    {
      id: 6,
      icon: <Activity className="w-6 h-6 text-gold-500" />,
      title: "Healy Biyofrekans Rezonans Analizi",
      badge: "AB Onaylı Hücresel Şifa",
      shortDesc: "Hücre zarı düzeyinde frekans analizi ile migren, fibromiyalji ve uyku bozukluklarındaki tıkanıklıkları dengeleme.",
      longDesc: "Geleceğin kuantum biyofrekans teknolojisiyle tanışın. Avrupa Birliği onaylı Healy teknolojisiyle hücresel ve enerji alanınızı en ince ayrıntısına kadar analiz ediyoruz. Kronik ağrılar, migren, fibromiyalji, uyku bozuklukları, anksiyete ve depresyonun arkasındaki frekans tıkanıklıklarını bütünsel olarak dengeliyoruz. Bedeninizin azalan enerjisini yerine koyarak doğal titreşiminizi geri kazandırıyoruz.",
      whatsappMsg: "Healy Biyofrekans ve Kuantum Rezonans Analizi randevusu almak istiyorum."
    },
    {
      id: 7,
      icon: <TreePine className="w-6 h-6 text-gold-500" />,
      title: "Aile & Sosyal Yaşam Danışmanlığı",
      badge: "Soy Ağacı Analizi",
      shortDesc: "Soy bağından nesiller boyu aktarılan sırları, sadakat zincirlerini ve kısırdöngüleri kırıp özgürleşme.",
      longDesc: "İlişkilerinizde ve sosyal hayatınızda yaşadığınız kısırdöngülerin, nesiller boyu aktarılan aile mirasları veya görünmez bağlar olup olmadığını analiz ediyor; sizi fark etmeden aşağı çeken o geçmiş zincirlerini kırıyoruz. Atalarınızın dökülmemiş gözyaşları, ödenmemiş kefaretleri sizin bugününüzü sabote ediyor olabilir. Aile dizimi ilkeleriyle kilitleri tespit edip bağları çözüyoruz.",
      whatsappMsg: "Aile ve Sosyal Yaşam Danışmanlığı & Soy Ağacı analizi için görüşmek istiyorum."
    }
  ];

  return (
    <section id="hizmetler" className="relative py-24 bg-[#300C32] text-cream-50 scroll-mt-12 overflow-hidden border-t border-b border-[#220325]">
      {/* Decorative glows */}
      <div className="absolute top-[20%] left-[-10%] w-[450px] h-[450px] bg-[#4A154B]/30 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[450px] h-[450px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Texts */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-gold-500 uppercase block">
            SOPHİSTİCATED METOTLAR & DÖNÜŞÜM KAPISI
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight italic">
            Hizmet Kapsamı & Özel Çalışmalar
          </h2>
          <p className="font-sans text-sm sm:text-base text-purple-100 leading-relaxed">
            Seanslarım klasik yaklaşımlardan uzaktır. Bilimsel zeminle ruhsal derinliği harmanlayan, şahsıma ait özel tekniklerle, hayatınızın kilitli kapılarını aralıyoruz. Detaylar için kartlara tıklayıp pencereleri inceleyin.
          </p>
        </div>

        {/* Dynamic Bento/Grid of Services Cards */}
        <div className={showOnlyTeaser ? "grid grid-cols-1 md:grid-cols-3 gap-6" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-6"} id="services-grid">
          {(showOnlyTeaser ? servicesList.slice(0, 3) : servicesList).map((service, index) => {
            // Since there are 7 items, we want a beautiful grid flow. 
            // We can distribute them in our grid beautifully
            const isWide = index === 0 || index === 2 || index === 5;
            const extraColSpan = showOnlyTeaser ? "" : (isWide ? "xl:col-span-3" : "xl:col-span-2");
            return (
              <div
                key={service.id}
                onClick={() => setActiveService(service)}
                className={`group cursor-pointer relative rounded-lg bg-[#4A154B]/20 border border-purple-800/20 p-6 sm:p-8 hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden ${extraColSpan}`}
                id={`service-card-${service.id}`}
              >
                {/* Visual Accent Lines */}
                <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-gold-500/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="absolute bottom-3 right-3 text-purple-950 font-display text-[4.5rem] font-bold select-none leading-none opacity-20 group-hover:opacity-10 group-hover:text-gold-500/10 transition-all duration-500">
                  0{service.id}
                </div>

                <div className="flex flex-col h-full justify-between relative z-10 space-y-4">
                  <div className="space-y-4">
                    {/* Badge and Icon */}
                    <div className="flex justify-between items-center">
                      <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center border border-gold-500/20 shadow-inner">
                        {service.icon}
                      </div>
                      <span className="font-sans text-[9px] uppercase tracking-wider font-semibold text-gold-400 px-2 py-1 rounded bg-gold-400/5 border border-gold-500/15">
                        {service.badge}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-gold-400 transition-colors">
                      {service.title}
                    </h3>

                    {/* Paragraph */}
                    <p className="font-sans text-xs sm:text-sm text-purple-200/80 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Discover Link */}
                  <div className="flex items-center gap-2 pt-2 text-xs font-semibold text-gold-400 font-sans group-hover:text-white transition-colors">
                    <span>Detayları Keşfet</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {showOnlyTeaser && onExploreDetailed && (
          <div className="text-center pt-12">
            <button
              onClick={onExploreDetailed}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] hover:bg-gold-500 text-purple-950 font-sans text-xs font-black uppercase tracking-widest rounded-lg shadow-lg cursor-pointer transition-all hover:scale-105"
            >
              <span>Seans ve Destek Hizmetlerinin Tamamını Keşfet</span>
              <ChevronRight className="w-4 h-4 text-purple-950" />
            </button>
          </div>
        )}

        {/* Dynamic Window Modal Overlay as requested (pencere şeklinde tasarlanmalıdır) */}
        {activeService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-purple-950/80 backdrop-blur-sm" id="service-modal">
            <div className="relative w-full max-w-2xl bg-[#300C32] rounded-lg border border-gold-500/20 shadow-2xl p-6 sm:p-10 text-cream-50">
              
              {/* Close Button */}
              <button
                onClick={() => setActiveService(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-purple-900/60 transition"
                aria-label="Kapat"
                id="close-modal-btn"
              >
                <X className="w-6 h-6 text-purple-300 hover:text-gold-400" />
              </button>

              <div className="space-y-6">
                {/* Modal Title Block */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gold-400/10 flex items-center justify-center border border-gold-500/30">
                    {activeService.icon}
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-gold-400 font-bold bg-gold-500/5 px-2.5 py-1 rounded border border-gold-500/20">
                      {activeService.badge}
                    </span>
                    <h3 className="font-display text-2xl font-bold mt-1.5 text-white">
                      {activeService.title}
                    </h3>
                  </div>
                </div>

                <hr className="border-purple-800/40" />

                {/* Substantive content */}
                <div className="space-y-4">
                  <h4 className="font-sans text-xs tracking-widest uppercase text-gold-400 font-bold">
                    SEANS VİZYONU & RUHSAL ŞİFA SÜRECİ
                  </h4>
                  <p className="font-sans text-sm sm:text-base text-purple-100 leading-relaxed whitespace-pre-line">
                    {activeService.longDesc}
                  </p>
                </div>

                {/* Features inline list */}
                <div className="p-4 rounded-xl bg-purple-950/50 border border-purple-800/40 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-purple-200">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    <span>Kişinin ihtiyacına özel bizzat tasarlanmış tescilli eklektik metotlar.</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-purple-200">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    <span>Tam gizlilik odaklı, yargısız, şefkatli ve bilimsel ekol temelli süreç.</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-purple-200">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    <span>Kilis bölgesinde ilk ve tek vizyoner danışmanlık üstünlüğü.</span>
                  </div>
                </div>

                {/* Direct Action Whatsapp button with the message configured */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/905421994079?text=${encodeURIComponent(activeService.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-purple-800 hover:bg-purple-900 text-white font-sans font-bold text-xs uppercase tracking-widest py-4 rounded shadow-lg transition-all"
                  >
                    <Phone className="w-4 h-4 fill-current text-gold-400" />
                    Bu Seans İçin WhatsApp'tan Randevu Al
                  </a>
                  <button
                    onClick={() => setActiveService(null)}
                    className="sm:px-6 py-4 rounded border border-purple-800 hover:bg-purple-900/40 text-xs font-semibold text-purple-300 hover:text-white transition-all"
                  >
                    Kapat
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
