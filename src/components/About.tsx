/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BookOpen, Award, CheckCircle, GraduationCap } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <GraduationCap className="w-5 h-5 text-gold-600" />,
      title: "Akademik Psikoloji & Sosyoloji Temeli",
      desc: "Psikoloji lisans eğitimi ve sosyoloji birikiminden süzülen, tamamen bilimsel kökenli yaklaşımlar.",
    },
    {
      icon: <BookOpen className="w-5 h-5 text-gold-600" />,
      title: "Bilinçaltı & NLP Master Trainer",
      desc: "Uluslararası standartlarda tescilli ileri düzey uzmanlıklar ve profesyonel eğitmen sertifikaları.",
    },
    {
      icon: <Award className="w-5 h-5 text-gold-600" />,
      title: "Şahsına Ait Özel Teknikler",
      desc: "Klasik kalıpların ötesinde, danışanın ruhuna ve düğümüne göre uygulanan bütünsel tescilli şifa metotları.",
    },
  ];

  return (
    <section id="hakkimda" className="relative py-24 bg-cream-50 overflow-hidden text-purple-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Visual Editorial Left Card (5 cols) */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div className="relative p-8 rounded-lg bg-white border border-purple-900/10 shadow-sm overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-gold-600 font-bold block mb-2">
                Vizyoner Kurucu
              </span>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-purple-950 leading-tight italic">
                Ayşe Erendor
              </h2>
              <p className="font-sans text-[11px] leading-relaxed text-purple-800 mt-2">
                Psikoloji Lisans Mezunu • Sosyoloji • Profesyonel Aile & Sosyal Yaşam Danışmanı • Uzman Eğitmen
              </p>

              <hr className="my-6 border-purple-900/10" />

              {/* Achievements stats board */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-cream-50 rounded border border-purple-900/5 text-center">
                  <span className="block font-display text-3xl font-black text-purple-900">%100</span>
                  <span className="font-sans text-[10px] uppercase tracking-wider text-purple-700 font-bold">Bireysel Gizlilik & Güven</span>
                </div>
                <div className="p-4 bg-cream-50 rounded border border-purple-900/5 text-center">
                  <span className="block font-display text-3xl font-black text-purple-900">1’e 1</span>
                  <span className="font-sans text-[10px] uppercase tracking-wider text-purple-700 font-bold">Kişiselleştirilmiş Seans</span>
                </div>
              </div>
              
              <div className="mt-6 flex items-center justify-center gap-2 p-3 bg-gold-400/5 rounded border border-gold-500/20 text-gold-700 text-xs font-semibold">
                <CheckCircle className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <span>Kilis’te EMDR & Regresyon Seanslarında Tek Yetkili</span>
              </div>
            </div>

            <blockquote className="border-l-2 border-gold-500 pl-4 italic font-serif text-purple-900 text-sm sm:text-base leading-relaxed" id="quote-card">
              "Kilis’te ilk ve tek vizyonuyla kurduğum mu'cize nüma çatısı altında; insan zihninin karanlık odalarını, bilinçaltının derin kodlarını ve ruhsal tıkanıklıkları bütünsel bir yaklaşımla çözüme kavuşturuyoruz."
            </blockquote>
          </div>

          {/* Academic Journey right narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-8" id="about-text-flow">
            <div className="space-y-4">
              <span className="text-sm font-semibold tracking-widest text-gold-600 uppercase block">
                YOLCULUK & METODOLOJİ
              </span>
              <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-purple-950 leading-tight">
                Akademik Birikim, İleri Düzey Uzmanlıklar ve Şahsıma Ait Özel Tekniklerle Dönüşüm
              </h3>
            </div>

            {/* Rich blockquote with her exact words */}
            <div className="space-y-6 font-sans text-base text-purple-900 leading-relaxed">
              <p className="font-semibold text-purple-950">
                Merhaba, ben Ayşe Erendor. İnsanın zihinsel, ruhsal ve toplumsal kısır döngülerini aşarak kendi içsel mucizesini keşfetmesine rehberlik eden bir danışman ve uzman eğitmeniyim.
              </p>
              
              <p>
                Hayata ve insana dair yaklaşımım; Psikoloji lisans eğitimim ve Sosyoloji akademik birikimimin getirdiği güçlü bilimsel temellere dayanmaktadır. Uluslararası standartlarda tamamladığım ileri düzey uzmanlık programları, kurumsal eğitmenlik sertifikasyonlarım ve hayattaki derin kişisel tecrübelerimle seans tekniklerimi tamamen kendim tasarlıyorum.
              </p>
              
              <p className="bg-white p-6 rounded border border-purple-900/10 text-purple-950 font-medium shadow-sm">
                Klasik kalıpların ötesinde, şahsıma ait tescilli özel teknikler ve bütünsel şifa metodolojileri uyguluyorum. Bilgi ve bilimin ışığında çıktığımız bu yolda amaç; sadece şikayetleri çözmek değil, potansiyeli kısıtlayan tüm düğümleri bütünüyle ortadan kaldırmaktır.
              </p>

              <p>
                Kilis’te ilk ve tek vizyonuyla kurduğum mu'cize nüma çatısı altında; insan zihninin karanlık odalarını, bilinçaltının derin kodlarını ve ruhsal tıkanıklıkları bütünsel bir yaklaşımla çözüme kavuşturuyoruz.
              </p>

              <p className="font-semibold text-gold-700">
                Çünkü biliyorum ki; "İmkânsız kelimesi dahi imkân’dan oluşuyorsa, her şey mümkün." Sınırlarınızı aşmak ve hayatınızı en üst profesyonellik seviyesinde yeniden şekillendirmek için burada yanınızdayım.
              </p>
            </div>

            {/* Three key highlight icons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-cream-200">
              {highlights.map((h, i) => (
                <div key={i} className="space-y-2">
                  <div className="w-10 h-10 rounded-full bg-gold-400/10 flex items-center justify-center">
                    {h.icon}
                  </div>
                  <h4 className="font-display font-bold text-sm text-purple-950">
                    {h.title}
                  </h4>
                  <p className="font-sans text-xs text-purple-700 leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
