import React from 'react';
import '../styles.css';



function Home() {
  return (
    <div className="window">
      <div className="title-bar">
        <span>Libro de Obras Digital</span>
      </div>
      <div className="window-body">
        <h1 className="main-title">Bienvenido</h1>
        <p>Selecciona el tipo de proyecto:</p>
        <div className="button-group">
          <button className="xp-button">Casa</button>
          <button className="xp-button">Edificio</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
