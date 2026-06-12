/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { useToast } from "./Toast";
import { 
  ChevronRight, 
  ArrowLeft, 
  RefreshCw, 
  MessageSquareHeart, 
  CheckCircle, 
  HelpCircle, 
  Users, 
  Heart, 
  Brain, 
  Award,
  Sparkles,
  Zap,
  Check
} from "lucide-react";

// Definitions of Quizzes in Turkish
interface QuizType {
  id: string;
  title: string;
  tagline: string;
  description: string;
  duration: string;
  icon: any;
  color: string;
}

const AVAILABLE_QUIZZES: QuizType[] = [
  {
    id: "personality",
    title: "Dört Mizaç & Kişilik Testi",
    tagline: "Nasıl Bir Kişiliğe Sahipsiniz?",
    description: "40 soruda Florence Littauer mizaç modeline göre; Popüler Neşeli, Güçlü Kararlı, Mükemmeliyetçi ve Barışçıl Uyumlu mizaç dağılımınızı çıkartın.",
    duration: "40 Soru • 5-6 dk",
    icon: Users,
    color: "from-amber-400 to-yellow-600"
  },
  {
    id: "date_love",
    title: "İlişki & Karakter Gelişim Testi",
    tagline: "Testi çöz, cevabı hemen öğren!",
    description: "Cinsiyetiniz, yaşınız, ideal buluşma senaryolarınız ve katlanamadığınız özelliklerle ilişki karakterinizi keşfedin.",
    duration: "10 Soru • 2 dk",
    icon: Heart,
    color: "from-rose-450 to-pink-600"
  },
  {
    id: "blockage",
    title: "Bilinçaltı Blokaj & Enerji Testi",
    tagline: "Haydi teste!",
    description: "Gözlerinizi kapadığınızda gördüğünüz renkler, empati düzeyiniz ve zihinsel tıkanıklıklarınızla enerji dengenizi analiz edin.",
    duration: "10 Soru • 2 dk",
    icon: Brain,
    color: "from-purple-500 to-indigo-600"
  },
  {
    id: "quality_life",
    title: "Hızlı Yaşam Kalitesi Taraması",
    tagline: "Eşsiz Seans Analizi",
    description: "Kısırdöngüler, somatik fiziki ağrılar ve geçmiş bağlılıklarınızla hızlı hücre potansiyeli ve farkındalık durumunuzu görün.",
    duration: "3 Soru • 1 dk",
    icon: Award,
    color: "from-gold-500 to-purple-800"
  }
];

