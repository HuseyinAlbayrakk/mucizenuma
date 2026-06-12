/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { useToast } from "./Toast";
import { BookOpen, Key, Plus, Trash2, Edit3, X, Save, Clock, ArrowRight, Eye, AlertCircle } from "lucide-react";
import { initialBlogPosts } from "../data";
import { BlogPost } from "../types";

export default function Blog() {
  const toast = useToast();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  
  // Admin Panel states
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [pinError, setPinError] = useState("");
  
  // Create / Edit states
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [formTitle, setFormTitle] = useState("");
  const [formCategory, setFormCategory] = useState("");
  const [formSummary, setFormSummary] = useState("");
  const [formContent, setFormContent] = useState("");
  const [formReadTime, setFormReadTime] = useState("");

  // Load from LocalStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("mucizenuma_blog_posts");
    if (saved) {
      try {
        setPosts(JSON.parse(saved));
      } catch (e) {
        setPosts(initialBlogPosts);
      }
    } else {
      setPosts(initialBlogPosts);
      localStorage.setItem("mucizenuma_blog_posts", JSON.stringify(initialBlogPosts));
    }
  }, []);

  useEffect(() => {
    if (isFormOpen || isLoginModalOpen || selectedPost) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isFormOpen, isLoginModalOpen, selectedPost]);

  const saveToStorage = (newPosts: BlogPost[]) => {
    setPosts(newPosts);
    localStorage.setItem("mucizenuma_blog_posts", JSON.stringify(newPosts));
  };

  // Secure Panel Access
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput.toLowerCase() === "4079" || pinInput.toLowerCase() === "mucizenuma") {
      setIsAdminMode(true);
      setIsLoginModalOpen(false);
      setPinInput("");
      setPinError("");
      toast.gold("Yönetici girişi başarılı! Panel aktifleşti.");
    } else {
      setPinError("Hatalı Giriş Şifresi! Lütfen tekrar deneyin.");
      toast.error("Giriş başarısız! Yetkisiz şifre denemesi.");
    }
  };

  const handleOpenAddForm = () => {
    setEditingPost(null);
    setFormTitle("");
    setFormCategory("Bilinçaltı");
    setFormSummary("");
    setFormContent("");
    setFormReadTime("4 dk okuma");
    setIsFormOpen(true);
  };

  const handleOpenEditForm = (post: BlogPost) => {
    setEditingPost(post);
    setFormTitle(post.title);
    setFormCategory(post.category);
    setFormSummary(post.summary);
    setFormContent(post.content);
    setFormReadTime(post.readTime);
    setIsFormOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle || !formContent) {
      toast.error("Lütfen başlık ve içerik alanlarını doldurun!");
      return;
    }

    if (editingPost) {
      // Edit
      const updated = posts.map((p) =>
        p.id === editingPost.id
          ? {
              ...p,
              title: formTitle,
              category: formCategory,
              summary: formSummary,
              content: formContent,
              readTime: formReadTime,
            }
          : p
      );
      saveToStorage(updated);
      toast.gold("Makale başarıyla güncellendi!");
    } else {
      // Add
      const newPost: BlogPost = {
        id: String(Date.now()),
        title: formTitle,
        slug: formTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        category: formCategory,
        summary: formSummary,
        content: formContent,
        readTime: formReadTime,
        date: new Date().toLocaleDateString("tr-TR", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
      };
      saveToStorage([newPost, ...posts]);
      toast.gold("Yeni makale başarıyla eklendi!");
    }

    setIsFormOpen(false);
    setEditingPost(null);
  };

  const handleDeletePost = (id: string) => {
    if (window.confirm("Bu makaleyi silmek istediğinize emin misiniz?")) {
      const filtered = posts.filter((p) => p.id !== id);
      saveToStorage(filtered);
      toast.error("Makale başarıyla silindi!");
    }
  };

  return (
    <section id="blog" className="py-24 bg-cream-50 scroll-mt-12 text-[#300C32] relative overflow-hidden">
      {/* Visual glowing elements */}
      <div className="absolute top-[25%] right-[10%] w-[350px] h-[350px] bg-purple-100/40 rounded-full blur-[105px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] bg-gold-100/10 rounded-full blur-[105px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Blog Header with Quick Toggle Admin button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 text-left max-w-2xl">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-gold-600 uppercase block">
              UYANIKLIK & FARKINDALIK YAZILARI
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#300C32] tracking-tight italic">
              mu'cize nüma Blog
            </h2>
            <p className="font-sans text-sm text-purple-800 leading-relaxed font-semibold">
              Zihninizdeki zincirleri kıracak, rasyonel bilimle bilinçaltının dilini birleştirecek derinlikte motivasyon ve öz farkındalık makalelerini sizler için kaleme alıyorum.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {isAdminMode ? (
              <div className="flex items-center gap-3">
                <button
                  onClick={handleOpenAddForm}
                  className="flex items-center justify-center gap-2 bg-purple-800 hover:bg-purple-900 text-white font-sans text-xs font-bold uppercase tracking-widest px-5 py-3 rounded shadow hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                  id="admin-add-post-btn"
                >
                  <Plus className="w-4 h-4 text-gold-400" />
                  Yeni Makale Ekle
                </button>
                <button
                  onClick={() => setIsAdminMode(false)}
                  className="px-4 py-3 bg-white border border-purple-950/15 text-xs text-purple-800 rounded hover:bg-cream-150 transition cursor-pointer font-bold tracking-wider"
                  id="admin-exit-btn"
                >
                  Paneli Kapat
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-cream-100 border border-purple-900/10 text-xs font-bold text-purple-800 hover:text-gold-600 rounded shadow-sm transition cursor-pointer"
                id="admin-portal-trigger"
              >
                <Key className="w-3.5 h-3.5 text-gold-600" />
                Yazar Girişi (Panel)
              </button>
            )}
          </div>
        </div>

        {/* Dynamic Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" id="blog-posts-grid">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white border border-purple-900/10 rounded p-6 flex flex-col justify-between hover:border-gold-500/35 hover:shadow-sm transition-all duration-300 group"
              id={`blog-card-${post.id}`}
            >
              <div className="space-y-4">
                {/* Meta details */}
                <div className="flex items-center justify-between">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-gold-600 bg-gold-400/5 px-2.5 py-1 rounded border border-gold-500/10">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] text-purple-650 font-semibold">
                    <Clock className="w-3.5 h-3.5 text-[#300C32]" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Article Info */}
                <div className="space-y-2">
                  <h3 className="font-display font-extrabold text-lg text-purple-950 group-hover:text-gold-600 transition-colors leading-snug italic">
                    {post.title}
                  </h3>
                  <p className="font-sans text-xs text-purple-800 leading-relaxed line-clamp-3 font-semibold">
                    {post.summary}
                  </p>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="pt-6 border-t border-purple-900/5 flex items-center justify-between mt-6">
                <span className="font-sans text-[10px] text-purple-500 font-bold uppercase tracking-wider">
                  {post.date}
                </span>

                {isAdminMode ? (
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleOpenEditForm(post)}
                      className="p-2 rounded hover:bg-cream-100 text-purple-800 hover:text-purple-950 transition"
                      title="Düzenle"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeletePost(post.id)}
                      className="p-2 rounded hover:bg-cream-100 text-red-600 hover:text-red-700 transition"
                      title="Sil"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="flex items-center gap-1 font-sans text-xs font-bold text-gold-600 group-hover:text-purple-950 transition-colors"
                  >
                    Oku <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Makaleyi Oku Modal overlay */}
        {selectedPost && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-purple-950/80 backdrop-blur-sm" id="article-reader-modal">
            <div className="relative w-full max-w-3xl bg-white rounded border border-purple-900/10 shadow-2xl p-6 sm:p-10 max-h-[85vh] overflow-y-auto text-[#300C32]">
              
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-cream-100 transition"
                id="close-reader-btn"
              >
                <X className="w-6 h-6 text-purple-800 hover:text-gold-600" />
              </button>

              <div className="space-y-6">
                {/* Header details */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] uppercase font-bold tracking-widest text-gold-600 bg-gold-400/5 px-2.5 py-1 rounded border border-gold-500/15">
                      {selectedPost.category}
                    </span>
                    <span className="font-sans text-xs text-purple-500 font-bold">
                      • {selectedPost.date}
                    </span>
                    <span className="font-sans text-xs text-purple-500 font-bold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gold-600" />
                      {selectedPost.readTime}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3.5xl font-extrabold text-purple-950 leading-tight italic">
                    {selectedPost.title}
                  </h3>
                </div>

                <hr className="border-purple-900/10" />

                {/* Substantive text in editorial style */}
                <div className="prose prose-purple max-w-none font-sans text-sm sm:text-base text-purple-900 leading-relaxed whitespace-pre-line space-y-4 font-medium">
                  {selectedPost.content}
                </div>

                <hr className="border-purple-900/10" />

                {/* Footer with deep call-to-action */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="font-sans text-xs text-purple-700 font-medium">
                    Görüş, öneri veya bu makalede bahsedilen konular üzerine seans rezervasyonu için bize dilediğiniz an ulaşabilirsiniz.
                  </div>
                  <a
                    href={`https://wa.me/905421994079?text=${encodeURIComponent(
                      `Merhaba, web sitenizdeki '${selectedPost.title}' başlıklı makaleyi okudum. Bu konudaki seans teknikleriniz üzerine sizinle görüşmek istiyorum.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center gap-2 bg-[#300C32] hover:bg-[#4A154B] text-white font-sans text-xs font-bold uppercase tracking-widest px-6 py-4 rounded text-center flex-shrink-0 shadow"
                  >
                    Makale Hakkında Bilgi Al
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Password Login Portal for Administrator */}
        {isLoginModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-purple-950/80 backdrop-blur-sm" id="admin-login-modal">
            <div className="w-full max-w-sm bg-white rounded border border-purple-900/15 shadow-2xl p-6 sm:p-8 text-[#300C32]">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <Key className="w-5 h-5 text-gold-600" />
                  <h3 className="font-display font-extrabold text-lg text-purple-950">Yönetici Girişi</h3>
                </div>
                <button
                  onClick={() => setIsLoginModalOpen(false)}
                  className="text-purple-800 hover:text-purple-950"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleLoginSubmit} className="space-y-4" id="login-form">
                <div className="space-y-2">
                  <label className="font-sans text-xs uppercase tracking-widest text-[#300C32]/85 font-extrabold block">
                    Giriş Şifresi
                  </label>
                  <input
                    type="password"
                    value={pinInput}
                    onChange={(e) => setPinInput(e.target.value)}
                    placeholder="Şifreyi giriniz..."
                    className="w-full bg-cream-50 border border-purple-900/10 p-3 rounded text-sm text-purple-950 focus:outline-none focus:border-gold-500 font-semibold"
                    id="pin-pwd-input"
                    required
                  />
                  <p className="font-sans text-[10px] text-purple-600 leading-normal font-bold">
                    * Şifre: <span className="font-mono text-gold-600">4079</span> veya <span className="font-mono text-gold-600">mucizenuma</span> (Yazar panele kolayca girerek içerik ekleyip yönetebilir).
                  </p>
                </div>

                {pinError && (
                  <div className="flex items-center gap-2 text-xs text-red-600 bg-red-400/5 p-2.5 rounded border border-red-500/20">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-600" />
                    <span className="font-bold">{pinError}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#300C32] hover:bg-[#4A154B] text-white font-sans font-bold text-xs uppercase tracking-widest py-3.5 rounded transition shadow"
                >
                  Giriş Yap
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Add / Edit Form Modal */}
        {isFormOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-purple-950/85 backdrop-blur-sm" id="blog-form-modal">
            <div className="relative w-full max-w-2xl bg-white rounded border border-purple-900/15 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-[#300C32]">
              
              <button
                onClick={() => setIsFormOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-cream-100 transition"
              >
                <X className="w-6 h-6 text-purple-800 hover:text-purple-950" />
              </button>

              <h3 className="font-display text-xl font-bold text-purple-950 mb-6 italic">
                {editingPost ? "Makaleyi Düzenle" : "Yeni Farkındalık Makalesi Ekle"}
              </h3>

              <form onSubmit={handleFormSubmit} className="space-y-5" id="blog-editor-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-sans text-xs uppercase tracking-widest text-[#300C32]/85 font-extrabold block">
                      Makale Başlığı
                    </label>
                    <input
                      type="text"
                      value={formTitle}
                      onChange={(e) => setFormTitle(e.target.value)}
                      placeholder="Örn: Bilinçaltının Gizli Dili..."
                      className="w-full bg-cream-50 border border-purple-900/10 p-3 rounded text-xs sm:text-sm text-purple-950 focus:outline-none focus:border-gold-500 font-semibold"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-sans text-xs uppercase tracking-widest text-[#300C32]/85 font-extrabold block">
                      Kategori
                    </label>
                    <select
                      value={formCategory}
                      onChange={(e) => setFormCategory(e.target.value)}
                      className="w-full bg-cream-50 border border-purple-900/10 p-3 rounded text-xs sm:text-sm text-purple-950 focus:outline-none focus:border-gold-500 font-bold"
                    >
                      <option value="Bilinçaltı Teknikleri">Bilinçaltı Teknikleri</option>
                      <option value="Biyofrekans">Biyofrekans</option>
                      <option value="Aile Danışmanlığı">Aile Danışmanlığı</option>
                      <option value="Dönüşüm Atölyeleri">Dönüşüm Atölyeleri</option>
                      <option value="Motivasyon">Motivasyon</option>
                      <option value="Farkındalık">Farkındalık</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-sans text-xs uppercase tracking-widest text-[#300C32]/85 font-extrabold block">
                      Okuma Süresi
                    </label>
                    <input
                      type="text"
                      value={formReadTime}
                      onChange={(e) => setFormReadTime(e.target.value)}
                      placeholder="Örn: 4 dk okuma"
                      className="w-full bg-cream-50 border border-purple-900/10 p-3 rounded text-xs sm:text-sm text-purple-950 focus:outline-none focus:border-gold-500 font-semibold"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-sans text-xs uppercase tracking-widest text-[#300C32]/85 font-extrabold block">
                    Kısa Özet (Ana sayfada / kartta görünecektir)
                  </label>
                  <textarea
                    value={formSummary}
                    onChange={(e) => setFormSummary(e.target.value)}
                    placeholder="Bu makale hakkında 2-3 cümleyle bilgi veriniz..."
                    className="w-full h-20 bg-cream-50 border border-purple-900/10 p-3 rounded text-xs sm:text-sm text-purple-950 focus:outline-none focus:border-gold-500 resize-none font-medium"
                    maxLength={180}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-sans text-xs uppercase tracking-widest text-[#300C32]/85 font-extrabold block">
                    Makale İçeriği (Tam Metin)
                  </label>
                  <textarea
                    value={formContent}
                    onChange={(e) => setFormContent(e.target.value)}
                    placeholder="Makalenin derin, farkındalık uyandıcı tam metnini buraya yazınız..."
                    className="w-full h-44 bg-cream-50 border border-purple-900/10 p-3 rounded text-xs sm:text-sm text-purple-950 focus:outline-none focus:border-gold-500 resize-y font-medium"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#300C32] hover:bg-[#4A154B] text-white font-sans font-bold text-xs uppercase tracking-widest py-4 rounded shadow-lg transition-all"
                >
                  <Save className="w-4 h-4 text-gold-450" />
                  Makaleyi Kaydet (Sitede Yayınla)
                </button>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
