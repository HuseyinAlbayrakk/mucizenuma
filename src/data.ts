/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BlogPost, Feedback, QuizQuestion, SolutionItem } from "./types";

export const initialBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Zihnin Karanlık Odasından Çıkış: EMDR ve Regresyon",
    slug: "zihnin-karanlik-odasindan-cikis-emdr-regresyon",
    category: "Bilinçaltı Teknikleri",
    summary: "Geçmişin derin izlerini silip zihinsel işletim sisteminizi baştan yazmak mümkün mü? Kilis'te tek yetkili uygulayıcısı olduğum tekniklerle kilitleri açıyoruz.",
    content: `İnsan zihni, yaşadığımız her şeyi kaydeden devasa bir kütüphaneye benzer. Ancak bazı deneyimler, özellikle travmalar, kayıplar ya da derin sarsıntılar, bu kütüphanede düzgünce tasnif edilemeden 'ham' haliyle kalır. İşte EMDR (Göz Hareketleriyle Duyarsızlaştırma ve Yeniden Yapılandırma) ve Regresyon terapisi tam da bu noktada devreye giren en güçlü zihinsel dönüşüm anahtarlarıdır.

Kilis'te tek yetkili uzmanı olarak uyguladığım bu özel metotlarla, geçmişte yaşanmış ve hayatınızı kilitleyen düğümleri çözüme kavuşturuyoruz. EMDR, beynin sağ ve sol yarımkürelerini uyararak sıkışıp kalmış duyguları işler ve onları nötr birer anıya dönüştürür. 

Eğer siz de deprem korkusu, araba/uçak fobisi ya da açıklanamayan anksiyete atakları yaşıyorsanız, bilin ki bu acılar kaderiniz değil. Zihninizin karanlık odalarındaki kilitleri aşarak, tescilli bütüncül şifa metodolojilerimizle hayatınızı en üst profesyonellik seviyesinde yeniden inşa edebilirsiniz.`,
    date: "11 Haziran 2026",
    readTime: "4 dk okuma"
  },
  {
    id: "2",
    title: "Hücresel Denge ve Enerji Alanları: Healy Biyofrekans Teknolojisi",
    slug: "hucresel-denge-biyofrekans-healy-teknolojisi",
    category: "Biyofrekans",
    summary: "Avrupa Birliği onaylı Healy teknolojisiyle ağrılardan migrene, uykusuzluktan anksiyeteye kadar tüm enerji tıkanıklıklarını dengeliyoruz.",
    content: `Evrendeki her şey, bizler de dahil olmak üzere belirli bir frekansta titreşir. Sağlıklı bir hücrenin belirli bir elektriksel potansiyeli vardır ve stres, hastalık, toksinler bu potansiyeli düşürür. Healy Rezonans Analizi, tam olarak bu hücresel titreşimi okuyan ve düzene koyan geleceğin tıp ve şifa teknolojisidir.

mucize nüma bünyesinde sunduğumuz Healy seanslarında, enerji alanınızı en ince detayına kadar analiz ediyoruz. Hücre zarınızın biyolojik gerilimini dengeleyerek; kronik ağrılar, migren atakları, uyku bozuklukları, fibromiyalji ve geçmeyen anksiyete gibi durumlarda derin bir gevşeme yaşamanızı sağlıyoruz.

Bedeninizdeki blokajları çözmek sadece yüzeysel bir rahatlama değil; bütüncül bir uyanış ve dengeli bir enerji akışı demektir. Healy ile siz de frekansınızı yükseltin ve zihninizin bedeninize fısıldadığı o iyileşme sesine kulak verin.`,
    date: "10 Haziran 2026",
    readTime: "5 dk okuma"
  },
  {
    id: "3",
    title: "Nesiller Boyu Aktarılan Aile Mirası ve Görünmez Bağlar",
    slug: "nesiller-boyu-aktarilan-aile-mirasi-gorumnez-baglar",
    category: "Aile Danışmanlığı",
    summary: "İlişkilerinizdeki veya sosyal hayatınızdaki kısırdöngülerin sebebi sizden nesiller önce yaşamış bir atanızın hikayesi olabilir mi?",
    content: `Hayatınızda sürekli aynı insanlarla, benzer hüsran verici senaryoları yaşadığınızı fark ettiniz mi? 'Neden hep aynı haksızlığa uğruyorum?' ya da 'Parayı kazanıyorum ama elimde tutamıyorum' diyorsanız, kilit aslında tamamen soy ağacınızda saklı olabilir.

Aile ve Sosyal Yaşam Danışmanlığı perspektifinden baktığımızda, bizler sadece genetik kodları değil; atalarımızın tamamlanmamış yaslarını, haksızlıklarını, sırlarını ve göç hikayelerini de birer duygusal miras olarak devralırız. Farkında olmadan sadakatle taşıdığımız bu görünmez bağlar, hayatımızı sınırlar ve bizi gölge hücreler içerisine hapseder.

mu'cize nüma'da, özel soy ağacı analiz metodolojimle sizi aşağı çeken bu geçmiş zincirlerini tespit ediyor ve sevgiyle serbest bırakıyoruz. Kendi hayatınızın mimarı olmak ve bu görünmez kısırdöngüleri kırmak için cesur bir adım atma zamanı gelmedi mi?`,
    date: "08 Haziran 2026",
    readTime: "4 dk okuma"
  },
  {
    id: "4",
    title: "Zihinsel Kilolara Elveda: Fazlalıkların Arkasındaki Duygusal Yükler",
    slug: "zihinsel-kilolara-elveda-duygusal-yukler",
    category: "Dönüşüm Atölyeleri",
    summary: "Bedeninizdeki kilolar aslında koruma kalkanınız mı? 'Kilolara Elveda' Atölyemizde duygusal açlığı ve kiloya sebep olan zihinsel blokajları yıkıyoruz.",
    content: `Kilo problemi sadece yediklerimizle ya da hareket miktarımızla ilgili değildir. Çoğu zaman taşımakta olduğumuz fiziksel ağırlıklar, ruhsal olarak üstlendiğimiz duygusal yüklerin bedensel birer projeksiyonudur. Bedenimiz öfkeyi, değersizlik hissini, maruz kalınan sınır ihlallerini koruma amaçlı olarak 'yağ kalkanı' şeklinde depolayabilir.

Yoğun ilgi gören 'Kilolara Elveda' Atölyemizde, tam olarak bu zihinsel blokajların kökenine iniyoruz. Bütüncül Şifa Tekniğimizi toplu seanslar ile entegre ederek, bedeninizi savunma modundan çıkarıyor ve kendisini güvende hissetmesini sağlıyoruz.

Duygusal açlığınızı yenmek, hayatınızdaki değersizlik duygusunu bırakmak ve hafiflemek için bedeninize değil, önce zihninize dokunmanız gerekir. Şunu asla unutmayın: 'İmkânsız kelimesi dahi imkân'dan oluşuyorsa, her şey mümkün.'`,
    date: "05 Haziran 2026",
    readTime: "3 dk okuma"
  }
];

