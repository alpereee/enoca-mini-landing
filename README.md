# 🚀 ENOCA Yazılım Çözümleri: Landing Page & Bileşen Kütüphanesi

Bu proje, Enoca Yazılım Şirketi'nin kurumsal kimliğine uygun, teknik yeterliliği ve profesyonel süreçleri göstermek amacıyla hazırlanmış, **tek sayfalık bir ürün tanıtım sitesidir**. Proje, zorunlu sürede geliştirilmiştir.

## 🎯 Proje Gereksinimleri ve Kabul Kriterleri Özeti

| Kriter | Durum | Uyum Durumu |
| :--- | :--- | :--- |
| **Teknoloji Yığını** | **Vite + React + TypeScript** | [cite_start]SCSS zorunlu olarak kullanılmıştır[cite: 1]. |
| **Bileşen Kütüphanesi** | **5 Adet Tamamlandı** | [cite_start]Button, Input, Card, Modal, Accordion bileşenleri ayrı klasörlerde, props ile yapılandırılabilir durumdadır[cite: 1]. |
| **Responsive Tasarım** | **Mobil-Öncelikli** | 3 farklı breakpoint'te (≤640, 641-1024, ≥1025) düzgün çalışır. |
| **Tema** | **Light/Dark Toggle** | CSS değişkenleri (`--color-*`) ile yönetilen tema geçişi mevcuttur. |
| **Form Doğrulama** | **Yalın TS Mantığı** | E-posta formatı ve boş alan kontrolü, harici kütüphane kullanılmadan sağlanmıştır. |

---

## 🛠️ Kurulum ve Çalıştırma

Projenin bağımlılıklarını kurmak ve yerel sunucuyu başlatmak için aşağıdaki adımları izleyin.

1.  **Depoyu Klonlayın:**
    ```bash
    git clone [https://github.com/alpereee/enoca-mini-landing](https://github.com/alpereee/enoca-mini-landing) 
    cd mini-landing
    ```
2.  **Bağımlılıkları Kurun:**
    ```bash
    npm install 
    npm install sass --save-dev
    ```
3.  **Geliştirme Sunucusunu Başlatın:**
    ```bash
    npm run dev
    ```

### 🌐 Canlı Demo ve Depo Bilgileri

* **Canlı Demo Adresi:** [https://enoca-mini-landing.vercel.app/]
* **GitHub Depo Adresi:** [https://github.com/alpereee/enoca-mini-landing](https://github.com/alpereee/enoca-mini-landing)

---

## 🧠 Mimari Kararlar ve Teknik Analiz

| Karar | Detaylı Açıklama | Neden |
| :--- | :--- | :--- |
| **SCSS Fonksiyon Çatışması** | `darken()` gibi Sass fonksiyonları, `var(...)` değerlerini renk olarak tanımadığı için, renk manipülasyonları **güvenli CSS yöntemleri** ile (Örn: `filter: brightness()`) yapılmıştır. | CSS değişkenleri ile Sass'ın uyumunu sağlamak için. |
| **Header Sabitleme** | `position: fixed` ve `main { margin-top: ... }` | Header'ın sayfa kaydırılsa bile sabit kalması ve altındaki içeriğin Header'ın altında kalmaması için kullanılmıştır. |
| **Erişilebilirlik (A11y)** | [cite_start]`Accordion` gibi bileşenlerde klavye ile gezinme ve temel `aria-*` nitelikleri kullanılmıştır[cite: 1]. | Zorunlu Kabul Kriterlerini karşılamak için. |

---

## 🏆 Değerlendirme Puanları ve Kalite Raporu

### 1. Lighthouse Performans Raporu (Teslim edilen skorlar)

| Kategori | Elde Edilen Puan | Durum |
| :--- | :--- | :--- |
| **Performans** | **74** | Geliştirme alanı mevcuttur (Hedef 90+). |
| **Erişilebilirlik** | **96** | Küçük düzeltme ile 100 hedefine yakındır. |
| **Best Practices** | **100** | ✅ Mükemmel |
| **SEO** | **91** | ✅ Başarılı |

*Lighthouse raporunun ekran görüntüsü ("lighthouse-report-enoca.png") projenin ana dizinine eklenmiştir.*

### 2. Kod Standartları ve Git Akışı

* **Kod Standardı:** ESLint ve Prettier kullanılarak kod formatı otomatik olarak korunmuştur.
* **Versiyon Kontrol:** Geliştirme `dev` dalında yapılmış, `feat/*` ve `fix/*` dalları kullanılmıştır. `main` dalı koruma altındadır.
* **Commit Mesajları:** Conventional Commits formatına (`feat:`, `fix:`, `docs:`, vb.) uygun olarak yazılmıştır.

## 🚀 Final Pull Request: ENOCA Landing Page Teslimat Raporu

Bu PR, 'dev' dalındaki tüm geliştirme çalışmalarını, proje kurallarına uygun olarak 'main' dalına birleştirmek için açılmıştır.

### ✅ Teslimat Kanıtları ve Uyum Raporu

| Kriter | Durum | Not |
| :--- | :--- | :--- |
| **Canlı Demo** | ✅ Tamamlandı | [https://enoca-mini-landing.vercel.app/] |
| **Lighthouse Görseli** | ✅ Eklendi | Proje ana dizininde ("lighthouse-report-enoca.png") bulunmaktadır. |
| **Dökümantasyon** | ✅ Tamamlandı | README.md ve CHANGELOG.md güncellenmiştir. |
| **Commit Standardı** | ✅ Uyumlu | Tüm commit'ler Conventional Commits (feat:, fix:, docs:) kuralına uyar. |

### 🏆 Lighthouse Nihai Skorları

| Kategori | Skor |
| :--- | :--- |
| **Performans** | **74** |
| **Erişilebilirlik** | **96** |
| **Best Practices** | **100** |
| **SEO** | **91** |

---

### 📄 CHANGELOG.md (Önemli Değişiklikler)

PR Kuralı gereği, bu bölümde `CHANGELOG.md` içeriği özetlenmiştir.

```markdown
## [1.0.0] - Final Teslimat

### feat (Özellikler)
- feat(release): Tüm zorunlu UI bileşenleri (5 adet) ve sayfa bölümleri tamamlandı.
- feat(style): Light/Dark Mode toggle ve ENOCA renkleri uygulandı.
- feat(layout): Sabit Header ve Scroll-to-Top butonu entegrasyonu.

### fix (Hata Düzeltmeleri)
- fix(layout): Sayfa ortalama (merkezleme) ve yatay kaydırma çubuğu sorunları giderildi.
- fix(style): SCSS'teki değişken (var) ve Sass fonksiyon (darken) çatışmaları çözüldü.
- fix(a11y): Lighthouse raporundaki temel erişilebilirlik hatalarına yönelik düzeltmeler yapıldı.

### docs (Dokümantasyon)
- docs: README.md ve CHANGELOG.md dosyaları güncellendi.
- docs: Lighthouse raporu kanıt olarak eklendi.