// Test 1: Personality questions 40 items mapped carefully to classical temperaments
const PERSONALITY_QUESTIONS = [
  { text: "Lütfen size uygun olanı seçiniz:", options: [
    { label: "Maceraperest", type: "choleric" },
    { label: "Uyumlu", type: "phlegmatic" },
    { label: "Canlı", type: "sanguine" },
    { label: "Analitik", type: "melancholic" }
  ]},
  { text: "Lütfen size uygun olanı seçiniz:", options: [
    { label: "Israrcı", type: "choleric" },
    { label: "Şakacı", type: "sanguine" },
    { label: "İkna edici", type: "sanguine" },
    { label: "Barışçıl", type: "phlegmatic" }
  ]},
  { text: "Lütfen size uygun olanı seçiniz:", options: [
    { label: "Uysal", type: "phlegmatic" },
    { label: "Özverili", type: "melancholic" },
    { label: "Sosyal", type: "sanguine" },
    { label: "Azimli", type: "choleric" }
  ]},
  { text: "Lütfen size uygun olanı seçiniz:", options: [
    { label: "Düşünceli", type: "melancholic" },
    { label: "Kontrollü", type: "phlegmatic" },
    { label: "Rekabetçi", type: "choleric" },
    { label: "İnandırıcı", type: "sanguine" }
  ]},
  { text: "Lütfen size uygun olanı seçiniz:", options: [
    { label: "Hayat veren", type: "sanguine" },
    { label: "Saygılı", type: "melancholic" },
    { label: "İhtiyatlı", type: "phlegmatic" },
    { label: "Becerili", type: "choleric" }
  ]},
  { text: "Lütfen size uygun olanı seçiniz:", options: [
    { label: "Halinden Memnun", type: "phlegmatic" },
    { label: "Duyarlı", type: "melancholic" },
    { label: "Kendine Güvenli", type: "choleric" },
    { label: "Hayat Dolu", type: "sanguine" }
  ]},
  { text: "Lütfen size uygun olanı seçiniz:", options: [
    { label: "Planlayıcı", type: "melancholic" },
    { label: "Sabırlı", type: "phlegmatic" },
    { label: "Olumlu", type: "sanguine" },
    { label: "Yönlendirici", type: "choleric" }
  ]},
  { text: "Lütfen size uygun olanı seçiniz:", options: [
    { label: "Kendinden Emin", type: "choleric" },
    { label: "Günü Yaşayan", type: "sanguine" },
    { label: "Programlı", type: "melancholic" },
    { label: "Utangaç", type: "phlegmatic" }
  ]},
  { text: "Lütfen size uygun olanı seçiniz:", options: [
    { label: "Düzenli", type: "melancholic" },
    { label: "Nazik", type: "phlegmatic" },
    { label: "Açık sözlü", type: "choleric" },
    { label: "İyimser", type: "sanguine" }
  ]},
  { text: "Lütfen size uygun olanı seçiniz:", options: [
    { label: "Dostça Davranan", type: "phlegmatic" },
    { label: "Sadık", type: "melancholic" },
    { label: "Eğlenceli", type: "sanguine" },
    { label: "Etkili", type: "choleric" }
  ]},
  { text: "Lütfen size uygun olanı seçiniz:", options: [
    { label: "Cesur", type: "choleric" },
    { label: "Hoş", type: "sanguine" },
    { label: "Diplomatik", type: "phlegmatic" },
    { label: "Ayrıntıcı", type: "melancholic" }
  ]},
  { text: "Lütfen size uygun olanı seçiniz:", options: [
    { label: "Neşeli", type: "sanguine" },
    { label: "Tutarlı", type: "phlegmatic" },
    { label: "Kültürlü", type: "melancholic" },
    { label: "Güvenli", type: "choleric" }
  ]},
  { text: "Lütfen size uygun olanı seçiniz:", options: [
    { label: "İdealist", type: "melancholic" },
    { label: "Bağımsız", type: "choleric" },
    { label: "Kendi Halinde", type: "phlegmatic" },
    { label: "Esin Kaynağı", type: "sanguine" }
  ]},
  { text: "Lütfen size uygun olanı seçiniz:", options: [
    { label: "Sıcakkanlı", type: "sanguine" },
    { label: "Kararlı", type: "choleric" },
    { label: "İnce Esprili", type: "phlegmatic" },
    { label: "Derin", type: "melancholic" }
  ]},
  { text: "Lütfen size uygun olanı seçiniz:", options: [
    { label: "Arabulucu", type: "phlegmatic" },
    { label: "Müziksever", type: "melancholic" },
    { label: "Harekete Geçiren", type: "choleric" },
    { label: "Kolay Kaynaşan", type: "sanguine" }
  ]},
  { text: "Lütfen size uygun olanı seçiniz:", options: [
    { label: "İnce düşünceli", type: "melancholic" },
    { label: "Azimli", type: "choleric" },
    { label: "Konuşkan", type: "sanguine" },
    { label: "Hoşgörülü", type: "phlegmatic" }
  ]},
  { text: "Lütfen size uygun olanı seçiniz:", options: [
    { label: "İyi Dinleyici", type: "phlegmatic" },
    { label: "Vefalı", type: "melancholic" },
    { label: "Lider", type: "choleric" },
    { label: "Enerjik", type: "sanguine" }
  ]},
  { text: "Lütfen size uygun olanı seçiniz:", options: [
    { label: "Kanaatkar", type: "phlegmatic" },
    { label: "Şef", type: "choleric" },
    { label: "Organizatör", type: "melancholic" },
    { label: "Şirin", type: "sanguine" }
  ]},
  { text: "Lütfen size uygun olanı seçiniz:", options: [
    { label: "Mükemmeliyetçi", type: "melancholic" },
    { label: "Tatlı", type: "phlegmatic" },
    { label: "Üretken", type: "choleric" },
    { label: "Popüler", type: "sanguine" }
  ]},
  { text: "Lütfen size uygun olanı seçiniz:", options: [
    { label: "Hareketli", type: "sanguine" },
    { label: "Gözü pek", type: "choleric" },
    { label: "Terbiyeli", type: "melancholic" },
    { label: "Dengeli", type: "phlegmatic" }
  ]},
  { text: "Lütfen size uygun olanı seçiniz (Zayıf Yönler):", options: [
    { label: "İfadesiz", type: "phlegmatic" },
    { label: "Sıkılgan", type: "melancholic" },
    { label: "Arsız", type: "sanguine" },
    { label: "Zorba", type: "choleric" }
  ]},
  { text: "Lütfen size uygun olanı seçiniz (Zayıf Yönler):", options: [
    { label: "Disiplinsiz", type: "sanguine" },
    { label: "Anlayışsız", type: "choleric" },
    { label: "Coşkusuz", type: "phlegmatic" },
    { label: "Affetmeyen", type: "melancholic" }
  ]},
  { text: "Lütfen size uygun olanı seçiniz (Zayıf Yönler):", options: [
    { label: "Suskun", type: "phlegmatic" },
    { label: "Kinci", type: "melancholic" },
    { label: "Karşı Gelen", type: "choleric" },
    { label: "Kendini Tekrarlayan", type: "sanguine" }
  ]},
  { text: "Lütfen size uygun olanı seçiniz (Zayıf Yönler):", options: [
    { label: "Telaşlı", type: "sanguine" },
    { label: "Korkak", type: "phlegmatic" },
    { label: "Unutkan", type: "melancholic" },
    { label: "Dobra", type: "choleric" }
  ]},
  { text: "Lütfen size uygun olanı seçiniz (Zayıf Yönler):", options: [
    { label: "Laf Kesen", type: "sanguine" },
    { label: "Sabırsız", type: "choleric" },
    { label: "Güvensiz", type: "melancholic" },
    { label: "Kararsız", type: "phlegmatic" }
  ]},
  { text: "Lütfen size uygun olanı seçiniz (Zayıf Yönler):", options: [
    { label: "Popüler Olmayan", type: "melancholic" },
    { label: "Bulaşmayan", type: "phlegmatic" },
    { label: "Ne Yapacağı Belirsiz", type: "sanguine" },
    { label: "Şevkatsiz", type: "choleric" }
  ]},
  { text: "Lütfen size uygun olanı seçiniz (Zayıf Yönler):", options: [
    { label: "Dik Kafalı", type: "choleric" },
    { label: "Gelişigüzel", type: "sanguine" },
    { label: "Zor Beğenen", type: "melancholic" },
    { label: "Tereddütlü", type: "phlegmatic" }
  ]},
  { text: "Lütfen size uygun olanı seçiniz (Zayıf Yönler):", options: [
    { label: "Renksiz", type: "phlegmatic" },
    { label: "Kötümser", type: "melancholic" },
    { label: "Kibirli", type: "choleric" },
    { label: "Göz Yuman", type: "phlegmatic" }
  ]},
  { text: "Lütfen size uygun olanı seçiniz (Zayıf Yönler):", options: [
    { label: "Kolay Sinirlenen", type: "choleric" },
    { label: "Amaçsız", type: "phlegmatic" },
    { label: "İddiacı", type: "choleric" },
    { label: "Yabancılaşmış", type: "sanguine" }
  ]},
  { text: "Lütfen size uygun olanı seçiniz (Zayıf Yönler):", options: [
    { label: "Ahmak", type: "sanguine" },
    { label: "Negatif davranan", type: "melancholic" },
    { label: "Küstah", type: "choleric" },
    { label: "Kayıtsız", type: "phlegmatic" }
  ]},
  { text: "Lütfen size uygun olanı seçiniz (Zayıf Yönler):", options: [
    { label: "Endişeli", type: "melancholic" },
    { label: "Yalnızlığa Sığınan", type: "melancholic" },
    { label: "İş Delisi", type: "choleric" },
    { label: "Tanınmak İsteyen", type: "sanguine" }
  ]},
  { text: "Lütfen size uygun olanı seçiniz (Zayıf Yönler):", options: [
    { label: "Aşırı Hassas", type: "melancholic" },
    { label: "Patavatsız", type: "sanguine" },
    { label: "Ürkek", type: "phlegmatic" },
    { label: "Geveze", type: "sanguine" }
  ]},
  { text: "Lütfen size uygun olanı seçiniz (Zayıf Yönler):", options: [
    { label: "Şüpheci", type: "melancholic" },
    { label: "Düzensiz", type: "sanguine" },
    { label: "Otoriter", type: "choleric" },
    { label: "Bunalımlı", type: "melancholic" }
  ]},
  { text: "Lütfen size uygun olanı seçiniz (Zayıf Yönler):", options: [
    { label: "Tutarsız", type: "sanguine" },
    { label: "İçe Dönük", type: "melancholic" },
    { label: "Hoşgörüsüz", type: "choleric" },
    { label: "Umursamaz", type: "phlegmatic" }
  ]},
  { text: "Lütfen size uygun olanı seçiniz (Zayıf Yönler):", options: [
    { label: "Dağınık", type: "sanguine" },
    { label: "Karamsar", type: "melancholic" },
    { label: "Sızlanan", type: "phlegmatic" },
    { label: "İnsan Kullanan", type: "choleric" }
  ]},
  { text: "Lütfen size uygun olanı seçiniz (Zayıf Yönler):", options: [
    { label: "Uyuşuk", type: "phlegmatic" },
    { label: "İnatçı", type: "choleric" },
    { label: "Hava Atan", type: "sanguine" },
    { label: "Kuşkucu", type: "melancholic" }
  ]},
  { text: "Lütfen size uygun olanı seçiniz (Zayıf Yönler):", options: [
    { label: "Yalnızlığı Seven", type: "melancholic" },
    { label: "Güdmeye Çalışan", type: "choleric" },
    { label: "Tembel", type: "phlegmatic" },
    { label: "Gürültücü", type: "sanguine" }
  ]},
  { text: "Lütfen size uygun olanı seçiniz (Zayıf Yönler):", options: [
    { label: "Ağırkanlı", type: "phlegmatic" },
    { label: "Şüpheci", type: "melancholic" },
    { label: "Çabuk Sinirlenen", type: "choleric" },
    { label: "Kafası Dağınık", type: "sanguine" }
  ]},
  { text: "Lütfen size uygun olanı seçiniz (Zayıf Yönler):", options: [
    { label: "Huzursuz", type: "melancholic" },
    { label: "Aceleci", type: "choleric" },
    { label: "İntikamcı", type: "melancholic" },
    { label: "Gönülsüz", type: "phlegmatic" }
  ]},
  { text: "Lütfen size uygun olanı seçiniz (Zayıf Yönler):", options: [
    { label: "Ödün Veren", type: "phlegmatic" },
    { label: "Tenkitçi (negatif eleştiren)", type: "melancholic" },
    { label: "Kurnaz", type: "choleric" },
    { label: "Değişken", type: "sanguine" }
  ]}
];

