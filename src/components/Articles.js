
import React, { useEffect, useState } from 'react';


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

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>{error}</div>;

  if (selected) {
    return (
      <div style={{
        maxWidth: 700,
        margin: '40px auto',
        textAlign: 'left',
        border: 'none',
        borderRadius: 16,
        boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
        padding: 36,
        background: 'linear-gradient(120deg, #e0fff4 0%, #f9f9f9 100%)',
      }}>
        <button
          onClick={() => setSelected(null)}
          style={{
            marginBottom: 24,
            padding: '8px 18px',
            border: 'none',
            borderRadius: 6,
            background: '#10b981',
            color: 'white',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: 16,
            boxShadow: '0 2px 8px rgba(16,185,129,0.08)'
          }}
        >Retour à la liste</button>
        <h2 style={{ color: '#10b981', fontSize: 32, marginBottom: 12 }}>{selected.title}</h2>
        <p style={{ fontSize: 18, color: '#374151', lineHeight: 1.7 }}>{selected.body}</p>
        <div style={{ color: '#64748b', fontSize: 15, marginTop: 24 }}>Auteur ID: {selected.userId}</div>
      </div>
    );
  }

  // Statistiques
  const total = articles.length;
  const avgLength = total > 0 ? Math.round(articles.reduce((sum, a) => sum + a.body.length, 0) / total) : 0;
  const authorCount = {};
  articles.forEach(a => { authorCount[a.userId] = (authorCount[a.userId] || 0) + 1; });
  const prolific = Object.entries(authorCount).sort((a, b) => b[1] - a[1])[0];



  return (
    <div style={{
      maxWidth: 1100,
      margin: '40px auto',
      textAlign: 'left',
      minHeight: '80vh',
      padding: '32px 0',
      borderRadius: 24,
      boxShadow: '0 8px 32px rgba(16,185,129,0.08)',
      // plus de fond blanc ici, on laisse le fond général
    }}>
      <h2 style={{ color: '#10b981', fontSize: 32, marginBottom: 24, textAlign: 'center', letterSpacing: 1 }}>Articles</h2>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 32,
        marginBottom: 32,
        flexWrap: 'wrap',
      }}>
        <div style={{
          background: 'white',
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(16,185,129,0.08)',
          padding: '18px 32px',
          minWidth: 180,
          textAlign: 'center',
        }}>
          <div style={{ color: '#10b981', fontWeight: 'bold', fontSize: 22 }}>{total}</div>
          <div style={{ color: '#374151', fontSize: 15 }}>Articles</div>
        </div>
        <div style={{
          background: 'white',
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(16,185,129,0.08)',
          padding: '18px 32px',
          minWidth: 180,
          textAlign: 'center',
        }}>
          <div style={{ color: '#10b981', fontWeight: 'bold', fontSize: 22 }}>{avgLength}</div>
          <div style={{ color: '#374151', fontSize: 15 }}>Longueur moyenne</div>
        </div>
        <div style={{
          background: 'white',
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(16,185,129,0.08)',
          padding: '18px 32px',
          minWidth: 180,
          textAlign: 'center',
        }}>
          <div style={{ color: '#10b981', fontWeight: 'bold', fontSize: 22 }}>{prolific ? prolific[0] : '-'}</div>
          <div style={{ color: '#374151', fontSize: 15 }}>Auteur le plus prolifique</div>
        </div>
      </div>
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }}
      >
        {articles.map((article) => (
          <li
            key={article.id}
            onClick={() => setSelected(article)}
            style={{
              cursor: 'pointer',
              padding: '22px 20px',
              borderRadius: 14,
              background: 'linear-gradient(120deg, #e0fff4 0%, #f1f5f9 100%)',
              boxShadow: '0 2px 12px rgba(16,185,129,0.07)',
              border: 'none',
              transition: 'transform 0.15s, box-shadow 0.15s',
              position: 'relative',
              minHeight: 140,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(16,185,129,0.13)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 2px 12px rgba(16,185,129,0.07)';
            }}
          >
            <strong style={{ color: '#10b981', fontSize: 20 }}>{article.title}</strong>
            <div style={{ color: '#374151', fontSize: 15, marginTop: 8, marginBottom: 6 }}>
              {article.body.slice(0, 80)}{article.body.length > 80 ? '...' : ''}
            </div>
            {/* ID supprimé */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Articles;
