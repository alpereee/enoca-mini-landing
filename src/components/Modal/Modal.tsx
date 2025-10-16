// src/components/Modal/Modal.tsx (Tamamen doldurulmuş)

import React, { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import Button from '../Button/Button';
import './Modal.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, className = '' }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const focusableElementRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      focusableElementRef.current?.focus(); 
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose();
        }
      };
      document.addEventListener('keydown', handleEscape);
      return () => {
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === modalRef.current) {
      onClose();
    }
  };

  return (
    <div 
      className="modal-backdrop" 
      onClick={handleBackdropClick} 
      ref={modalRef} 
    >
      <div 
        className={`modal-content ${className}`} 
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="modal-title" 
        tabIndex={-1} 
      >
        <header className="modal-header">
          <h3 id="modal-title">{title}</h3>
          <button 
            className="modal-close-button" 
            onClick={onClose} 
            ref={focusableElementRef} 
            aria-label="Kapat"
          >
            &times;
          </button>
        </header>
        
        <div className="modal-body">
          {children}
        </div>
        
        <footer className="modal-footer">
            <Button onClick={onClose} variant="secondary">Kapat</Button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;