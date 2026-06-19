/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import {
  Sparkles,
  GraduationCap,
  Heart,
  Brain,
  Zap,
  Flower2,
  Baby,
  HeartHandshake,
  ShieldX,
  Orbit,
  X,
  Phone,
  CheckCircle2,
  Clock,
  Award,
  BookOpen,
  Users,
  Star,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface CurriculumItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  badge: string;
  topSpot: string;
  description: string;
  content: string[];
  extras?: string[];
  format?: string;
  specialGift?: string;
  price?: string;
  whatsappMsg: string;
}

interface WorkshopItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  whatsappMsg: string;
}

export default function Trainings() {
  const [activeCurriculum, setActiveCurriculum] = useState<CurriculumItem | null>(null);
  const [expandedWorkshop, setExpandedWorkshop] = useState<number | null>(null);

  useEffect(() => {
    if (activeCurriculum) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeCurriculum]);

  const curricula: CurriculumItem[] = [
    {
      id: 1,
      icon: <Sparkles className="w-6 h-6 text-gold-500" />,
      title: "Bütüncül Şifa Tekniği",
      badge: "Tescilli Yöntem & Canlı Seans",
      topSpot:
        "Geçmişini, geleceğini ve bugününü tümüyle şifalandırıp yepyeni bir 'Sen' ile tanışmaya hazırsan, bu dönüşüm yolculuğu tam senin için.",
      description:
        "Bizzat şahsıma ait olan ve tescilli metodolojimle yapılandırdığım Bütüncül Şifa Tekniği, hayatınızı bloke eden tam 99 olumsuz duygu ve durumdan tamamen özgürleşmeniz için tasarlanmış bütünsel bir arınma sistemidir.",
      content: [
        "Bioenerji",
        "Reiki",
        "NLP Teknikleri",
        "Bağ Kesme",
        "Affetme",
        "Bilinçaltı Sembol Dili",
        "Regresyon",
        "Holistik Şifa",
        "Ho'oponopono",
        "Blokajlardan Kurtulma",
        "7 Çakra Şifalanması ve Şifa Kodlamaları",
        "Esmalar ve Olumlamalar",
      ],
      format:
        "30 dakika bilgilendirme, enerji akışına göre tahminen 120 dakika tamamen CANLI SEANS ve sonrası interaktif soru-cevap şeklindedir.",
      whatsappMsg:
        "Merhaba Ayşe Hanım, Bütüncül Şifa Tekniği (Tescilli Yöntem & Canlı Seans) eğitiminiz hakkında detaylı bilgi almak istiyorum.",
    },
    {
      id: 2,
      icon: <GraduationCap className="w-6 h-6 text-gold-500" />,
      title: "Uluslararası Onaylı EFT Eğitimi",
      badge: "Uzmanlık ve Uygulayıcılık",
      topSpot:
        "Kendi içindeki şifacıyı keşfetme zamanın gelmedi mi? Unutma, sen değişirsen dünyan değişir.",
      description:
        "Bastırılmış ve ifade edilmemiş duygulardan özgürleşmeyi sağlayan, bilimsel araştırmalara göre %85 - %97 başarı oranına sahip stres ve blokaj giderme yöntemidir.",
      content: [
        "Anksiyete ve panik atak",
        "Klostrofobi ve depresyon",
        "Geçmiş travmalar ve yas",
        "Kronik fiziksel ağrılar (Fibromiyalji / İnsomnia)",
        "Sınırlayan inanışlar",
        "Aşk acısı ve kilo verme süreçleri",
      ],
      extras: [
        "Profesyonel anlamda çalışacak kursiyerler için bol uygulama",
        "Bir seansın yürütülmesi ve süpervizyon deneyimi",
        "Eğitim sonunda video kayıtları ve detaylı PDF dokümanlar",
        "İki Üniversite Onaylı, Uluslararası Geçerli, E-Devlet Onaylı Uzmanlık Sertifikası seçenekleri",
      ],
      whatsappMsg:
        "Merhaba Ayşe Hanım, Uluslararası Onaylı EFT (Uzmanlık ve Uygulayıcılık) Eğitimi hakkında detaylı bilgi ve kayıt için iletişime geçmek istiyorum.",
    },
    {
      id: 3,
      icon: <Brain className="w-6 h-6 text-gold-500" />,
      title: "Uygulamalı Kas Testi (Kinesiyoloji)",
      badge: "Bilinçaltı Haritalama",
      topSpot:
        "Bedenin bilgeliğine kulak verin: Zihninizin sakladığı cevaplar, kaslarınızın hafızasında gizlidir.",
      description:
        "Bilinçaltının derinliklerindeki kilitli cevaplara ve kök inançlara beden aracılığıyla ulaşmayı sağlayan eğlenceli, şaşırtıcı ve farkındalık dolu uygulamalı bir eğitimdir.",
      content: [
        "Kinesiyoloji Teorisi ve Tarihi",
        "Kas testinin püf noktaları",
        "Halkalar Metodu",
        "Kol Kas Testi Metodu",
        "Kas testi ile kök inanç ve travmaların tespiti",
        "Doktorların kullandığı nokta atışı travma tespiti metodu",
      ],
      extras: [
        "Tamamen uygulamalı anlatım",
        "Video kaydı",
        "Detaylı PDF doküman",
        "Katılım belgesi",
      ],
      price: "Kontenjanla sınırlı ilk açılış fiyatı: 330 TL",
      whatsappMsg:
        "Merhaba Ayşe Hanım, Uygulamalı Kas Testi (Kinesiyoloji) ve Bilinçaltı Haritalama eğitiminiz hakkında bilgi almak ve kayıt yaptırmak istiyorum.",
    },
    {
      id: 4,
      icon: <Flower2 className="w-6 h-6 text-gold-500" />,
      title: "Ho'oponopono Bilinçaltı Arınma",
      badge: "Kadim Hawaii Öğretisi",
      topSpot:
        "İç dünyanızda barışı sağladığınızda, dış dünyanızdaki tüm kilitler kendiliğinden açılır.",
      description:
        "Zihindeki hatalı verileri, parasal kısırdöngüleri ve ilişkisel kilitleri temizleyerek hayatı sevgiyle temize çekme öğretisidir.",
      content: [
        "Ho'oponopono felsefesi ve Dr. Len'in iyileşme metodu",
        "Arınma Mantrasının 4 Aşaması",
        "Beklentileri salıverme",
        "İlişki ve parasal sorunlarda özel uygulamalar",
        "Parayı hayata çekme teknikleri",
        "Bağımlılık ve kilo sorunlarında arınma",
        "Beden ve aile ilişkileri temizliği",
      ],
      specialGift:
        'Eğitim alan tüm kursiyerlere özel "KALP MEDİTASYONU" uygulaması ve anlatımı hediyedir. Video kaydı, detaylı PDF ve katılım belgesi verilir.',
      whatsappMsg:
        "Merhaba Ayşe Hanım, Kadim Hawaii Öğretisi ile Ho'oponopono Bilinçaltı Arınma eğitiminize katılmak istiyorum. Bilgi alabilir miyim?",
    },
  ];

  const workshops: WorkshopItem[] = [
    {
      id: 1,
      icon: <Baby className="w-5 h-5 text-gold-400" />,
      title: "İçimdeki Çocuk",
      description:
        "Çocukluk yıllarında biriken kök incinmeleri ve blokajları sevgiyle şifalandırma seansı.",
      whatsappMsg:
        "Merhaba, 'İçimdeki Çocuk' tematik seansınız hakkında bilgi almak istiyorum.",
    },
    {
      id: 2,
      icon: <Heart className="w-5 h-5 text-gold-400" />,
      title: "Kendini Sev & Kendini Affet",
      description:
        "Suçluluk duygularından arınma, geçmiş hatalarla barışma ve öz değer kampı.",
      whatsappMsg:
        "Merhaba, 'Kendini Sev & Kendini Affet' atölyeniz hakkında bilgi almak istiyorum.",
    },
    {
      id: 3,
      icon: <HeartHandshake className="w-5 h-5 text-gold-400" />,
      title: "İdeal İlişki",
      description:
        "Bilinçaltındaki ilişki ve evlilik kodlarını deşifre ederek, sağlıklı ve dengeli bağ kurma atölyesi.",
      whatsappMsg:
        "Merhaba, 'İdeal İlişki' atölyeniz hakkında bilgi almak istiyorum.",
    },
    {
      id: 4,
      icon: <ShieldX className="w-5 h-5 text-gold-400" />,
      title: "Geçmişin Yüklerinden Kurtul",
      description:
        "EMDR, EFT ve kuantum teknikleriyle bugünü sabote eden geçmiş travmaları ve zihinsel tortuları temizleme seansı.",
      whatsappMsg:
        "Merhaba, 'Geçmişin Yüklerinden Kurtul' seansınız hakkında bilgi almak istiyorum.",
    },
    {
      id: 5,
      icon: <Orbit className="w-5 h-5 text-gold-400" />,
      title: "Hipnotik Zihinsel Özgürleşme",
      description:
        "İleri düzey profesyonel Hipnoterapi ve NLP metotlarıyla bilinçaltını sınırlayan korku, fobi ve endişeleri tamamen özgürleştirme seansı.",
      whatsappMsg:
        "Merhaba, 'Hipnotik Zihinsel Özgürleşme' seansınız hakkında bilgi almak istiyorum.",
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* ═══════════════════════════════════════════════════ */}
      {/* HERO BANNER */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="relative py-28 sm:py-36 bg-gradient-to-br from-[#300C32] via-[#3d113f] to-[#220325] overflow-hidden border-b border-purple-900/30">
        {/* Decorative Gradient Orbs */}
        <div className="absolute top-[-15%] left-[-10%] w-[500px] h-[500px] bg-[#4A154B]/40 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px] bg-purple-500/15 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gold-500/5 blur-[100px] rounded-full pointer-events-none" />

        {/* Floating particles (decorative) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gold-400/30 rounded-full animate-elegant-float"
              style={{
                left: `${15 + i * 14}%`,
                top: `${20 + (i % 3) * 25}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${4 + i * 0.5}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-400/10 border border-gold-500/20 backdrop-blur-sm">
            <GraduationCap className="w-4 h-4 text-gold-400" />
            <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gold-400">
              Eğitimler & Dönüşüm Atölyeleri
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight italic leading-tight">
            Kendi İçindeki
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400">
              Şifacıyı Keşfet
            </span>
          </h1>
          <p className="font-sans text-sm sm:text-base text-purple-100/80 max-w-2xl mx-auto leading-relaxed">
            Uluslararası sertifikalı, uygulamalı ve dönüşümsel eğitim
            programlarımla bilinçaltınızın derinliklerine inin, blokajlarınızı
            çözün ve hayatınızı yeniden kodlayın.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs text-purple-200/70 font-semibold">
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-gold-400" />
              <span>Uluslararası Sertifika</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-gold-400" />
              <span>Uygulamalı Eğitim</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-gold-400" />
              <span>Canlı Seans</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* MÜFREDAT CARDS SECTION */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="relative py-24 bg-cream-50 overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(74,21,75,0.03)_0%,_transparent_60%)] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_rgba(212,175,55,0.04)_0%,_transparent_60%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] px-3 py-1 bg-purple-900/5 border border-purple-900/10 rounded inline-block">
              Kapsamlı Müfredat Programları
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-purple-900 italic">
              Eğitim & Sertifika Programları
            </h2>
            <p className="font-sans text-xs sm:text-sm text-purple-800 font-semibold leading-relaxed">
              Her biri titizlikle hazırlanmış, uygulamalı ve dönüşümsel 4 ana
              müfredat programı. Detaylar için kartlara tıklayın.
            </p>
          </div>

          {/* Curriculum Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="curricula-grid">
            {curricula.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setActiveCurriculum(item)}
                className="group cursor-pointer relative bg-white rounded-2xl border border-purple-900/8 hover:border-gold-500/30 p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-900/5 overflow-hidden"
                id={`curriculum-card-${item.id}`}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

                {/* Background number */}
                <div className="absolute -bottom-4 -right-2 font-display text-[7rem] font-bold text-purple-900/[0.03] group-hover:text-gold-500/[0.06] select-none leading-none transition-colors duration-500">
                  0{index + 1}
                </div>

                <div className="relative z-10 space-y-5">
                  {/* Header row: Icon + Badge */}
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-900/5 to-gold-400/10 flex items-center justify-center border border-purple-900/8 group-hover:border-gold-500/25 transition-colors duration-300 shadow-sm">
                      {item.icon}
                    </div>
                    <span className="font-sans text-[9px] uppercase tracking-wider font-bold text-gold-600 px-3 py-1.5 rounded-full bg-gold-400/8 border border-gold-500/15 group-hover:bg-gold-400/15 transition-colors">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-lg sm:text-xl text-purple-950 group-hover:text-purple-800 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Top Spot (quote) */}
                  <blockquote className="font-serif italic text-sm text-purple-700/80 border-l-2 border-gold-400/40 pl-4 leading-relaxed">
                    "{item.topSpot}"
                  </blockquote>

                  {/* Description truncated */}
                  <p className="font-sans text-xs text-purple-800/70 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>

                  {/* Price badge if exists */}
                  {item.price && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full">
                      <Zap className="w-3.5 h-3.5 text-green-600" />
                      <span className="text-[10px] font-bold text-green-700 uppercase tracking-wide">
                        {item.price}
                      </span>
                    </div>
                  )}

                  {/* Discover link */}
                  <div className="flex items-center gap-2 pt-1 text-xs font-bold text-gold-600 group-hover:text-purple-800 transition-colors">
                    <span>Detayları İncele</span>
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* ODAKLANMIŞ TEMATİK SEANSLAR & ATÖLYELER */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="relative py-24 bg-[#300C32] overflow-hidden border-t border-b border-[#220325]">
        {/* Decorative glows */}
        <div className="absolute top-[20%] left-[-8%] w-[400px] h-[400px] bg-[#4A154B]/30 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-8%] w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-gold-500 uppercase block">
              Odaklanmış Tematik Seanslar
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight italic">
              Dönüşüm Atölyeleri
            </h2>
            <p className="font-sans text-sm sm:text-base text-purple-100 leading-relaxed">
              Belirli yaşam alanlarına özel olarak tasarlanmış, derinlemesine
              şifa ve farkındalık atölyeleri. Her biri ayrı bir dönüşüm
              kapısıdır.
            </p>
          </div>

          {/* Workshop Accordion Cards */}
          <div className="space-y-4" id="workshops-list">
            {workshops.map((workshop) => {
              const isExpanded = expandedWorkshop === workshop.id;
              return (
                <div
                  key={workshop.id}
                  className={`group relative rounded-xl border transition-all duration-500 overflow-hidden ${
                    isExpanded
                      ? "bg-[#4A154B]/40 border-gold-500/30 shadow-lg shadow-purple-950/30"
                      : "bg-[#4A154B]/15 border-purple-800/20 hover:border-gold-500/20 hover:bg-[#4A154B]/25"
                  }`}
                  id={`workshop-card-${workshop.id}`}
                >
                  {/* Top accent line */}
                  <div
                    className={`absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-gold-500/40 to-transparent transition-transform duration-500 ${
                      isExpanded ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />

                  {/* Header (always visible) */}
                  <button
                    onClick={() =>
                      setExpandedWorkshop(isExpanded ? null : workshop.id)
                    }
                    className="w-full flex items-center gap-4 sm:gap-5 p-5 sm:p-6 text-left cursor-pointer focus:outline-none"
                  >
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 flex-shrink-0 ${
                        isExpanded
                          ? "bg-gold-400/15 border-gold-500/30"
                          : "bg-gold-400/5 border-gold-500/10 group-hover:bg-gold-400/10 group-hover:border-gold-500/20"
                      }`}
                    >
                      {workshop.icon}
                    </div>

                    {/* Title & Description */}
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`font-display font-bold text-base sm:text-lg transition-colors duration-300 ${
                          isExpanded
                            ? "text-gold-400"
                            : "text-white group-hover:text-gold-400"
                        }`}
                      >
                        {workshop.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-purple-200/70 mt-1 leading-relaxed line-clamp-1">
                        {workshop.description}
                      </p>
                    </div>

                    {/* Expand toggle */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all flex-shrink-0 ${
                        isExpanded
                          ? "bg-gold-400/20 border-gold-500/30 text-gold-400"
                          : "border-purple-800/30 text-purple-400 group-hover:text-gold-400 group-hover:border-gold-500/20"
                      }`}
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {/* Expanded Content */}
                  <div
                    className={`transition-all duration-500 ease-in-out ${
                      isExpanded
                        ? "max-h-60 opacity-100"
                        : "max-h-0 opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="px-5 sm:px-6 pb-6 space-y-4">
                      <hr className="border-purple-800/30" />
                      <p className="font-sans text-sm text-purple-100/80 leading-relaxed">
                        {workshop.description}
                      </p>
                      <a
                        href={`https://wa.me/905421994079?text=${encodeURIComponent(
                          workshop.whatsappMsg
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-purple-800 hover:bg-purple-900 text-white font-sans font-bold text-xs uppercase tracking-widest px-6 py-3 rounded shadow-lg transition-all hover:-translate-y-0.5"
                      >
                        <Phone className="w-3.5 h-3.5 fill-current text-gold-400" />
                        Bu Atölye İçin Bilgi Al
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* BOTTOM CTA SECTION */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="relative py-20 bg-cream-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(74,21,75,0.04)_0%,_transparent_70%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <Star className="w-8 h-8 text-gold-500 mx-auto animate-elegant-float" />
          <h3 className="font-serif text-xl sm:text-2xl font-black italic text-purple-950 leading-relaxed max-w-2xl mx-auto">
            "Bir adım at, gerisini evren sana göstersin. Dönüşüm yolculuğun
            için en güçlü yatırım, kendine yaptığındır."
          </h3>
          <p className="font-sans text-xs text-purple-800/70 font-semibold max-w-xl mx-auto">
            Eğitimlerimiz hakkında detaylı bilgi almak, kontenjan durumu
            öğrenmek veya doğrudan kayıt yaptırmak için WhatsApp hattımızdan
            bize ulaşabilirsiniz.
          </p>
          <a
            href="https://wa.me/905421994079?text=Merhaba%20Ay%C5%9Fe%20Han%C4%B1m%2C%20e%C4%9Fitim%20programlar%C4%B1n%C4%B1z%20hakk%C4%B1nda%20detayl%C4%B1%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#300C32] hover:bg-[#4A154B] text-white font-sans text-xs font-black uppercase tracking-widest rounded-lg shadow-lg transition-all hover:scale-105"
          >
            <Phone className="w-4 h-4 fill-current text-gold-400" />
            Eğitimler İçin WhatsApp İle Ulaşın
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* CURRICULUM DETAIL MODAL */}
      {/* ═══════════════════════════════════════════════════ */}
      {activeCurriculum && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-purple-950/80 backdrop-blur-sm"
          id="curriculum-modal"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveCurriculum(null);
          }}
        >
          <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white rounded-2xl border border-purple-900/10 shadow-2xl p-6 sm:p-10 text-purple-950">
            {/* Close Button */}
            <button
              onClick={() => setActiveCurriculum(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-purple-900/5 transition cursor-pointer z-20"
              aria-label="Kapat"
              id="close-curriculum-modal"
            >
              <X className="w-6 h-6 text-purple-400 hover:text-purple-800" />
            </button>

            <div className="space-y-6">
              {/* Modal Title Block */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-900/5 to-gold-400/10 flex items-center justify-center border border-purple-900/10 flex-shrink-0">
                  {activeCurriculum.icon}
                </div>
                <div className="min-w-0">
                  <span className="font-sans text-[9px] uppercase tracking-widest text-gold-600 font-bold bg-gold-400/10 px-2.5 py-1 rounded-full border border-gold-500/15 inline-block">
                    {activeCurriculum.badge}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold mt-2 text-purple-950 italic leading-snug">
                    {activeCurriculum.title}
                  </h3>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="font-serif italic text-sm text-purple-700 border-l-3 border-gold-400 pl-4 py-2 bg-gold-50/50 rounded-r-lg">
                "{activeCurriculum.topSpot}"
              </blockquote>

              <hr className="border-purple-900/8" />

              {/* Description */}
              <div className="space-y-3">
                <h4 className="font-sans text-xs tracking-widest uppercase text-gold-600 font-bold">
                  Eğitim Hakkında
                </h4>
                <p className="font-sans text-sm text-purple-800 leading-relaxed">
                  {activeCurriculum.description}
                </p>
              </div>

              {/* Content items */}
              <div className="space-y-3">
                <h4 className="font-sans text-xs tracking-widest uppercase text-gold-600 font-bold">
                  Eğitim İçeriği
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeCurriculum.content.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-xs text-purple-800 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Extras if any */}
              {activeCurriculum.extras && (
                <div className="p-4 rounded-xl bg-purple-900/[0.03] border border-purple-900/8 space-y-2.5">
                  <h4 className="font-sans text-xs tracking-widest uppercase text-gold-600 font-bold">
                    Eğitim Ayrıcalıkları & Materyaller
                  </h4>
                  {activeCurriculum.extras.map((extra, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-xs text-purple-800"
                    >
                      <Award className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{extra}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Format if any */}
              {activeCurriculum.format && (
                <div className="flex items-start gap-3 p-4 rounded-xl bg-cream-100 border border-purple-900/5">
                  <Clock className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-sans text-[10px] tracking-widest uppercase text-gold-600 font-bold mb-1">
                      Süre & Format
                    </h4>
                    <p className="font-sans text-xs text-purple-800 leading-relaxed font-medium">
                      {activeCurriculum.format}
                    </p>
                  </div>
                </div>
              )}

              {/* Special Gift if any */}
              {activeCurriculum.specialGift && (
                <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-gold-50 to-cream-100 border border-gold-400/20">
                  <Sparkles className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-sans text-[10px] tracking-widest uppercase text-gold-600 font-bold mb-1">
                      Özel Hediye
                    </h4>
                    <p className="font-sans text-xs text-purple-800 leading-relaxed font-medium">
                      {activeCurriculum.specialGift}
                    </p>
                  </div>
                </div>
              )}

              {/* Price badge */}
              {activeCurriculum.price && (
                <div className="flex items-center gap-2 px-4 py-3 bg-green-50 border border-green-200/60 rounded-xl">
                  <Zap className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-bold text-green-700">
                    {activeCurriculum.price}
                  </span>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/905421994079?text=${encodeURIComponent(
                    activeCurriculum.whatsappMsg
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#300C32] hover:bg-[#4A154B] text-white font-sans font-bold text-xs uppercase tracking-widest py-4 rounded-xl shadow-lg transition-all hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4 fill-current text-gold-400" />
                  Kayıt & Bilgi İçin WhatsApp
                </a>
                <button
                  onClick={() => setActiveCurriculum(null)}
                  className="sm:px-6 py-4 rounded-xl border border-purple-900/10 hover:bg-purple-900/5 text-xs font-semibold text-purple-600 hover:text-purple-900 transition-all cursor-pointer"
                >
                  Kapat
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