export const feedbackList: Feedback[] = [
  {
    id: "f1",
    client: "A. K.",
    type: "Bireysel",
    tag: "Evlilik ve İlişki Dönüşümü",
    text: "Yıllardır eşimle aşamadığımız, sürekli tekrar eden kısırdöngülerimiz vardı. Ayşe Hanım’ın bizzat tasarladığı seans teknikleri sayesinde evliliğimizde kör noktalarımızı fark ettik. Hayatımızın dönüm noktası oldu."
  },
  {
    id: "f2",
    client: "M. Y.",
    type: "Bireysel",
    tag: "EMDR ve Korku Seansı",
    text: "Kilis’te EMDR uzmanı ararken Ayşe Hanım ile yollarımız kesişti. Geçmişten gelen ve bugünkü hayatımı kilitleyen deprem korkumu, onun profesyonel ve derin yaklaşımıyla tamamen geride bıraktım. Artık çok daha özgürüm."
  },
  {
    id: "f3",
    client: "S. B.",
    type: "Bireysel",
    tag: "Healy Biyofrekans & Sağlık Desteği",
    text: "Açıklanamayan kronik ağrılarım ve uyku bozukluklarım nedeniyle hayat kalitem çok düşmüştü. Healy rezonans analizi ve frekans dengeleme süreciyle vücudumun yeniden hafiflediğini ve dengelendiğini hissettim."
  },
  {
    id: "f4",
    client: "Atölye Katılımcısı",
    type: "Toplu",
    tag: "Kilolara Elvedâ Atölyesi",
    text: "Sadece kilo vermedim; kilo almama sebep olan o derin duygusal yükleri, değersizlik hissini bu atölyede bıraktım. Bütüncül Şifa Tekniği ile yapılan toplu seansların enerjisi gerçekten inanılmazdı."
  },
  {
    id: "f5",
    client: "Kolektif Seans Katılımcısı",
    type: "Toplu",
    tag: "Toplu Hipnoz ve Meditasyon",
    text: "İlk kez toplu bir hipnoz ve meditasyon çalışmasına katıldım. Grubun enerjisi ve Ayşe Hanım’ın ses tonu, rehberliği ruhumdaki tüm düğümleri tek tek çözdü. Seans bittiğinde üzerimden dev bir yük kalkmış gibi hissettim."
  }
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    text: "Hayatınızda sürekli benzer senaryoları, benzer insanlarla tekrar tekrar yaşadığınızı hissediyor musunuz?",
    options: [
      { label: "Evet, sanki hiçbir şekilde aşamadığım bir kısırdöngünün içindeyim.", score: "A" },
      { label: "Bazen buna benzer olaylar yaşıyorum, ama bir şekilde çözebiliyorum.", score: "B" },
      { label: "Bilakis hayır, yaşamıma dair döngülerimi yönetebiliyorum.", score: "C" }
    ]
  },
  {
    id: 2,
    text: "Geçmişte yaşadığınız olumsuz bir deneyim, travma veya korku bugünkü kararlarınızı ve huzurunuzu etkiliyor mu?",
    options: [
      { label: "Evet, geçmişin o ağır yüklerini taşımaktan son derece yoruldum.", score: "A" },
      { label: "Sadece tetiklendiğim özel anlarda veya rüyalarımda etkileniyorum.", score: "B" },
      { label: "Hayır, geçmiş benim için geçmişte kaldı ve etkilemiyor.", score: "C" }
    ]
  },
  {
    id: 3,
    text: "Bedeninizde geçmeyen fiziksel ağrılar (migren, kronik yorgunluk, uyku bozukluğu) veya duygusal olarak 'tükenmişlik' hissediyor musunuz?",
    options: [
      { label: "Evet, her sabah bu tarifsiz ağırlıkla uyanıyorum.", score: "A" },
      { label: "Dönem dönem yoğun stres altında ve sıkışmış hissedebiliyorum.", score: "B" },
      { label: "Hayır, bedenim ve enerjim oldukça zinde ve dengelidir.", score: "C" }
    ]
  }
];

