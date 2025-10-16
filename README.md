 ENOCA Yazılım Çözümleri: Landing Page & Bileşen Kütüphanesi

Bu proje, Enoca Yazılım Şirketi'nin kurumsal kimliğine uygun, teknik yeterliliği ve profesyonel süreçleri göstermek amacıyla hazırlanmış, **tek sayfalık bir ürün tanıtım sitesidir**. Proje, 1 iş günü süresince geliştirilmiştir.

## 🎯 Proje Gereksinimleri ve Kabul Kriterleri Özeti

| Kriter | Durum | Kaynak/Uyum Durumu |
| :--- | :--- | :--- |
| **Teknoloji Yığını** | **Vite + React + TypeScript** | 
  SCSS zorunlu olarak kullanılmıştır[cite: 1]. |
| **Bileşen Kütüphanesi** | **5 Adet Tamamlandı** | 
  Button, Input, Card, Modal, Accordion bileşenleri ayrı klasörlerde, props ile yapılandırılabilir durumdadır[cite: 1]. 
| **Responsive Tasarım** | **Mobil-Öncelikli** | 
  3 farklı breakpoint'te (≤640, 641-1024, ≥1025) düzgün çalışır. 
| **Tema** | **Light/Dark Toggle** | [cite_start]CSS değişkenleri (`--color-*`) ile yönetilen tema geçişi mevcuttur. 
| **Form Doğrulama** | **Yalın TS Mantığı** | 
 E-posta formatı ve boş alan kontrolü, harici kütüphane kullanılmadan sağlanmıştır. 

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

* **Canlı Demo Adresi (Vercel/Netlify):** 
[https://enoca-mini-landing.vercel.app/]
* **GitHub Depo Adresi:** 
[https://github.com/alpereee/enoca-mini-landing]
(https://github.com/alpereee/enoca-mini-landing)

---

## 🧠 Mimari Kararlar ve Teknik Analiz (Karar Kayıtları)

Proje hedeflerine ulaşmak için alınan kritik kararlar:

| Karar | Detaylı Açıklama | Neden |
| :--- | :--- | :--- |
| **SCSS Fonksiyon Çatışması** | `darken()` gibi Sass fonksiyonları, `var(...)` değerlerini renk olarak tanımadığı için, renk manipülasyonları **güvenli CSS yöntemleri** ile (Örn: `filter: brightness()`) yapılmıştır. | Proje kuralı olan CSS değişkenleri ile Sass'ın uyumunu sağlamak için zorunlu kılınmıştır. |
| **Header Sabitleme** | `position: fixed` ve `main { margin-top: ... }` | Header'ın sayfa kaydırılsa bile sabit kalması ve altındaki içeriğin Header'ın altında kalmaması için kullanılmıştır. |
| **Erişilebilirlik (A11y)** | [cite_start]`Accordion` gibi bileşenlerde klavye ile gezinme ve gerekli temel `aria-*` nitelikleri kullanılmıştır[cite: 1]. | Zorunlu Kabul Kriterlerini karşılamak için. |

---

## 🏆 Değerlendirme Puanları ve Kalite Raporu

### 1. Lighthouse Performans Raporu (Teslim edilen skorlar)

| Kategori  | Elde Edilen Puan | 
| :--- | :--- | :--- | :--- |
| **Performans**  | **74** | 
| **Erişilebilirlik**  | **96** | 
| **Best Practices**| **100** | 
| **SEO**  | **91** |

Lighthouse raporunun ekran görüntüsünü projenin ana dizinine "lighthouse-report-enoca.png " olarak eklendi *

### 2. Kod Standartları ve Git Akışı

**Kod Standardı:** ESLint ve Prettier kullanılarak kod formatı otomatik olarak korunmuştur[cite: 1].
* **Versiyon Kontrol:** Geliştirme `dev` dalında yapılmış, `feat/*` ve `fix/*` dalları kullanılmıştır. `main` dalı koruma altındadır.
**Commit Mesajları:** Conventional Commits formatına (`feat:`, `fix:`, `docs:`, vb.) uygun olarak yazılmıştır.

## ⚠️ PR Teslimat Kuralı Notu

[cite_start]Projenin teslimatı sırasında, açılan Pull Request'te anlamlı başlık, kapsamlı bir açıklama, çalışan demo ekran görüntüsü/GIF'i ve **CHANGELOG.md** güncellemesi bulunması zorunludur[cite: 1].