import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Accueil.css';

const Accueil = () => {
  const navigate = useNavigate();
  return (
    <div className="accueil">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Bienvenue sur notre Blog</h1>
          <p className="hero-description">
            Découvrez une expérience unique avec nos différentes sections : 
            produits innovants, citations inspirantes et articles captivants.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => navigate('/produits')}>Explorer les Produits</button>
            <button className="btn-secondary" onClick={() => navigate('/articles')}>Lire les Articles</button>
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
    </div>
  );
};

export default Accueil;