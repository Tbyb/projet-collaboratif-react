import React, { useEffect, useState, useMemo } from 'react';
import '../styles/articles.css';

function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    document.body.style.background = 'linear-gradient(120deg, #f0fdfa 0%, #e0fff4 100%)';
    document.body.style.minHeight = '100vh';
    return () => {
      document.body.style.background = '';
      document.body.style.minHeight = '';
    };
  }, []);

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.posts);
        setLoading(false);
      })
      .catch((err) => {
        setError('Erreur lors du chargement des articles');
        setLoading(false);
      });
  }, []);

  const { total, avgLength, prolific } = useMemo(() => {
    const total = articles.length;
    const avgLength = total > 0 ? Math.round(articles.reduce((sum, a) => sum + a.body.length, 0) / total) : 0;
    const authorCount = {};
    articles.forEach(a => { authorCount[a.userId] = (authorCount[a.userId] || 0) + 1; });
    const prolific = Object.entries(authorCount).sort((a, b) => b[1] - a[1])[0];
    return { total, avgLength, prolific };
  }, [articles]);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>{error}</div>;

  if (selected) {
    return (
      <div className="article-detail">
        <button className="back-btn" onClick={() => setSelected(null)}>
          Retour à la liste
        </button>
        <h2>{selected.title}</h2>
        <p>{selected.body}</p>
        <span className="article-author">Auteur #{selected.userId}</span>
      </div>
    );
  }

  return (
    <div className="articles-bg">
      <div className="articles-stats">
        <h2>Statistiques</h2>
        <ul>
          <li><strong>Total articles :</strong> {total}</li>
          <li><strong>Longueur moyenne :</strong> {avgLength}</li>
          <li><strong>Auteur le plus prolifique :</strong> {prolific ? prolific[0] : '-'}</li>
        </ul>
      </div>
      <h1 className="articles-title">Articles</h1>
      <div className="articles-grid">
        {articles.map((article) => (
          <div
            key={article.id}
            className="article-card"
            onClick={() => setSelected(article)}
          >
            <h3>{article.title}</h3>
            <p className="article-body">{article.body.slice(0, 80)}...</p>
            <span className="article-author">Auteur #{article.userId}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Articles;