import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {
  const tabs = [
    { id: 'accueil', path: '/accueil', label: 'Accueil' },
    { id: 'produits', path: '/produits', label: 'Produits' },
    { id: 'citations', path: '/citations', label: 'Citations' },
    { id: 'articles', path: '/articles', label: 'Articles' }
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        <h1 className="site-title">Blog</h1>
        <ul className="nav-tabs">
          {tabs.map(tab => (
            <li key={tab.id}>
              <NavLink
                to={tab.path}
                className={({ isActive }) => `nav-tab ${isActive ? 'active' : ''}`}
              >
                {tab.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;