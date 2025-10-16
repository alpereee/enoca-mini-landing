// src/App.tsx

import React from 'react';
import Landing from './pages/Landing';

// App.css'i de dahil edelim (Eğer global stillerinizden ayrı bir şey kullanacaksanız)
// import './App.css'; 

const App: React.FC = () => {
  // Projeniz tek sayfalık bir landing olduğu için, direkt Landing bileşenini döndürüyoruz.
  return (
    <div className="App">
      <Landing />
    </div>
  );
};

export default App;