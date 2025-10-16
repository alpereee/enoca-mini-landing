import React, { useState } from 'react';
import type { ReactNode } from 'react'; 
import './Accordion.scss';

interface AccordionProps {
  title: string;
  content: string | ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = React.useId(); // Benzersiz ID oluşturucu

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <h2 className="accordion__header">
        <button
          className="accordion__button"
          onClick={toggleAccordion}
          // Erişilebilirlik (A11Y) gereksinimleri
          aria-expanded={isOpen} // Durumu bildir
          aria-controls={contentId} // İçeriği ilişkilendir
          tabIndex={0} 
        >
          {title}
          <span className={`accordion__icon ${isOpen ? 'accordion__icon--open' : ''}`}>&#9660;</span>
        </button>
      </h2>
      
      {/* İçerik */}
      <div 
        id={contentId}
        role="region" 
        aria-labelledby={contentId} 
        className={`accordion__content ${isOpen ? 'accordion__content--open' : ''}`}
        // Basit animasyon için maxHeight
        style={{ maxHeight: isOpen ? '500px' : '0' }} 
      >
        <div className="accordion__body">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Accordion;