// src/components/Input/Input.tsx

import React from 'react'; // Sadece React kalsın
import type { InputHTMLAttributes } from 'react'; // <-- Type-only import
// type { ChangeEvent } from 'react'; // Eğer kullanmıyorsanız bu satırı tamamen kaldırın

import './Input.scss';

// Input Props'ları: Temel HTML niteliklerini alır ve hata durumunu ekler.
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string; // label-for ve aria-labelledby bağlantısı için zorunlu
  errorMessage?: string; // Hata mesajı varsa, buraya yazılır
}

/**
 * Yeniden kullanılabilir Input bileşeni
 */
const Input: React.FC<InputProps> = ({ 
  label, 
  id, 
  errorMessage, 
  ...props 
}) => {
// ... (Geri kalan kod aynı kalacak)

  const hasError = !!errorMessage; 

  return (
    <div className={`input-group ${hasError ? 'input-group--error' : ''}`}>
      <label htmlFor={id} className="input-group__label">
        {label}
      </label>
      
      <input
        id={id}
        className="input-group__input"
        aria-invalid={hasError} 
        aria-describedby={hasError ? `${id}-error` : undefined} 
        {...props}
      />
      
      {hasError && (
        <p 
          id={`${id}-error`} 
          className="input-group__error-message" 
          role="alert" 
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default Input;