// Test 2: Date & Love Questions (10 Soru)
const DATE_LOVE_QUESTIONS = [
  {
    id: 1,
    text: "İlk olarak cinsiyetini öğrenelim.",
    options: [
      { label: "Kadın", type: "romantic" },
      { label: "Erkek", type: "intense" },
      { label: "Ne fark eder?!", type: "peace" }
    ]
  },
  {
    id: 2,
    text: "Şimdi de yaşını söyle lütfen.",
    options: [
      { label: "18 - 24 yaş", type: "active" },
      { label: "25 - 34 yaş", type: "active" },
      { label: "35 - 44 yaş", type: "mature" },
      { label: "45 ve üzeri", type: "mature" }
    ]
  },
  {
    id: 3,
    text: "İdeal bir buluşma sence nerede ve nasıl olmalı?",
    options: [
      { label: "Kıyıdan köşeden sanat dolalım diye birlikte bir tiyatro oyunu izlemeye gitsek fena olmaz.", type: "romantic" },
      { label: "Evde sessiz sakin film izlemeyi tercih ederim.", type: "quiet" },
      { label: "Hafta sonu pahalı bir restoranda yemek yemeye asla ve asla hayır demem.", type: "intense" },
      { label: "Bir akşamımızı dansa ayırsak daha ne isterim!", type: "active" },
      { label: "Açık havada bisikletle gezmekten büyük keyif alırdım doğrusu.", type: "peace" }
    ]
  },
  {
    id: 4,
    text: "Sevdiğin kişiyle baş başa, bu aktivitelerden hangisini yapmayı tercih edersin?",
    options: [
      { label: "Hoş manzaralı bir yerde öğle yemeği yemek", type: "romantic" },
      { label: "Alışverişe gidip istediğim her şeyi almak", type: "intense" },
      { label: "Birlikte dondurma yerken el ele yürümek", type: "quiet" },
      { label: "Karşılıklı kahve içip sohbet etmek", type: "quiet" },
      { label: "Açık havada piknik yapmak", type: "peace" }
    ]
  },
  {
    id: 5,
    text: "Sence sevgilinde bu özelliklerden hangisi olmalı?",
    options: [
      { label: "Dürüstlük", type: "quiet" },
      { label: "Şefkat", type: "peace" },
      { label: "İyi bir espri anlayışı", type: "active" },
      { label: "Sabır, sabır ve daha çok sabır", type: "romantic" },
      { label: "Güzellik/yakışıklılık", type: "intense" }
    ]
  },
  {
    id: 6,
    text: "İş hediyeye gelince bunlardan hangisine hayır diyemezsin?",
    options: [
      { label: "Pahalı bir takı/mücevher", type: "intense" },
      { label: "Çikolata", type: "quiet" },
      { label: "Telefon", type: "active" },
      { label: "Tatil", type: "peace" },
      { label: "Çiçek", type: "romantic" }
    ]
  },
  {
    id: 7,
    text: "Birine sevgini göstermek sence zayıflık mıdır?",
    options: [
      { label: "Evet, o yüzden duygularımı hep içimde yaşarım ve kimseye belli etmem.", type: "quiet" },
      { label: "Hayır, aksine gücüme güç katar. Sevgi paylaşıldıkça çoğalmaz mı zaten?", type: "romantic" }
    ]
  },
  {
    id: 8,
    text: "Peki, bir insanda asla katlanamadığın özellik nedir?",
    options: [
      { label: "Ego. Öyle olmadığı halde kendini benden üstün gören insanı hayatta çekemem.", type: "quiet" },
      { label: "Açgözlülük. Sahip olamadığı şeylerin peşinde ömür tüketetenleri anlayamam.", type: "peace" },
      { label: "Karamsarlık. Hayata sürekli negatif bakan birini etrafımda istemem.", type: "active" },
      { label: "Bencillik. Yalnızca kendini düşünen biriyle işim olmaz.", type: "romantic" },
      { label: "Riyakarlık. Yüzüme gülüp arkamdan iş çevrilmesine tahammülüm yok.", type: "intense" }
    ]
  },
  {
    id: 9,
    text: "İlk kez aşık olduğunda kaç yaşındaydın?",
    options: [
      { label: "11-15 yaş", type: "active" },
      { label: "17-20 yaş", type: "romantic" },
      { label: "21-25 yaş", type: "intense" },
      { label: "26-31 yaş", type: "quiet" },
      { label: "31+ yaş", type: "peace" }
    ]
  },
  {
    id: 10,
    text: "Geldik son soruya… Gerçek aşkın bir zaman dilimi olsa sence hangisi olurdu?",
    options: [
      { label: "1950'ler", type: "romantic" },
      { label: "1960'lar", type: "peace" },
      { label: "1970'ler", type: "quiet" },
      { label: "1980'ler", type: "active" },
      { label: "1990'lar", type: "intense" }
    ]
  }
];

// Test 3: Subconscious Blockage / Enerji Testi (10 Soru)
const BLOCKAGE_QUESTIONS = [
  {
    id: 1,
    text: "Cinsiyetini öğrenelim.",
    options: [
      { label: "Kadın", value: "F" },
      { label: "Erkek", value: "M" },
      { label: "Ne fark eder?!", value: "X" }
    ]
  },
  {
    id: 2,
    text: "Kaç yaşındasın bakalım?",
    options: [
      { label: "18-24", value: "1" },
      { label: "25-34", value: "2" },
      { label: "35-44", value: "3" },
      { label: "45-54", value: "4" },
      { label: "55+", value: "5" }
    ]
  },
  {
    id: 3,
    text: "Aldığın kararların yanlış olduğunu fark etmene rağmen devam ettiğin oluyor mu?",
    options: [
      { label: "Evet, sonunu hiç düşünmeden dalıyorum içine.", value: "heavy" },
      { label: "Arada kalıyorum ve o anki ruh halime göre davranıyorum.", value: "medium" },
      { label: "Genelde yanlış olduğunu düşünüyorsam devam etmem.", value: "light" }
    ]
  },
  {
    id: 4,
    text: "Aşağıdaki derin aurorayı hayal edin... Gözlerinizi kapattığınız anda hangi rengi görüyorsunuz?",
    options: [
      { label: "Mor / Menekşe (Yüksek titreşim, sezgisellik)", value: "light" },
      { label: "Altın / Sarı (Özgüven, zihinsel güç)", value: "light" },
      { label: "Kırmızı / Sıcak Tonlar (Öfke ve bastırılmış tutku)", value: "heavy" },
      { label: "Mavi / Turkuaz (İfade tıkanıklığı, sükunet)", value: "medium" },
      { label: "Yeşil (Kalp kırıklıkları, şifa arayışı)", value: "heavy" },
      { label: "Turuncu / Gri (Bilinmezlik, endişe)", value: "heavy" }
    ]
  },
  {
    id: 5,
    text: "Imm... Sence ne kadar empati kuran bir insansın? (1= En Az, 5= En Çok)",
    options: [
      { label: "1 - Kendimi önceliklendiririm, empati azdır", value: "light" },
      { label: "2 - Nadiren empatik olurum", value: "light" },
      { label: "3 - Dengeli bir empati düzeyim var", value: "medium" },
      { label: "4 - Yüksek empati; başkalarının acısını çok hissederim", value: "heavy" },
      { label: "5 - Aşırı empati; başkaları için kendimi tüketiyorum", value: "heavy" }
    ]
  },
  {
    id: 6,
    text: "Nerede olursa ol, kendini o anda hissetmediğin ve bir an önce yalnız kalmak istediğin oluyor mu?",
    options: [
      { label: "Hem de çok oluyor...", value: "heavy" },
      { label: "Zaman zaman böyle hissediyorum.", value: "medium" },
      { label: "Sevmediğim ya da tanımadığım insanların yanında böyle hissediyorum.", value: "medium" },
      { label: "Hayır, genelde anda kalırım.", value: "light" }
    ]
  },
  {
    id: 7,
    text: "Son zamanlarda en çok hissettiğin duygu daha çok bunlardan hangisi?",
    options: [
      { label: "Mutlu", value: "light" },
      { label: "Endişeli", value: "heavy" },
      { label: "Hüzünlü", value: "heavy" },
      { label: "Sıkkın", value: "medium" },
      { label: "Umutsuz", value: "heavy" },
      { label: "Diğer", value: "medium" }
    ]
  },
  {
    id: 8,
    text: "Soyut bir girdap resmi hayal edin... Baktığınızda sana hissettirdiği şey hangisi oluyor?",
    options: [
      { label: "Öfke", value: "heavy" },
      { label: "Acı", value: "heavy" },
      { label: "Huzur", value: "light" },
      { label: "Öteki dünya / Spiritüellik", value: "medium" },
      { label: "Bilinmezlik", value: "heavy" },
      { label: "Mutluluk", value: "light" },
      { label: "Diğer", value: "medium" }
    ]
  },
  {
    id: 9,
    text: "Etrafındaki insanların seni değersiz hissettirdiğini düşünüyor musun?",
    options: [
      { label: "Evet, bunu çok sık hissediyor ve üzülüyorum.", value: "heavy" },
      { label: "Hayır, değerimin farkındayım, çevrem bana değer verir.", value: "light" }
    ]
  },
  {
    id: 10,
    text: "Son olarak, geceleri geçmişe takılıp üzüldüğün çok oluyor mu?",
    options: [
      { label: "Hem de her gün bunu yaşıyorum.", value: "heavy" },
      { label: "Kötü şeyler yaşadığımda böyle oluyor.", value: "medium" },
      { label: "Hayır, direkt uyurum.", value: "light" }
    ]
  }
];

// Test 4: General Quality of Life Survey (3 Soru)
const HEAL_QUALITY_QUESTIONS = [
  {
    text: "Hayatınızda sürekli benzer senaryoları, benzer insanlarla tekrar tekrar yaşadığınızı hissediyor musunuz?",
    options: [
      { label: "Evet, sanki hiçbir şekilde aşamadığım bir kısırdöngünün içindeyim.", score: "A" },
      { label: "Bazen buna benzer olaylar yaşıyorum, ama bir şekilde çözebiliyorum.", score: "B" },
      { label: "Bilakis hayır, yaşamıma dair döngülerimi yönetebiliyorum.", score: "C" }
    ]
  },
  {
    text: "Geçmişte yaşadığınız olumsuz bir deneyim, travma veya korku bugünkü kararlarınızı ve huzurunuzu etkiliyor mu?",
    options: [
      { label: "Evet, geçmişin o ağır yüklerini taşımaktan son derece yoruldum.", score: "A" },
      { label: "Sadece tetiklendiğim özel anlarda veya rüyalarımda etkileniyorum.", score: "B" },
      { label: "Hayır, geçmiş benim için geçmişte kaldı ve etkilemiyor.", score: "C" }
    ]
  },
  {
    text: "Bedeninizde geçmeyen fiziksel ağrılar (migren, kronik yorgunluk, uyku bozukluğu) veya duygusal olarak 'tükenmişlik' hissediyor musunuz?",
    options: [
      { label: "Evet, her sabah bu tarifsiz ağırlıkla uyanıyorum.", score: "A" },
      { label: "Dönem dönem yoğun stres altında ve sıkışmış hissedebiliyorum.", score: "B" },
      { label: "Hayır, bedenim ve enerjim oldukça zinde ve dengelidir.", score: "C" }
    ]
  }
];

