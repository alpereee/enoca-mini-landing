// src/components/Button/Button.tsx

// Hatalı:
// import React, { ButtonHTMLAttributes } from 'react'; 
// import React from 'react';
// import { ButtonHTMLAttributes } from 'react'; // Bu da hata verebilir.

// DOĞRU ÇÖZÜM: 'type' anahtar kelimesini kullanın.
import React from 'react';
import type { ButtonHTMLAttributes } from 'react'; // <--- BURASI DÜZELTİLDİ
import './Button.scss';

// Bileşen props'larını tanımla
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'medium', 
  children, 
  ...props 
}) => {
  // ... (Geri kalan kod aynı kalacak)
  return (
    <button 
      className={`btn btn--${variant} btn--${size}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;