export const solutionCategories: SolutionItem[] = [
  {
    id: "sol1",
    category: "Ruhsal ve Zihinsel Kilitler",
    title: "Bilinçaltı ve Zihinsel Kilitler",
    items: [
      "Depresyon ve Sürekli Mutsuzluk",
      "Anksiyete ve Aşırı Kaygı Atakları",
      "OKB (Kökleşmiş Takıntılar)",
      "Öfke Kontrolü ve Tahammül Sınırları",
      "Uyku Bozuklukları ve Kabuslar",
      "Dikkat Eksikliği ve Odaklanma Sorunu"
    ]
  },
  {
    id: "sol2",
    category: "İlişki ve Kalp Yaraları",
    title: "İlişki ve Kalp Yaraları",
    items: [
      "Geçmeyen Aşk Acısı ve Bağımlılıklar",
      "Aldatılma / Aldatma Travması",
      "Aşırı Kıskançlık ve Güven Sorunu",
      "İletişim Kopuklukları ve Uzaklaşma",
      "Evlilik Krizleri ve Çatışmalar",
      "Vajinismus (İlk Gece Korkusu) ve Cinsel Sorunlar"
    ]
  },
  {
    id: "sol3",
    category: "Görünmez Hücreler (Korkular)",
    title: "Derin Korkular ve Fobiler",
    items: [
      "Deprem Korkusu ve Doğal Afet Travması",
      "Ölüm, Yalnızlık ve Kaybetme Kaygısı",
      "Araba Kullanma, Uçak, Yükseklik Fobisi",
      "Kapalı Alan (Klostrofobi) ve Karanlık Korkusu",
      "Toplum Önünde Konuşma ve Sosyal Fobi",
      "Asansör, Evcil Hayvan Korkuları ve Tüm Diğer Fobiler"
    ]
  },
  {
    id: "sol4",
    category: "Bedendeki Blokajlar (Destekleyici)",
    title: "Beden Blokajları ve Somatik Şifa",
    items: [
      "Duygusal Yemeye Bağlı Kilo Problemleri",
      "Kronik Migren ve Baş Ağrıları",
      "Alerjiler ve Strese Bağlı Astım",
      "Fibromiyalji ve Yaygın Vücut Ağrıları",
      "Geçmeyen Eklem, Sırt ve Kas Ağrıları",
      "Psikosomatik Cilt Hastalıkları (Sedef, Egzem vb.)",
      "İstemsiz Kas Kasılmaları ve Tikler"
    ]
  },
  {
    id: "sol5",
    category: "Potansiyel Engelleri",
    title: "Gelişim ve İfade Engelleri",
    items: [
      "LGS/YKS Sınav Stresi ve Sınav Kaygısı",
      "Tükenmişlik Sendromu ve İsteksizlik",
      "Kökleşmiş Değersizlik ve Sevgisizlik Hissi",
      "Kendini Doğru İfade Edememe Çaresizliği",
      "Özgüven Eksikliği ve Kendini Yetersiz Bulma",
      "Çözülemeyen Suçluluk ve Kendini Cezalandırma Duygusu"
    ]
  }
];
