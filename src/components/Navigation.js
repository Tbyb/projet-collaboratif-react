import React from 'react';
import '../styles/Navigation.css';

const Navigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'produits', label: 'Produits' },
    { id: 'citations', label: 'Citations' },
    { id: 'articles', label: 'Articles' }
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        <h1 className="site-title">Blog</h1>
        <ul className="nav-tabs">
          {tabs.map(tab => (
            <li key={tab.id}>
              <button
                className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;