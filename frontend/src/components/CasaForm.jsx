import React from 'react';
import { useNavigate } from 'react-router-dom';   // Importamos useNavigate para la navegación


function CasaForm() {

   const navigate = useNavigate();
  
   const handleBackClick = () => {
    navigate('/');   // Navegamos a la ruta principal
  };


  return (
    <div className="window">
      <div className="title-bar">
        <span>Formulario - Casa</span>
      </div>
      <div className="window-body">
        <h2>Datos del Proyecto Casa</h2>
        <form>
          <label>
            Nombre del proyecto:
            <input type="text" name="nombre" />
          </label>
          <br />
          <label>
            Dirección:
            <input type="text" name="direccion" />
          </label>
          <br />
          <label>
            Fecha de entrega:
            <input type="date" name="fecha" />
          </label>
          <br />
          <label>
            Comentarios:
            <textarea className='coment' name="comentarios" />
          </label>
          <br />
           <div style={{ display: 'flex', gap: '10px' }}>
             <button className="xp-button" type="submit">Guardar</button>
             <button className="xp-button" type="submit" onClick={handleBackClick}>Volver</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CasaForm;
