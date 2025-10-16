// src/main.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Ana App bileşenini içe aktardık
import './index.css'; // Opsiyonel: Varsayılan CSS dosyası

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);