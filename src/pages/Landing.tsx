// src/pages/Landing.tsx

import React, { useState, useEffect } from 'react';
import '../styles/theme.scss'; // Global ve tema stilleri

// BİLEŞEN KÜTÜPHANESİNDEN IMPORTLAR
import Button from '../components/Button/Button';
import Card from '../components/Card/Card'; 
import Accordion from '../components/Accordion/Accordion'; 
import ContactForm from '../components/ContactForm/ContactForm';

// UTILS VE HOOKS
import { useTheme } from '../utils/useTheme'; 
import enocaLogo from '../assets/enoca-logo.png'; // <-- Logo görseli import edildi

// --- SABİT VERİLER (DATA) ---

// 1. ÖZELLİKLER (NEDEN BİZ?)
const features = [
  {
    title: 'Çevik Geliştirme (Agile)',
    description: 'Esnek süreçlerle kısa döngülerde hızlı ve hatasız teslimat garantisi.'
  },
  {
    title: 'Ölçeklenebilir Mimari',
    description: 'Büyük yüklere hazır, bulut tabanlı mikroservis mimarileri tasarlıyoruz.'
  },
  {
    title: 'Uzman Mühendislik Kadrosu',
    description: 'Alanında 10 yıldan fazla tecrübeye sahip, sertifikalı yazılım mühendisleri.'
  },
];

// 2. PLANLAR
const pricingPlans = [
  {
    name: 'Temel Destek',
    price: '₺1.999/ay',
    features: ['1 Uygulama Entegrasyonu', 'Hata Düzeltmeleri', '7/24 E-posta Desteği', '5 Destek Sorgusu'],
    isPrimary: false,
  },
  {
    name: "Proje Geliştirme",
    price: '₺5.999/ay',
    features: ['Tüm Özellikler', '5 Kullanıcı', 'Öncelikli Geliştirme', 'Sınırsız Sorgu', 'Ek Özelleştirme'],
    isPrimary: true, 
  },
  {
    name: 'Kurumsal Çözümler',
    price: 'Özel Teklif',
    features: ['Sınırsız Kullanıcı', 'Özel Entegrasyon', 'Telefonda Destek', 'Yerinde Eğitim ve Danışmanlık'],
    isPrimary: false,
  },
];

// 3. SSS (SIKÇA SORULAN SORULAR)
const faqs = [
  {
    id: 1,
    title: 'Proje geliştirme süreciniz nasıl işler?',
    content: 'Müşteri odaklı Çevik (Agile) metodolojisini benimsiyoruz. Kısa Sprint’ler, düzenli geri bildirim ve şeffaf iletişim ile ilerleriz.'
  },
  {
    id: 2,
    title: 'Enoca hangi teknolojilerde uzmandır?',
    content: 'Uzmanlığımız, ölçeklenebilir modern web mimarileri (React, Vue, Node.js), Bulut (AWS/Azure) ve CI/CD süreçlerini içeren DevOps çözümleridir.'
  },
  {
    id: 3,
    title: 'Klavye ile erişim ve A11y sağlandı mı?',
    content: 'Evet. Tüm bileşenlerimiz klavye ile tamamen erişilebilir olacak şekilde (tabIndex, aria-* nitelikleri) tasarlanmıştır.'
  },
];


// --- LANDING PAGE KOMPONENTİ ---

