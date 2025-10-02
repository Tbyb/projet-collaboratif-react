import React from 'react';
import '../styles/Accueil.css';

const Accueil = () => {
  return (
    <div className="accueil">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Bienvenue sur notre Site Collaboratif</h1>
          <p className="hero-description">
            Découvrez une expérience unique avec nos différentes sections : 
            produits innovants, citations inspirantes et articles captivants.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Explorer les Produits</button>
            <button className="btn-secondary">Lire les Articles</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="placeholder-image">
            <span>🚀</span>
          </div>
        </div>
      </div>

      <div className="features-section">
        <h2 className="section-title">Nos Sections</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🛍️</div>
            <h3>Produits</h3>
            <p>Découvrez une large gamme de produits avec des descriptions détaillées et des images de qualité.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <h3>Citations</h3>
            <p>Trouvez l'inspiration avec notre collection de citations motivantes et réflexions profondes.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📰</div>
            <h3>Articles</h3>
            <p>Lisez des articles intéressants et informatifs sur une variété de sujets passionnants.</p>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">100+</div>
            <div className="stat-label">Produits</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Citations</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">30+</div>
            <div className="stat-label">Articles</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accueil;