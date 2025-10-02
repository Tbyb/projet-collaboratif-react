
import React from 'react';
import './App.css';
import Articles from './Articles';


function App() {
  const [page, setPage] = React.useState('accueil');

  return (
    <div className="App">
      <nav style={{ marginBottom: 28, display: 'flex', justifyContent: 'center', gap: 18 }}>
        <button
          onClick={() => setPage('accueil')}
          style={{
            padding: '10px 28px',
            borderRadius: 8,
            border: 'none',
            background: page === 'accueil' ? '#10b981' : '#e0fff4',
            color: page === 'accueil' ? 'white' : '#10b981',
            fontWeight: 'bold',
            fontSize: 17,
            cursor: 'pointer',
            boxShadow: page === 'accueil' ? '0 2px 8px rgba(16,185,129,0.10)' : 'none',
            transition: 'all 0.2s',
          }}
        >
          Accueil
        </button>
        <button
          onClick={() => setPage('articles')}
          style={{
            padding: '10px 28px',
            borderRadius: 8,
            border: 'none',
            background: page === 'articles' ? '#10b981' : '#e0fff4',
            color: page === 'articles' ? 'white' : '#10b981',
            fontWeight: 'bold',
            fontSize: 17,
            cursor: 'pointer',
            boxShadow: page === 'articles' ? '0 2px 8px rgba(16,185,129,0.10)' : 'none',
            transition: 'all 0.2s',
          }}
        >
          Articles
        </button>
        {/* Ajoute ici les autres onglets plus tard */}
      </nav>
      {page === 'accueil' && (
        <div>
          <h1>Bienvenue sur le site collaboratif</h1>
          <p>Sélectionne un onglet pour commencer.</p>
        </div>
      )}
      {page === 'articles' && <Articles />}
    </div>
  );
}

export default App;
