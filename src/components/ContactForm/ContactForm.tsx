// src/components/ContactForm/ContactForm.tsx (Tamamen doldurulmuş)

import React, { useRef, useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input'; 
import { isValidEmail, isFieldEmpty } from '../../utils/validation'; 
import './ContactForm.scss';

type Errors = {
  name?: string;
  email?: string;
  message?: string;
};

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (!formRef.current) return;

    // Yalın JS ile form değerlerini alma ve doğrulama
    const formData = new FormData(formRef.current);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    let newErrors: Errors = {};
    let hasError = false;

    if (isFieldEmpty(name)) {
      newErrors.name = 'İsim alanı boş bırakılamaz.';
      hasError = true;
    }

    if (isFieldEmpty(email)) {
      newErrors.email = 'E-posta alanı boş bırakılamaz.';
      hasError = true;
    } else if (!isValidEmail(email)) { 
      newErrors.email = 'Geçerli bir e-posta adresi giriniz.';
      hasError = true;
    }

    if (isFieldEmpty(message)) {
      newErrors.message = 'Mesaj alanı boş bırakılamaz.';
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      // Yalancı Submit Mantığı
      console.log('Form Gönderildi:', { name, email, message });
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsSubmitted(false);
        formRef.current?.reset(); 
      }, 5000);
    }
  };

  if (isSubmitted) {
    return (
      <div className="contact-form--success" role="status" aria-live="polite">
        <p>Teşekkürler! Mesajınız başarıyla alınmıştır. En kısa sürede size dönüş yapacağız.</p>
        <Button onClick={() => setIsSubmitted(false)} variant="secondary">Yeni Mesaj Gönder</Button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="contact-form" noValidate>
      
      <Input
        label="Adınız Soyadınız"
        id="name"
        name="name" 
        type="text"
        placeholder="Adınızı girin"
        errorMessage={errors.name}
      />
      
      <Input
        label="E-posta Adresiniz"
        id="email"
        name="email"
        type="email"
        placeholder="ornek@alanadi.com"
        errorMessage={errors.email}
      />
      
      <div className="input-group">
        <label htmlFor="message" className="input-group__label">Mesajınız</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`input-group__textarea ${errors.message ? 'input-group__textarea--error' : ''}`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        ></textarea>
        {errors.message && (
            <p id="message-error" className="input-group__error-message" role="alert">
                {errors.message}
            </p>
        )}
      </div>

      <Button type="submit" size="large">
        Gönder
      </Button>
    </form>
  );
};

export default ContactForm;