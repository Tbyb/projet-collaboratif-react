import React from 'react';
import '../styles/Articles.css';

const Articles = () => {
  return (
    <div className="articles">
      <div className="articles-header">
        <h1>Articles Intéressants</h1>
        <p>Section développée par Alpha</p>
      </div>
      <div className="work-in-progress">
        <div className="icon">📰</div>
        <h2>En cours de développement</h2>
        <p>Cette section sera bientôt remplie d'articles captivants récupérés depuis l'API DummyJSON.</p>
      </div>
    </div>
  );
};

export default Articles;