export default function AwarenessQuiz() {
  const toast = useToast();
  const [selectedQuizId, setSelectedQuizId] = useState<string | null>(null);
  
  // Quiz running states
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [personalityAnswers, setPersonalityAnswers] = useState<Record<number, string>>({});
  const [loveAnswers, setLoveAnswers] = useState<Record<number, string>>({});
  const [blockageAnswers, setBlockageAnswers] = useState<Record<number, string>>({});
  const [qualityAnswers, setQualityAnswers] = useState<Record<number, string>>({});
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  // Pagination page for Personality (8 pages of 5 items)
  const [personalityPage, setPersonalityPage] = useState(0);

  const handleSelectQuiz = (id: string) => {
    setSelectedQuizId(id);
    setCurrentQuestionIdx(0);
    setPersonalityAnswers({});
    setLoveAnswers({});
    setBlockageAnswers({});
    setQualityAnswers({});
    setPersonalityPage(0);
    setIsQuizCompleted(false);
  };

  const handleBackToHub = () => {
    setSelectedQuizId(null);
    setIsQuizCompleted(false);
  };

  // Score Calculations
  const calculatePersonalityResult = () => {
    const counts = { sanguine: 0, choleric: 0, melancholic: 0, phlegmatic: 0 };
    Object.entries(personalityAnswers).forEach(([idxStr, label]) => {
      const idx = parseInt(idxStr, 10);
      const q = PERSONALITY_QUESTIONS[idx];
      const opt = q?.options.find(o => o.label === label);
      if (opt) {
        counts[opt.type as keyof typeof counts] = (counts[opt.type as keyof typeof counts] || 0) + 1;
      }
    });

    const total = Math.max(1, Object.keys(personalityAnswers).length);
    const shares = {
      sanguine: Math.round((counts.sanguine / total) * 100),
      choleric: Math.round((counts.choleric / total) * 100),
      melancholic: Math.round((counts.melancholic / total) * 100),
      phlegmatic: Math.round((counts.phlegmatic / total) * 100)
    };

    // Determine dominant
    let dominant: "sanguine" | "choleric" | "melancholic" | "phlegmatic" = "sanguine";
    let maxVal = -1;
    Object.entries(shares).forEach(([k, v]) => {
      if (v > maxVal) {
        maxVal = v;
        dominant = k as any;
      }
    });

    const names = {
      sanguine: "Popüler Neşeli (Sanguine)",
      choleric: "Güçlü Kararlı (Choleric)",
      melancholic: "Mükemmeliyetçi (Melancholic)",
      phlegmatic: "Barışçıl Uyumlu (Phlegmatic)"
    };

    const explanations = {
      sanguine: "Yüksek enerjili, sosyal, konuşkan ve çevreye moral veren bir yapınız var. Hayatın neşesini ve motivasyonunu temsil edersiniz. Seanslarda bu canlı niyetinizi, tıkanık hedefleri açarak muazzam bir yaratıcılığa dönüştürebiliriz.",
      choleric: "Hedef odaklı, lider ruhlu, kararlı ve rekabetçi yönünüz baskın. Zorluklar karşısında yılmazsınız. Ancak bazen kendinizi sabırsızlık veya kontrol arzusuyla sıkışmış bulabilirsiniz.",
      melancholic: "Analitik, ayrıntıcı, estetik değerlere hassas ve düşünceli bir yapınız var. Mükemmellik peşinde koşarken bazen kendinizi negatif eleştiri ve melankoli girdabında bulabilirsiniz.",
      phlegmatic: "Sakin, uyumlu, dengeli ve barışçıl mizaçtasınız. İyi bir dinleyicisiniz. Çatışmalardan uzak kalmak istersiniz ancak bazen erteleme veya durağanlık yaşayabilirsiniz."
    };

    return { shares, dominant: names[dominant], desc: explanations[dominant], keyView: dominant };
  };

  const calculateLoveResult = () => {
    const counts = { romantic: 0, quiet: 0, intense: 0, peace: 0, active: 0, mature: 0 };
    Object.entries(loveAnswers).forEach(([idxStr, label]) => {
      const idx = parseInt(idxStr, 10);
      const q = DATE_LOVE_QUESTIONS[idx];
      const opt = q?.options.find(o => o.label === label);
      if (opt) {
        counts[opt.type as keyof typeof counts] = (counts[opt.type as keyof typeof counts] || 0) + 1;
      }
    });

    let dominant = "romantic";
    let max = -1;
    ["romantic", "quiet", "intense", "peace"].forEach((cat) => {
      if ((counts[cat as keyof typeof counts] || 0) > max) {
        max = counts[cat as keyof typeof counts] || 0;
        dominant = cat;
      }
    });

    const loveProfiles = {
      romantic: {
        title: "Derin Romantik ve Paylaşımcı",
        desc: "İlişkilerde samimiyet, ince düşünce, sanat ve ortak anlar sizin için kutsaldır. Kalp yaralarını en derinden hisseden gruptasınız. Ayşe Erendor ile Regresyon seansları aşk kilitlerinizi tamamen açabilir."
      },
      quiet: {
        title: "Sakin, Güvenli ve Huzurlu Liman",
        desc: "Sizin için aşk; evdeki sakinlik, dürüst sohbetler ve samimi bir kahvedir. Yalan ve riyakarlığa asla tahammülünüz yoktur. Sakin enerjinizi Healy Biyofrekans dengesiyle taçlandırabilirsiniz."
      },
      intense: {
        title: "Tutkulu, Seçkin ve Görkemli Aşık",
        desc: "Aşkı yüksek perdeden, heyecan, prestij, pahalı dokunuşlar ve kararlılıkla yaşarsınız. Hayatınızdaki ego savaşlarından sıyrıldığınızda gerçek bir dönüştürücü güce kavuşursunuz."
      },
      peace: {
        title: "Özgür Ruhlu ve Doğa Dostu",
        desc: "Huzur, açık havada piknik yapmak, saygı ve esneklik sizin aşk formülünüzdür. Kısıtlanmaya gelemezsiniz. Değer hissiniz korundukça sevginiz sınırsız hale gelir."
      }
    };

    return loveProfiles[dominant as keyof typeof loveProfiles] || loveProfiles.romantic;
  };

  const calculateBlockageResult = () => {
    let score = 0;
    Object.entries(blockageAnswers).forEach(([idxStr, label]) => {
      const idx = parseInt(idxStr, 10);
      const q = BLOCKAGE_QUESTIONS[idx];
      const opt = q?.options.find(o => o.label === label);
      if (opt) {
        const val = opt.value;
        if (val === "heavy") score += 10;
        else if (val === "medium") score += 6;
        else if (val === "light") score += 2;
      }
    });

    const maxPoints = Object.keys(blockageAnswers).length * 10 || 100;
    const ratio = Math.min(100, Math.round((score / maxPoints) * 100));

    let title = "Berrak & Dengeli Enerji Alıcıları";
    let desc = "Bilinçaltınızda sizi sabote eden ağır kilitler bulunmuyor. Kararlarınızda genelde dengelisiniz. Bu harika potansiyeli korumak ve frekansınızı yükseltmek için Healy Biyofrekans harika bir destektir.";

    if (ratio >= 75) {
      title = "Yoğun Zihinsel & Hücresel Blokaj (Kritik)";
      desc = "Yaşadığınız kısırdöngüler, uykusuzluk, empati aşırılığı ve geçmişin derin izleri hücresel düzeyde bir tıkanıklığa işaret ediyor. Healy Rezonans Analizi, EMDR ve Regresyon terapilerimiz, üzerinizdeki bu görünmez ağırlığı çözmek için Kilis'te sizi bekliyor.";
    } else if (ratio >= 45) {
      title = "Orta Dereceli Enerji Blokajı ve Yorgunluk";
      desc = "Zaman zaman kendinizi yalnız hissetme, geçmişe takılma ve kararsızlık yaşıyorsunuz. Hücre zarı voltajınız stresten dolayı düşmüş olabilir. 1'e 1 seanslarımız frekansınızı hızla toparlayacaktır.";
    }

    return { ratio, title, desc };
  };

  const calculateQualityResult = () => {
    let scoreA = 0;
    Object.entries(qualityAnswers).forEach(([idxStr, label]) => {
      const idx = parseInt(idxStr, 10);
      const q = HEAL_QUALITY_QUESTIONS[idx];
      const opt = q?.options.find(o => o.label === label);
      if (opt && opt.score === "A") {
        scoreA++;
      }
    });

    if (scoreA >= 2) {
      return {
        rating: "%85 Yoğun Blokaj Potansiyeli",
        desc: "Geçmiş travmalar, somatik fıtık/migren sancıları ve kısırdöngü zincirleriniz hayatınızı sınırlıyor. Siz bir mu'cizesiniz ancak bu zincirleri kırma vakti geldi."
      };
    } else {
      return {
        rating: "%35 Hafif / Orta Gerilim",
        desc: "Enerjiniz genel olarak iyi durumda fakat tetiklendiğiniz anlarda zihinsel kontrolü kaybetme riski taşıyorsunuz. Koruyucu bilinçaltı rehberliği faydalı olacaktır."
      };
    }
  };

  return (
    <section id="anket" className="py-24 bg-cream-50 text-[#300C32] scroll-mt-12 relative overflow-hidden">
      {/* Visual glowing backgrounds */}
      <div className="absolute top-[35%] left-[-15%] w-[450px] h-[450px] bg-purple-100/40 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-15%] w-[450px] h-[450px] bg-[#D4AF37]/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hub Title if no active quiz, else customized progress header */}
        {!selectedQuizId ? (
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#D4AF37] uppercase bg-purple-900/5 border border-purple-900/10 px-4 py-2 rounded inline-flex items-center gap-1.5 font-bold">
              <Sparkles className="w-4 h-4 text-[#D4AF37] animate-spin-slow" />
              İNTERAKTİF FARKINDALIK VE MİZAC MERKEZİ
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple-900 leading-tight italic">
              Zihinsel Testler ve Hücresel Seans Analizi
            </h2>
            <p className="font-sans text-sm text-purple-800 leading-relaxed font-semibold">
              Kişiliğinizin mizaç analizi, bilinçaltı enerji kilitleriniz ve ilişki haritanıza dair Ayşe Erendor'un tescilli şifa metodolojilerine dayanan 4 farklı testi ücretsiz deneyimleyebilirsiniz.
            </p>
          </div>
        ) : (
          <div className="mb-8">
            <button 
              onClick={handleBackToHub}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-cream-100 border border-purple-900/10 rounded font-sans text-xs font-black uppercase text-purple-800 tracking-wider transition cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-purple-800" />
              Test Merkezine Dön
            </button>
          </div>
        )}

        {/* Directory Dashboard of Quizzes (Hub Mode) */}
        {!selectedQuizId && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12" id="quizzes-hub-cards">
            {AVAILABLE_QUIZZES.map((quiz) => {
              const IconComp = quiz.icon;
              return (
                <div
                  key={quiz.id}
                  className="bg-white rounded border border-purple-900/10 shadow-sm p-6 sm:p-8 flex flex-col justify-between hover:border-[#D4AF37]/35 hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${quiz.color}`} />
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded bg-cream-50 flex items-center justify-center border border-purple-900/5">
                        <IconComp className="w-6 h-6 text-purple-800" />
                      </div>
                      <span className="font-mono text-[9px] text-purple-500 font-bold uppercase tracking-wider bg-cream-100 px-2.5 py-1 rounded">
                        {quiz.duration}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]">
                        {quiz.tagline}
                      </span>
                      <h3 className="font-display font-black text-xl italic text-purple-950 group-hover:text-purple-800 transition-colors">
                        {quiz.title}
                      </h3>
                      <p className="font-sans text-xs text-purple-800 leading-relaxed font-semibold">
                        {quiz.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-purple-900/5 mt-6 flex items-center justify-between">
                    <span className="text-[10px] text-purple-400 font-bold uppercase tracking-wider">
                      Ucretsiz Çevrimiçi Analiz
                    </span>
                    <button
                      onClick={() => handleSelectQuiz(quiz.id)}
                      className="inline-flex items-center gap-1.5 bg-[#300C32] hover:bg-[#4A154B] text-white font-sans text-xs font-black uppercase tracking-widest px-4.5 py-2.5 rounded hover:scale-[1.03] transition-all cursor-pointer shadow"
                    >
                      Başla <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ACTIVE RUNNING STATE */}
        {selectedQuizId && (
          <div className="max-w-4xl mx-auto bg-white border border-purple-900/10 rounded p-6 sm:p-10 relative overflow-hidden shadow-md">
            {/* Ambient accent bar */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${AVAILABLE_QUIZZES.find(q=>q.id===selectedQuizId)?.color}`} />

            {!isQuizCompleted ? (
              <div>
                
                {/* 1. PERSONALITY QUIZ RUNNER (40 questions, Block rendering of 5 questions per screen) */}
                {selectedQuizId === "personality" && (
                  <div className="space-y-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div>
                        <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold block">
                          DÖRT MİZAÇ TESTİ
                        </span>
                        <h3 className="font-display font-medium text-lg text-purple-950 italic mt-0.5">
                          Mizaç Özellikleri Seçimi • Sayfa {personalityPage + 1} / 8
                        </h3>
                      </div>
                      <div className="w-full sm:w-48 bg-cream-100 rounded-full h-1.5 overflow-hidden">
                        <div 
                          className="bg-gold-500 h-full transition-all" 
                          style={{ width: `${((personalityPage + 1) / 8) * 100}%` }}
                        />
                      </div>
                    </div>

                    <p className="font-sans text-xs leading-relaxed text-purple-800 font-bold bg-cream-50 p-4 border border-purple-950/5 rounded">
                      💡 <strong>Yönerge:</strong> Her sorudan sizi en çok yansıtan <strong>yalnızca 1 adet</strong> kelime seçiniz. (Toplam 40 sorudan mizaç dağılımınız otomatik hesaplanacaktır.) 1-20 arası güçlü, 21-40 arası zayıf mizaç yönlerini barındırır.
                    </p>

                    {/* Show questions from (page*5) to (page*5 + 5) */}
                    <div className="space-y-6" id="personality-page-questions">
                      {Array.from({ length: 5 }).map((_, stepIdx) => {
                        const qIdx = personalityPage * 5 + stepIdx;
                        if (qIdx >= PERSONALITY_QUESTIONS.length) return null;
                        const q = PERSONALITY_QUESTIONS[qIdx];
                        const chosenVal = personalityAnswers[qIdx];

                        return (
                          <div key={qIdx} className="p-4 sm:p-5 rounded border border-purple-900/5 bg-cream-50/20 space-y-3">
                            <span className="font-sans text-xs font-black text-purple-650 tracking-wider">
                              Soru {qIdx + 1}
                            </span>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                              {q.options.map((opt, oIdx) => {
                                const isSelected = chosenVal === opt.label;
                                return (
                                  <button
                                    key={oIdx}
                                    onClick={() => {
                                      setPersonalityAnswers(prev => ({ ...prev, [qIdx]: opt.label }));
                                    }}
                                    className={`p-3 rounded border text-center transition-all cursor-pointer focus:outline-none flex flex-col items-center justify-center min-h-[4rem] group ${
                                      isSelected
                                        ? "bg-purple-800 text-white border-purple-900 shadow-sm"
                                        : "bg-white border-purple-900/10 text-purple-900 hover:border-[#D4AF37] hover:bg-cream-50"
                                    }`}
                                  >
                                    <span className={`text-[11px] sm:text-xs font-bold leading-tight ${isSelected ? "text-gold-200" : "text-purple-900 group-hover:text-purple-950"}`}>
                                      {opt.label}
                                    </span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="pt-6 border-t border-purple-900/5 flex items-center justify-between">
                      <button
                        onClick={() => {
                          if (personalityPage > 0) setPersonalityPage(p => p - 1);
                        }}
                        disabled={personalityPage === 0}
                        className={`font-sans text-xs font-black uppercase tracking-wider flex items-center gap-1 ${
                          personalityPage === 0 ? "text-purple-300 cursor-not-allowed" : "text-purple-800 hover:text-purple-950"
                        }`}
                      >
                        <ArrowLeft className="w-3.5 h-3.5" /> Geri Var
                      </button>

                      {personalityPage < 7 ? (
                        <button
                          onClick={() => {
                            // Check if current page questions are ticked
                            let allAnswered = true;
                            for (let i = 0; i < 5; i++) {
                              const qi = personalityPage * 5 + i;
                              if (!personalityAnswers[qi]) allAnswered = false;
                            }
                            if (!allAnswered) {
                              toast.error("Lütfen bu sayfadaki 5 sorunun her birinden birer adet seçim yapınız!");
                              return;
                            }
                            setPersonalityPage(p => p + 1);
                          }}
                          className="bg-purple-800 hover:bg-purple-900 text-white font-sans text-xs font-black uppercase tracking-widest px-6 py-3 rounded cursor-pointer transition shadow"
                        >
                          Sonraki Sayfa
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            // Verify all 40 questions are answered
                            const answeredCount = Object.keys(personalityAnswers).length;
                            if (answeredCount < 40) {
                              toast.error(`Lütfen tüm soruları yanıtlayın. Kalan eksik sorular bulunuyor. (${answeredCount}/40 yanıt)`);
                              return;
                            }
                            setIsQuizCompleted(true);
                            toast.gold("Mizaç Analiziniz Başarıyla Hesaplandı! Şifa olsun.");
                          }}
                          className="bg-[#300C32] hover:bg-[#4A154B] text-white font-sans text-xs font-black uppercase tracking-widest px-6 py-3.5 rounded cursor-pointer transition shadow-lg"
                        >
                          Mizaç Analizimi Çıkar!
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {/* 2. LOVE CHARACTER QUIZ RUNNER (10 sequential questions) */}
                {selectedQuizId === "date_love" && (
                  <div className="space-y-6">
                    <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold block">
                      İLİŞKİ & KARAKTER UYUMU TESTİ
                    </span>
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-xs text-purple-750 font-bold">
                        Soru {currentQuestionIdx + 1} / 10
                      </span>
                      <div className="w-48 bg-cream-100 rounded-full h-1">
                        <div 
                          className="bg-purple-800 h-full transition-all" 
                          style={{ width: `${((currentQuestionIdx + 1) / 10) * 100}%` }}
                        />
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-lg sm:text-xl text-purple-950 italic mt-2">
                      {DATE_LOVE_QUESTIONS[currentQuestionIdx].text}
                    </h3>

                    <div className="space-y-3 pt-3">
                      {DATE_LOVE_QUESTIONS[currentQuestionIdx].options.map((opt, oIdx) => {
                        const isSelected = loveAnswers[currentQuestionIdx] === opt.label;
                        return (
                          <button
                            key={oIdx}
                            onClick={() => {
                              setLoveAnswers(prev => ({ ...prev, [currentQuestionIdx]: opt.label }));
                            }}
                            className={`w-full text-left p-4 rounded border flex items-center gap-4 transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? "bg-cream-100 border-purple-800 text-purple-950 shadow-sm"
                                : "bg-white border-purple-900/10 text-purple-800 hover:bg-cream-50"
                            }`}
                          >
                            <span className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center border ${
                              isSelected ? "border-purple-800 bg-purple-800" : "border-purple-300 bg-transparent"
                            }`}>
                              {isSelected && <span className="w-2 h-2 rounded-full bg-white" />}
                            </span>
                            <span className="font-sans font-semibold text-xs sm:text-sm">
                              {opt.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    <div className="pt-6 border-t border-purple-900/5 flex justify-between">
                      <button
                        onClick={() => {
                          if (currentQuestionIdx > 0) setCurrentQuestionIdx(c => c - 1);
                        }}
                        disabled={currentQuestionIdx === 0}
                        className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1 ${
                          currentQuestionIdx === 0 ? "text-purple-200" : "text-purple-800"
                        }`}
                      >
                        <ArrowLeft className="w-4.5 h-4.5" /> Geri
                      </button>

                      <button
                        onClick={() => {
                          if (!loveAnswers[currentQuestionIdx]) {
                            toast.error("Lütfen bir seçeneği işaretleyin!");
                            return;
                          }
                          if (currentQuestionIdx < 9) {
                            setCurrentQuestionIdx(c => c + 1);
                          } else {
                            setIsQuizCompleted(true);
                            toast.gold("İlişki & Karakter Uyumu Profiliniz Hazır! Değerlendiriliyor...");
                          }
                        }}
                        className="bg-purple-800 hover:bg-purple-900 text-white font-sans text-xs font-black uppercase tracking-widest px-6 py-3 rounded shadow cursor-pointer"
                      >
                        {currentQuestionIdx === 9 ? "Profilimi Keşfet" : "Sıradaki"}
                      </button>
                    </div>
                  </div>
                )}

                {/* 3. SUBCONSCIOUS BLOCKAGE RUNNER (10 sequential questions) */}
                {selectedQuizId === "blockage" && (
                  <div className="space-y-6">
                    <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold block">
                      BİLİNÇALTI ENERJİ VE BLOKAJ TESPİTİ
                    </span>
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-xs text-purple-750 font-bold">
                        Soru {currentQuestionIdx + 1} / 10
                      </span>
                      <div className="w-48 bg-cream-100 rounded-full h-1">
                        <div 
                          className="bg-gold-500 h-full transition-all" 
                          style={{ width: `${((currentQuestionIdx + 1) / 10) * 100}%` }}
                        />
                      </div>
                    </div>

                    <h3 className="font-display font-medium text-lg sm:text-xl text-purple-950 italic mt-2 leading-relaxed">
                      {BLOCKAGE_QUESTIONS[currentQuestionIdx].text}
                    </h3>

                    {/* Render visual guides on specific questions to enhance experience */}
                    {currentQuestionIdx === 3 && (
                      <div className="h-32 rounded bg-gradient-to-r from-purple-700 via-magenta-700 to-amber-500 flex items-center justify-center p-4 border border-purple-900/10 text-white relative overflow-hidden my-4 shadow-sm">
                        <div className="absolute inset-0 bg-neutral-950/20 backdrop-blur-[1px]" />
                        <span className="font-serif italic font-semibold text-xs sm:text-sm text-center relative z-10 block max-w-lg">
                          Zihninizi gevşetin... Ve hemen aşağıdaki seçeneklerden hücresel düzeyde dikkatinizi ilk çeken rengi söyleyin.
                        </span>
                      </div>
                    )}
                    {currentQuestionIdx === 7 && (
                      <div className="h-32 rounded bg-radial-gradient flex items-center justify-center p-4 border border-purple-900/10 relative overflow-hidden my-4 shadow-sm bg-purple-950">
                        <div className="absolute w-24 h-24 rounded-full bg-gold-400/20 blur-xl animate-pulse" />
                        <span className="font-serif italic font-semibold text-xs sm:text-sm text-center text-white/95 relative z-10">
                          Sıcak, mistik ve derin bir manyetik girdap fırtınası canlandırın...
                        </span>
                      </div>
                    )}

                    <div className="space-y-3 pt-3">
                      {BLOCKAGE_QUESTIONS[currentQuestionIdx].options.map((opt, oIdx) => {
                        const isSelected = blockageAnswers[currentQuestionIdx] === opt.label;
                        return (
                          <button
                            key={oIdx}
                            onClick={() => {
                              setBlockageAnswers(prev => ({ ...prev, [currentQuestionIdx]: opt.label }));
                            }}
                            className={`w-full text-left p-4 rounded border flex items-center gap-4 transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? "bg-cream-100 border-[#D4AF37] text-purple-950 shadow-sm"
                                : "bg-white border-purple-900/10 text-purple-800 hover:bg-cream-50"
                            }`}
                          >
                            <span className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center border ${
                              isSelected ? "border-[#D4AF37] bg-gold-500" : "border-purple-300 bg-transparent"
                            }`}>
                              {isSelected && <span className="w-2 h-2 rounded-full bg-white" />}
                            </span>
                            <span className="font-sans font-semibold text-xs sm:text-sm">
                              {opt.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    <div className="pt-6 border-t border-purple-900/5 flex justify-between">
                      <button
                        onClick={() => {
                          if (currentQuestionIdx > 0) setCurrentQuestionIdx(c => c - 1);
                        }}
                        disabled={currentQuestionIdx === 0}
                        className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1 ${
                          currentQuestionIdx === 0 ? "text-purple-200" : "text-purple-800"
                        }`}
                      >
                        <ArrowLeft className="w-4.5 h-4.5" /> Geri
                      </button>

                      <button
                        onClick={() => {
                          if (!blockageAnswers[currentQuestionIdx]) {
                            toast.error("Lütfen bir seçeneği işaretleyin!");
                            return;
                          }
                          if (currentQuestionIdx < 9) {
                            setCurrentQuestionIdx(c => c + 1);
                          } else {
                            setIsQuizCompleted(true);
                            toast.gold("Bilinçaltı Blokaj Analiziniz Başarıyla Hazırlandı!");
                          }
                        }}
                        className="bg-[#300C32] hover:bg-[#4A154B] text-white font-sans text-xs font-black uppercase tracking-widest px-6 py-3 rounded shadow cursor-pointer"
                      >
                        {currentQuestionIdx === 9 ? "Enerjimi Ölç" : "Sıradaki"}
                      </button>
                    </div>
                  </div>
                )}

                {/* 4. HEALTH INTRUSIONS QUALITY SURVEY (3 sequential questions) */}
                {selectedQuizId === "quality_life" && (
                  <div className="space-y-6">
                    <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold block">
                      FARKINDALIK VE BÜTÜNSEL YAŞAM TARAMASI
                    </span>
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-xs text-purple-750 font-bold">
                        Soru {currentQuestionIdx + 1} / 3
                      </span>
                      <div className="w-48 bg-cream-100 rounded-full h-1">
                        <div 
                          className="bg-gold-500 h-full transition-all" 
                          style={{ width: `${((currentQuestionIdx + 1) / 3) * 100}%` }}
                        />
                      </div>
                    </div>

                    <h3 className="font-display font-medium text-lg sm:text-xl text-purple-950 italic mt-2">
                      {HEAL_QUALITY_QUESTIONS[currentQuestionIdx].text}
                    </h3>

                    <div className="space-y-3 pt-3">
                      {HEAL_QUALITY_QUESTIONS[currentQuestionIdx].options.map((opt, oIdx) => {
                        const isSelected = qualityAnswers[currentQuestionIdx] === opt.label;
                        return (
                          <button
                            key={oIdx}
                            onClick={() => {
                              setQualityAnswers(prev => ({ ...prev, [currentQuestionIdx]: opt.label }));
                            }}
                            className={`w-full text-left p-4 sm:p-5 rounded border flex items-center gap-4 transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? "bg-cream-100 border-gold-500 text-purple-950 shadow-sm"
                                : "bg-cream-50/50 border-purple-900/5 text-purple-800 hover:bg-cream-100"
                            }`}
                          >
                            <span className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center border ${
                              isSelected ? "border-gold-500 bg-gold-400" : "border-purple-300 bg-transparent"
                            }`}>
                              {isSelected && <span className="w-2 h-2 rounded-full bg-white" />}
                            </span>
                            <span className="font-sans font-semibold text-xs sm:text-sm">
                              {opt.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    <div className="pt-6 border-t border-purple-900/5 flex justify-between">
                      <button
                        onClick={() => {
                          if (currentQuestionIdx > 0) setCurrentQuestionIdx(c => c - 1);
                        }}
                        disabled={currentQuestionIdx === 0}
                        className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1 ${
                          currentQuestionIdx === 0 ? "text-purple-200 animate-none" : "text-purple-800"
                        }`}
                      >
                        <ArrowLeft className="w-4.5 h-4.5" /> Geri
                      </button>

                      <button
                        onClick={() => {
                          if (!qualityAnswers[currentQuestionIdx]) {
                            toast.error("Lütfen bir seçeneği işaretleyin!");
                            return;
                          }
                          if (currentQuestionIdx < 2) {
                            setCurrentQuestionIdx(c => c + 1);
                          } else {
                            setIsQuizCompleted(true);
                            toast.gold("Bütünsel Yaşam & Frekans Analiziniz Hazır!");
                          }
                        }}
                        className="bg-purple-800 hover:bg-purple-900 text-white font-sans text-xs font-black uppercase tracking-widest px-6 py-3 rounded shadow cursor-pointer"
                      >
                        {currentQuestionIdx === 2 ? "Analiz Et" : "Sıradaki"}
                      </button>
                    </div>
                  </div>
                )}

              </div>
            ) : (
              /* RESULTS VIEWS */
              <div className="space-y-8 animate-fade-in text-[#300C32]" id="survey-result-outputs">
                
                {/* 1. PERSONALITY REPORT OUTLINE */}
                {selectedQuizId === "personality" && (() => {
                  const r = calculatePersonalityResult();
                  return (
                    <div className="space-y-6">
                      <div className="text-center space-y-2">
                        <span className="bg-amber-400/10 text-amber-600 px-3 py-1 border border-amber-500/20 text-[10px] tracking-widest font-mono font-bold uppercase rounded-full inline-block">
                          MİZAC PROFIL DENGE RAPORUNUZ
                        </span>
                        <h3 className="font-display font-black text-2xl sm:text-3xl text-purple-950 italic">
                          Baskın Karakteriniz: {r.dominant}
                        </h3>
                      </div>

                      {/* Custom stunning responsive vectors charts bar */}
                      <div className="bg-cream-50 p-6 rounded border border-purple-900/5 space-y-4">
                        <span className="block font-sans text-[11px] font-extrabold uppercase text-purple-550">
                          Mizaç Özellikleri Oransal Dağılım Grafiği
                        </span>

                        <div className="space-y-4">
                          {[
                            { label: "Canlı / Sosyal (Popüler Neşeli)", share: r.shares.sanguine, color: "bg-amber-500" },
                            { label: "Lider / Kararlı (Güçlü Kararlı)", share: r.shares.choleric, color: "bg-red-500" },
                            { label: "Analitik / Derin (Mükemmeliyetçi)", share: r.shares.melancholic, color: "bg-purple-800" },
                            { label: "Sakin / Uyumlu (Barışçıl Uyumlu)", share: r.shares.phlegmatic, color: "bg-teal-600" }
                          ].map((b, idx)=> (
                            <div key={idx} className="space-y-1.5">
                              <div className="flex justify-between items-center text-xs font-semibold text-purple-900">
                                <span>{b.label}</span>
                                <span>%{b.share}</span>
                              </div>
                              <div className="h-3 bg-cream-200/60 rounded-full overflow-hidden w-full border border-purple-900/5">
                                <div className={`h-full ${b.color} rounded-full transition-all duration-1000`} style={{ width: `${b.share}%` }} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="prose prose-purple max-w-none text-center sm:text-left font-sans text-xs sm:text-sm text-purple-805 leading-relaxed bg-neutral-900/5 p-6 rounded border border-purple-900/10">
                        <p className="font-bold underline text-purple-950">Ayşe Erendor'dan Karakter Yorumu:</p>
                        <p className="font-medium mt-2 italic">
                          "{r.desc}"
                        </p>
                        <p className="font-bold text-xs text-purple-700 mt-4 leading-relaxed">
                          📌 Yaşadığınız her kişilik tipi aslında birer potansiyel güçtür. Ancak dengelenemeyen aşırılıklar tıkanıklık yaratır. Bu analizle seanslarımızda rezonansınızı zirveye çıkarıyoruz.
                        </p>
                      </div>

                      {/* Action buttons */}
                      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-2">
                        <a
                          href={`https://wa.me/905421994079?text=${encodeURIComponent(
                            `Merhaba Ayşe Hanım, web sitenizdeki 'Dört Mizaç & Kişilik Testi'ni çözdüm.\nSonuçlarım:\n- Baskın Mizaç: ${r.dominant}\n- Popüler Neşeli: %${r.shares.sanguine}\n- Güçlü Kararlı: %${r.shares.choleric}\n- Mükemmeliyetçi: %${r.shares.melancholic}\n- Barışçıl Uyumlu: %${r.shares.phlegmatic}\n\nBu mizaç dağılımım ve bilinçaltımdaki kilitler üzerine profesyonel bir seans görüşmesi yapmak istiyorum.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 w-full flex items-center justify-center gap-2 bg-[#300C32] hover:bg-[#4A154B] text-white font-sans font-bold text-xs uppercase tracking-widest py-4 rounded shadow transition-all"
                        >
                          <MessageSquareHeart className="w-4 h-4 fill-current text-gold-400" />
                          Mizaç Raporunu WhatsApp ile İlet & Seans Al
                        </a>
                        <button
                          onClick={handleBackToHub}
                          className="px-6 py-4 rounded border border-purple-900/15 text-xs text-purple-800 hover:text-purple-900 hover:bg-purple-900/5 font-bold uppercase transition"
                        >
                          Diğer Testleri Çöz
                        </button>
                      </div>
                    </div>
                  );
                })()}

                {/* 2. LOVE REPORT OUTSIDE */}
                {selectedQuizId === "date_love" && (() => {
                  const love = calculateLoveResult();
                  return (
                    <div className="space-y-6">
                      <div className="text-center space-y-2">
                        <div className="w-14 h-14 rounded-full bg-rose-50 flex items-center justify-center mx-auto border border-rose-100">
                          <Heart className="w-7 h-7 text-rose-500 fill-current" />
                        </div>
                        <span className="text-[10px] tracking-widest uppercase font-bold text-rose-500 block">
                          İLİŞKİ UYUM PROFILİNİZ
                        </span>
                        <h3 className="font-display font-extrabold text-2xl text-purple-950 italic">
                          {love.title}
                        </h3>
                      </div>

                      <div className="bg-cream-50 p-6 rounded border border-purple-950/5 leading-relaxed font-sans text-xs sm:text-sm text-purple-900 text-center sm:text-left space-y-3">
                        <p className="font-bold underline text-purple-950">Detaylı Duygusal Kod Analizi:</p>
                        <p className="font-medium italic leading-relaxed text-purple-800">
                          "{love.desc}"
                        </p>
                        <p className="font-semibold text-[11px] text-purple-600 mt-2 bg-white p-3 rounded border border-purple-900/5">
                          💖 İkili ilişkiler, bizim bilinçaltımızdaki anne-baba kalıplarının ve çocukluk kilitlerinin birer aynasıdır. Sürekli aynı kısırdöngülere çarpmamak için soy ağacı analizi ve aile danışmanlığı ile bu bağı çözebiliriz.
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                          href={`https://wa.me/905421994079?text=${encodeURIComponent(
                            `Merhaba Ayşe Hanım, web sitenizdeki 'İlişki & Karakter Gelişim Testi'ni çözdüm. Çıkan ilişki profilim: '${love.title}'. İlişkilerimdeki kısırdöngüleri kırmak adına seans seçecekleriniz hakkında detaylı bilgi almak istiyorum.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 w-full flex items-center justify-center gap-2 bg-[#300C32] hover:bg-[#4A154B] text-white font-sans text-xs font-bold uppercase tracking-widest py-4 rounded shadow"
                        >
                          <MessageSquareHeart className="w-4 h-4 text-gold-450 fill-current" />
                          Raporu WhatsApp ile Ayşe Erendor'a Gönder
                        </a>
                        <button
                          onClick={handleBackToHub}
                          className="px-6 py-4 rounded border border-purple-900/10 text-xs font-bold text-purple-800"
                        >
                          Test Hub'a Dön
                        </button>
                      </div>
                    </div>
                  );
                })()}

                {/* 3. BLOCKAGE SCORE REPORT */}
                {selectedQuizId === "blockage" && (() => {
                  const bl = calculateBlockageResult();
                  return (
                    <div className="space-y-6">
                      <div className="text-center space-y-2">
                        <div className="w-14 h-14 rounded-full bg-indigo-50 flex items-center justify-center mx-auto border border-indigo-100">
                          <Brain className="w-7 h-7 text-indigo-600" />
                        </div>
                        <span className="text-[10px] tracking-widest uppercase font-mono font-bold text-indigo-600 block">
                          BİLİNÇALTI ENERJİ DENGE DURUMU
                        </span>
                        <h3 className="font-display font-black text-2xl text-purple-950 italic">
                          Blokaj Derecesi: %{bl.ratio}
                        </h3>
                      </div>

                      {/* Animated radial mockup block */}
                      <div className="flex flex-col items-center justify-center py-4 space-y-3">
                        <div className="relative w-36 h-36 flex items-center justify-center rounded-full bg-cream-50 border border-purple-900/10 shadow-inner">
                          {/* Snail dial visualizer */}
                          <svg className="w-full h-full transform -rotate-95 flex-shrink-0" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="40" stroke="#f3f4f6" strokeWidth="8" fill="transparent" />
                            <circle cx="50" cy="50" r="40" stroke={bl.ratio >= 75 ? "#dc2626" : bl.ratio >= 45 ? "#eab308" : "#0d9488"} strokeWidth="8" fill="transparent" strokeDasharray="251.2" strokeDashoffset={251.2 - (251.2 * bl.ratio) / 100} strokeLinecap="round" />
                          </svg>
                          <div className="absolute flex flex-col items-center justify-center space-y-0.5">
                            <span className="font-display font-black text-2xl sm:text-3.5xl text-purple-950">
                              %{bl.ratio}
                            </span>
                            <span className="font-sans text-[8px] text-purple-500 uppercase tracking-wider font-extrabold text-center block leading-none">
                              Tıkanıklık Oranı
                            </span>
                          </div>
                        </div>
                        <span className="font-serif font-bold text-center text-sm text-purple-950 uppercase tracking-wide">
                          {bl.title}
                        </span>
                      </div>

                      <div className="bg-cream-50 p-6 rounded border border-purple-900/5 leading-relaxed font-sans text-xs sm:text-sm text-purple-800 text-center sm:text-left space-y-3">
                        <p className="font-bold underline text-purple-950">Bütünsel Şifa Öngörüsü:</p>
                        <p className="font-medium italic leading-relaxed text-purple-900">
                          "{bl.desc}"
                        </p>
                        <p className="font-bold text-[11px] text-indigo-705 mt-2 flex items-center gap-1.5 justify-center bg-white p-2.5 rounded border border-indigo-400/10">
                          <Zap className="w-4 h-4 text-amber-500 animate-pulse flex-shrink-0" />
                          Healy biyofrekans uyarımı ve regresyon tekniklerimizle hücresel blokajınızı hızla tahliye edebilirsiniz.
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                          href={`https://wa.me/905421994079?text=${encodeURIComponent(
                            `Merhaba Ayşe Hanım, web sitenizdeki 'Bilinçaltı Blokaj & Enerji Testi'ni çözdim. Çıkan rezonans sonucum:\n- Blokaj Derecesi: %${bl.ratio}\n- Durum: ${bl.title}\n\nHücresel frekans dengeleme ve kilit tashihi seanslarınız için randevu almak istiyorum.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 w-full flex items-center justify-center gap-2 bg-[#300C32] hover:bg-[#4A154B] text-white font-sans text-xs font-bold uppercase tracking-widest py-4 rounded shadow-lg"
                        >
                          <MessageSquareHeart className="w-4 h-4 text-gold-400 fill-current" />
                          WhatsApp ile Detaylı Rezonans Analizi Talep Et
                        </a>
                        <button
                          onClick={handleBackToHub}
                          className="px-6 py-4 rounded border border-purple-900/10 text-xs font-bold text-purple-800"
                        >
                          Hub Ekranına Dön
                        </button>
                      </div>
                    </div>
                  );
                })()}

                {/* 4. GENERAL WELLNESS REVIEWS LIST */}
                {selectedQuizId === "quality_life" && (() => {
                  const ql = calculateQualityResult();
                  return (
                    <div className="space-y-6">
                      <div className="text-center space-y-2">
                        <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center mx-auto border border-amber-100">
                          <Award className="w-7 h-7 text-amber-600" />
                        </div>
                        <span className="text-[10px] tracking-widest uppercase font-bold text-[#D4AF37] block">
                          YAŞAM KALİTESİ TARAMA RAPORUNUZ
                        </span>
                        <h3 className="font-display font-medium text-xl sm:text-2xl text-purple-950 italic">
                          Gösterge: {ql.rating}
                        </h3>
                      </div>

                      <div className="bg-cream-50 p-6 sm:p-8 rounded border border-purple-900/5 space-y-4 text-center sm:text-left leading-relaxed text-xs sm:text-sm text-purple-905">
                        <p className="font-bold underline text-purple-950">Seans Tavsiyesi ve Analizi:</p>
                        <p className="italic font-medium leading-relaxed">
                          "{ql.desc}"
                        </p>
                        <p className="font-sans text-[11px] font-bold text-gold-700 bg-white p-3.5 rounded border border-[#D4AF37]/15">
                          📣 <strong>"İmkânsız kelimesi dahi imkân'dan oluşuyorsa, her şey mümkün."</strong> Kaderinizi bizzat kendiniz, hücresel bilincinizi değiştirip biyolojik ve ruhsal kısırdöngüleri kırarak baştan yazabilirsiniz.
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-2">
                        <a
                          href="https://wa.me/905421994079?text=Merhaba%20Ay%C5%9Fe%20Han%C4%B1m,%20web%20sitenizdeki%20%27H%C4%B1zl%C4%B1%20Ya%C5%9Fam%20Kalitesi%20Taramas%C4%B1%27n%C4%B1%20%C3%A7%C3%B6zd%C3%BCm.%20Sonu%C3%A7lar%C4%B1m%C4%B1n%20analizi%20ve%252B%C5%9Fifa%20teknikleri%20%C3%BCzerine%20sizden%20randevu%20talep%20ediyorum."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 w-full flex items-center justify-center gap-2 bg-[#300C32] hover:bg-[#4A154B] text-white font-sans font-semibold text-xs uppercase tracking-widest py-4 rounded shadow-lg"
                        >
                          <MessageSquareHeart className="w-4 h-4 text-gold-400 fill-current" />
                          whatsapp ile Sonucu Gönder & Görüşme Planla
                        </a>
                        <button
                          onClick={handleBackToHub}
                          className="px-6 py-4 rounded border border-purple-900/10 text-xs font-bold text-purple-800"
                        >
                          Kapat
                        </button>
                      </div>
                    </div>
                  );
                })()}

              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
