import React, { useState, useEffect } from 'react';
import '../styles/Citations.css';

const Citations = () => {
  const [citations, setCitations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCitation, setSelectedCitation] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [randomQuote, setRandomQuote] = useState(null);
  const [copyMessage, setCopyMessage] = useState('');

  const quotesPerPage = 9;

  // Fonction pour récupérer toutes les citations
  const fetchQuotes = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('https://dummyjson.com/quotes?limit=0');
      if (!response.ok) {
        throw new Error('Erreur lors du chargement des citations');
      }
      const data = await response.json();
      setCitations(data.quotes);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fonction pour récupérer une citation aléatoire
  const fetchRandomQuote = async () => {
    try {
      const response = await fetch('https://dummyjson.com/quotes/random');
      if (!response.ok) {
        throw new Error('Erreur lors du chargement de la citation aléatoire');
      }
      const data = await response.json();
      setRandomQuote(data);
    } catch (err) {
      console.error('Erreur citation aléatoire:', err);
    }
  };

  useEffect(() => {
    fetchQuotes();
    fetchRandomQuote();
  }, []);

  // Gestion de la pagination
  const indexOfLastQuote = currentPage * quotesPerPage;
  const indexOfFirstQuote = indexOfLastQuote - quotesPerPage;
  const currentQuotes = citations.slice(indexOfFirstQuote, indexOfLastQuote);
  const totalPages = Math.ceil(citations.length / quotesPerPage);

  const handleQuoteClick = (citation) => {
    setSelectedCitation(citation);
  };

  const handleCloseModal = () => {
    setSelectedCitation(null);
    setCopyMessage(''); // Reset copy message when closing modal
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewRandomQuote = () => {
    fetchRandomQuote();
  };
  // Fonction améliorée pour copier une citation
  const handleCopyQuote = async (quote, author) => {
    try {
      await navigator.clipboard.writeText(`"${quote}" - ${author}`);
      setCopyMessage('Citation copiée dans le presse-papiers !');
      setTimeout(() => setCopyMessage(''), 3000);
    } catch (err) {
      setCopyMessage('Erreur lors de la copie');
      setTimeout(() => setCopyMessage(''), 3000);
    }
  };

  // Fonction pour partager une citation (si l'API Web Share est disponible)
  const handleShareQuote = async (quote, author) => {
    const text = `"${quote}" - ${author}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Citation inspirante',
          text: text,
        });
      } catch (err) {
        console.log('Partage annulé ou erreur:', err);
      }
    } else {
      // Fallback: copier dans le presse-papiers
      handleCopyQuote(quote, author);
    }
  };

  if (loading) {
    return (
      <div className="citations-container">
        <div className="loading">
          <div className="loading-spinner"></div>
          <p>Chargement des citations...</p>
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="citations-container">
        <div className="error">
          <h2>Erreur</h2>
          <p>{error}</p>
          <button onClick={fetchQuotes} className="retry-btn">
            Réessayer
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="citations-container">
      <h1 className="page-title">Citations Inspirantes</h1>
      <p className="page-subtitle">
        Découvrez une collection de citations motivantes et inspirantes de grands penseurs. 
        Cliquez sur une citation pour la voir en détail et la partager.
      </p>

      {/* Citation aléatoire du jour */}
      {randomQuote && (
        <div className="random-quote-section">
          <h2>Citation du moment</h2>
          <div className="random-quote-card">
            <blockquote>"{randomQuote.quote}"</blockquote>
            <cite>— {randomQuote.author}</cite>            <div className="random-quote-actions">
              <button onClick={handleNewRandomQuote} className="new-quote-btn">
                Nouvelle citation
              </button>
              <button 
                onClick={() => handleShareQuote(randomQuote.quote, randomQuote.author)} 
                className="share-quote-btn"
              >
                Partager
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Statistiques */}
      <div className="stats-section">        <div className="stat-card">
          <span className="stat-number">{citations.length}</span>
          <span className="stat-label">Citations disponibles</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{currentPage}</span>
          <span className="stat-label">Page actuelle</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{totalPages}</span>
          <span className="stat-label">Total des pages</span>
        </div>
      </div>

      {/* Grille des citations */}
      <div className="quotes-grid">
        {currentQuotes.map((citation) => (
          <div
            key={citation.id}
            className="quote-card"
            onClick={() => handleQuoteClick(citation)}
          >
            <div className="quote-content">
              <blockquote>"{citation.quote}"</blockquote>
              <cite>— {citation.author}</cite>
            </div>            <div className="quote-footer">
              <span className="quote-id">#{citation.id}</span>
              <span className="click-hint">Cliquer pour détails</span>
            </div>
          </div>
        ))}
      </div>

      {/* Message si aucune citation */}
      {citations.length === 0 && !loading && (
        <div className="no-quotes">
          <h3>Aucune citation trouvée</h3>
          <p>Impossible de charger les citations pour le moment.</p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="pagination-btn"
          >
            ← Précédent
          </button>
          
          <div className="page-numbers">
            {[...Array(totalPages)].map((_, index) => {
              const pageNumber = index + 1;
              if (
                pageNumber === 1 ||
                pageNumber === totalPages ||
                (pageNumber >= currentPage - 2 && pageNumber <= currentPage + 2)
              ) {
                return (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`page-number ${
                      currentPage === pageNumber ? 'active' : ''
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              } else if (
                pageNumber === currentPage - 3 ||
                pageNumber === currentPage + 3
              ) {
                return <span key={pageNumber} className="pagination-ellipsis">...</span>;
              }
              return null;
            })}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="pagination-btn"
          >
            Suivant →
          </button>
        </div>
      )}

      {/* Modal pour citation sélectionnée */}
      {selectedCitation && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>
              ×
            </button>
            <div className="modal-quote">
              <h3>Citation #{selectedCitation.id}</h3>
              <blockquote>"{selectedCitation.quote}"</blockquote>
              <cite>— {selectedCitation.author}</cite>              <div className="modal-actions">
                <button
                  onClick={() => handleCopyQuote(selectedCitation.quote, selectedCitation.author)}
                  className="copy-btn"
                >
                  Copier
                </button>
                <button
                  onClick={() => handleShareQuote(selectedCitation.quote, selectedCitation.author)}
                  className="share-btn"
                >
                  Partager
                </button>
              </div>
              {copyMessage && <div className="copy-message">{copyMessage}</div>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Citations;