const Landing: React.FC = () => {
  // Tema Hook'u
  const { theme, toggleTheme } = useTheme();

  // "YUKARI ÇIK" BUTONU MANTIĞI
  const [isVisible, setIsVisible] = useState(false);

  // Kaydırma olayını dinler ve butonu gösterir/gizler
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Sayfanın en üstüne yumuşak bir geçişle kaydırır
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  return (
    <div className="landing" data-theme={theme}>
      
      {/* ==================================== */}
      {/* 1. HEADER (SABİT ÇUBUK) */}
      {/* ==================================== */}
      <header className="site-header">
        <div className="container">
          <div className="header__content">
            {/* LOGO GÖRSELİ VE İTALİK METİN EKLENDİ */}
            <a href="#hero" className="site-title" aria-label="ENOCA Yazılım Ana Sayfa">
                <img 
                    src={enocaLogo} 
                    alt="ENOCA Yazılım Logosu" 
                    style={{ height: '40px', width: 'auto' }} 
                    className="header__logo"
                />
                <span className="logo-text">
                    ENOCA <i>Yazılım</i>
                </span>
            </a>
            
            <nav role="navigation" aria-label="Ana Navigasyon">
              <a href="#hizmetler">Hizmetler</a>
              <a href="#planlar">Planlar</a>
              <a href="#sss">SSS</a>
              <a href="#iletisim">İletişim</a>
            </nav>
            <Button onClick={toggleTheme} variant="outline" aria-label={`Temayı ${theme === 'light' ? 'karanlığa' : 'aydınlığa'} çevir`}>
              {theme === 'light' ? 'Karanlık Mod' : 'Aydınlık Mod'}
            </Button>
          </div>
        </div>
      </header>

      <main id="main-content" role="main">
        {/* ==================================== */}
        {/* 2. HERO BÖLÜMÜ */}
        {/* ==================================== */}
        <section id="hero" className="hero-section">
          <div className="container">
            <h1>Geleceği Kodluyoruz: Akıllı Yazılım Çözümleri</h1>
            <p>Enoca ile dijital dönüşümünüzü hızlandırın. Sektördeki en yenilikçi yazılım ve bulut mimarisi çözümlerini sunuyoruz.</p>
            <Button variant="primary" size="large" onClick={() => document.getElementById('iletisim')?.scrollIntoView({ behavior: 'smooth' })}>
              Teklif Alın
            </Button>
          </div>
        </section>

        {/* ==================================== */}
        {/* 3. ÖZELLİKLER BÖLÜMÜ */}
        {/* ==================================== */}
        <section id="hizmetler" className="section-padding">
          <div className="container">
            <h2>Neden Enoca'yı Seçmelisiniz?</h2>
            <div className="grid">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  title={feature.title} 
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ==================================== */}
        {/* 4. FİYATLANDIRMA BÖLÜMÜ */}
        {/* ==================================== */}
        <section id="planlar" className="section-padding section-alt-bg">
          <div className="container">
            <h2>Hizmet Planlarımız</h2>
            <div className="grid">
              {pricingPlans.map((plan, index) => (
                <Card 
                  key={index}
                  title={plan.name}
                  price={plan.price} 
                  features={plan.features} 
                  isFeatured={plan.isPrimary} 
                  className={plan.isPrimary ? 'card--primary-pricing' : ''}
                >
                  <Button 
                    variant={plan.isPrimary ? 'primary' : 'outline'}
                    onClick={() => console.log(`${plan.name} seçildi`)}
                  >
                    {plan.name === 'Kurumsal Çözümler' ? 'Teklif Al' : 'Planı Seç'}
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================== */}
        {/* 5. SSS BÖLÜMÜ (Accordion) */}
        {/* ==================================== */}
        <section id="sss" className="section-padding">
          <div className="container">
            <h2>Sıkça Sorulan Sorular</h2>
            {faqs.map((faq) => (
              <Accordion 
                key={faq.id} 
                title={faq.title}
                content={faq.content}
              />
            ))}
          </div>
        </section>

        {/* ==================================== */}
        {/* 6. İLETİŞİM BÖLÜMÜ */}
        {/* ==================================== */}
        <section id="iletisim" className="section-padding section-alt-bg">
          <div className="container">
            <h2>İletişime Geçin ve Teklif Alın</h2>
            <ContactForm />
          </div>
        </section>

      </main>

      {/* ==================================== */}
      {/* 7. FOOTER */}
      {/*==================================== */}
      <footer className="site-footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} ENOCA Yazılım. Tüm Hakları Saklıdır.</p>
        </div>
      </footer>
      
      {/* ==================================== */}
      {/* 8. YUKARI ÇIK BUTONU */}
      {/* ==================================== */}
      <button
        className={`scroll-to-top ${isVisible ? 'is-visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Sayfanın başına git"
        title="Yukarı Çık"
      >
        &#x2191; 
      </button>

    </div>
  );
};

export default Landing;