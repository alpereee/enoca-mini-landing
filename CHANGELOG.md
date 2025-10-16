# CHANGELOG

Tüm önemli değişiklikler bu belgede listelenmiştir. Bu proje, Conventional Commits standardına uymaktadır.

## [1.0.0] - 2025-10-17 (Final Teslimat)

### feat (Özellikler)

-   feat(release): Projenin tüm zorunlu UI bileşenleri ve Landing Page bölümleri tamamlanmıştır.
-   feat(style): ENOCA kurumsal kimliğine uygun renk şeması, Inter fontu ve görsel iyileştirmeler entegre edildi.
-   feat(layout): Header'a sabit (fixed) konumlandırma ve sayfa içeriği için "Yukarı Çık" (Scroll-to-Top) butonu eklendi.
-   [cite_start]feat(component): Gerekli 5 UI bileşeni (Button, Card, Accordion, Input, Modal) ayrı dosya/klasör yapısında oluşturuldu[cite: 5, 20].
-   [cite_start]feat(content): Hero, Özellikler, Fiyat Kartları ve SSS bölümleri ENOCA hizmetlerine yönelik verilerle dolduruldu[cite: 4].
-   [cite_start]feat(form): Yalın JavaScript/TypeScript mantığı ile çalışan form doğrulama (e-posta ve boş alan kontrolü) uygulandı[cite: 8].

### fix (Hata Düzeltmeleri)

-   [cite_start]fix(layout): Sayfa içeriğinin sola yaslanma sorunu (`main` etiketindeki hatalı boşlukların kaldırılması) ve yatay kaydırma çubuğu (`overflow-x: hidden`) sorunları çözüldü[cite: 6].
-   fix(style): Sass derleyicisinin CSS değişkenlerini tanıyamaması sorunu (`darken()` hatası) çözüldü; tüm renk manipülasyonları güvenli CSS filtreleri/RGBA ile değiştirildi.
-   fix(component): Fiyat kartlarındaki (Card) dikey hizalama ve Button'ın alta sabitlenme sorunu (Flexbox ile) düzeltildi.
-   fix(a11y): Lighthouse raporundaki temel erişilebilirlik hatalarına (örneğin: eksik `aria-label`) yönelik düzeltmeler yapıldı (Elde edilen skor 96/100).

### docs (Dokümantasyon)

-   [cite_start]docs: README.md dosyası oluşturuldu ve tüm zorunlu mimari notları ve kabul kriteri kanıtları eklendi[cite: 16, 32].
-   docs: Lighthouse raporunun ekran görüntüsü (P:74, A:96) projenin ana dizinine eklendi.
-   [cite_start]docs: Günlük kısa ilerleme notları ve süreç takibi eklendi[cite: 33].