import React, { useState, useEffect } from 'react';
import '../styles/Produits.css';

const Produits = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://dummyjson.com/products?limit=20');
      if (!response.ok) {
        throw new Error('Erreur lors du chargement des produits');
      }
      const data = await response.json();
      setProducts(data.products);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(price);
  };

  if (loading) {
    return (
      <div className="produits">
        <div className="loading">
          <div className="spinner"></div>
          <p>Chargement des produits...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="produits">
        <div className="error">
          <h2>Erreur</h2>
          <p>{error}</p>
          <button onClick={fetchProducts} className="retry-btn">
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="produits">
      <div className="produits-header">
        <h1>Nos Produits</h1>
        <p>Découvrez notre sélection de produits de qualité</p>
      </div>

      <div className="products-grid">
        {products.map(product => (
          <div 
            key={product.id} 
            className="product-card"
            onClick={() => handleProductClick(product)}
          >
            <div className="product-image">
              <img src={product.thumbnail} alt={product.title} />
              <div className="product-badge">
                -{Math.round(product.discountPercentage)}%
              </div>
            </div>
            <div className="product-info">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-brand">{product.brand}</p>
              <p className="product-description">
                {product.description.length > 80 
                  ? product.description.substring(0, 80) + '...' 
                  : product.description}
              </p>
              <div className="product-rating">
                <div className="stars">
                  {[...Array(5)].map((_, index) => (
                    <span 
                      key={index} 
                      className={index < Math.floor(product.rating) ? 'star filled' : 'star'}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="rating-text">({product.rating})</span>
              </div>
              <div className="product-price">
                <span className="current-price">{formatPrice(product.price)}</span>
                <span className="stock-info">{product.stock} en stock</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>
            <div className="modal-product">
              <div className="modal-images">
                <img src={selectedProduct.thumbnail} alt={selectedProduct.title} />
                <div className="product-images-grid">
                  {selectedProduct.images?.slice(0, 4).map((image, index) => (
                    <img key={index} src={image} alt={`${selectedProduct.title} ${index + 1}`} />
                  ))}
                </div>
              </div>
              <div className="modal-info">
                <h2>{selectedProduct.title}</h2>
                <p className="modal-brand">{selectedProduct.brand}</p>
                <p className="modal-category">Catégorie: {selectedProduct.category}</p>
                <div className="modal-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, index) => (
                      <span 
                        key={index} 
                        className={index < Math.floor(selectedProduct.rating) ? 'star filled' : 'star'}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span>({selectedProduct.rating})</span>
                </div>
                <p className="modal-description">{selectedProduct.description}</p>
                <div className="modal-price">
                  <span className="price">{formatPrice(selectedProduct.price)}</span>
                  <span className="discount">-{Math.round(selectedProduct.discountPercentage)}%</span>
                </div>
                <p className="stock-status">
                  {selectedProduct.stock > 0 
                    ? `${selectedProduct.stock} en stock` 
                    : 'Rupture de stock'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Produits;