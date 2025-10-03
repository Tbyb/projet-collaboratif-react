import React, { useState } from 'react';
import './styles/App.css';
import Navigation from './components/Navigation';
import Accueil from './components/Accueil';
import Produits from './components/Produits';
import Citations from './components/Citations';
import Articles from './components/Articles';

function App() {
  const [activeTab, setActiveTab] = useState('accueil');

  const renderContent = () => {
    switch (activeTab) {
      case 'accueil':
        return <Accueil setActiveTab={setActiveTab} />;
      case 'produits':
        return <Produits />;
      case 'citations':
        return <Citations />;
      case 'articles':
        return <Articles />;
      default:
        return <Accueil setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="App">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
