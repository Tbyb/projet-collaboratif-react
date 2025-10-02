import React from 'react';
import '../styles/Citations.css';

const Citations = () => {
  return (
    <div className="citations">
      <div className="citations-header">
        <h1>Citations Inspirantes</h1>
        <p>Section développée par Ndiawo</p>
      </div>
      <div className="work-in-progress">
        <div className="icon">💬</div>
        <h2>En cours de développement</h2>
        <p>Cette section sera bientôt remplie de citations inspirantes récupérées depuis l'API DummyJSON.</p>
      </div>
    </div>
  );
};

export default Citations;