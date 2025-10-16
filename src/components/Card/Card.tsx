// src/components/Card/Card.tsx

import React from 'react';
import type { ReactNode } from 'react';
import './Card.scss';

// CardProps arayüzünü tüm olası prop'ları alacak şekilde güncelliyoruz.
interface CardProps {
  // Temel özellikler
  title: string; 
  children?: ReactNode; // Card içindeki çocuk elemanlar (Gerekli)
  className?: string;

  // Fiyatlandırma Kartı için eklenen prop'lar
  price?: string; 
  features?: string[]; // Fiyat listesi için
  isFeatured?: boolean; // Vurgulu kart için
  description?: string; // Özellikler kartı için
}

/**
 * Card Bileşeni
 */
const Card: React.FC<CardProps> = ({ 
    title, 
    children, 
    className = '', 
    price, 
    features, 
    isFeatured, 
    description,
    ...rest // Geriye kalan kullanılmayan prop'ları yakalamak için
}) => {
  
  // Fiyat kartı için özel render mantığı
  const isPricingCard = price !== undefined || features !== undefined;

  return (
    // Card bileşeninin HTML/JSX yapısını prop'lara göre yeniden düzenleyelim
    <div className={`card ${className} ${isPricingCard ? 'card--pricing' : ''}`} {...rest}>
        
        {/* Başlık (Zorunlu) */}
        <h3 className="card__title">{title}</h3>

        {/* FİYATLANDIRMA KARTI İÇERİĞİ */}
        {isPricingCard && (
            <>
                <div className="price-tag">
                    <strong>{price}</strong>
                </div>
                <ul className="feature-list">
                    {features?.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </>
        )}
        
        {/* NORMAL ÖZELLİK KARTI İÇERİĞİ */}
        {!isPricingCard && (
             <div className="card__content">
                 <p>{description}</p>
             </div>
        )}

        {/* Button'ı children olarak alıyoruz */}
        {children} 
    </div>
  );
};

export default Card;