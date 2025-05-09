import React from 'react';
import { useNavigate } from 'react-router-dom';   // Importamos useNavigate para la navegación 
import '../styles.css';
import Clima from './Clima';

function Home() {
  const navigate = useNavigate();

  const handleCasaClick = () => {
    navigate('/formulario-casa');
  };

  return (
    <div className="window">
      <div className="title-bar">
        <span>Libro de Obras Digital</span>
      </div>
      <div className="window-body">
        <h1 className="main-title">Bienvenido</h1>
        <p>Selecciona el tipo de proyecto:</p>
        <div className="button-group">
          <button className="xp-button" onClick={handleCasaClick}>Casa</button>
          <button className="xp-button">Edificio</button>
        </div>
        <Clima />
      </div>
    </div>
  );
}

export default Home;


