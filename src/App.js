import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Navigation from './components/Navigation';
import Accueil from './components/Accueil';
import Produits from './components/Produits';
import Citations from './components/Citations';
import Articles from './components/Articles';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/accueil" element={<Accueil />} />
            <Route path="/produits" element={<Produits />} />
            <Route path="/citations" element={<Citations />} />
            <Route path="/articles" element={<Articles />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
