import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/module.css'
import MultipleSelect from './MultipleSelect';
import BasicTextFields from './BasicTextFields';


function CasaForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: '',
    direccion: '',
    fecha: '',
    comentarios: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('📦 Datos enviados:', formData);
    // Aquí puedes agregar lógica de guardado o generación de PDF
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="window" style={{ maxWidth: 500, margin: '2rem auto',color:'white' }}>
      <div className="title-bar">
        <span> Acta de recepción casa</span>
      </div>
      <div className="window-body">
        <h2 style={{ textAlign: 'center',color:'white' }}>Datos del Proyecto</h2>
        <form onSubmit={handleSubmit} className="form">
          <label>
            Nombre del proyecto:
            <BasicTextFields/>
          </label>
          <br />
          <label>
            Dirección:
            <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} />
          </label>
          <br />
          <label>
            Fecha de recepcion:
            <input type="date" name="fecha" value={formData.fecha} onChange={handleChange} />
          </label>
          <br />
          <label>
            Trabajos a recepcionar:
               <MultipleSelect/>
          </label>
          <br />
          <label>
            Observaciones:
            <textarea name="comentarios" value={formData.comentarios} onChange={handleChange} />
          </label>
          <br />
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <button className="xp-button" type="submit">Guardar</button>
            <button className="xp-button" type="button" onClick={handleBackClick}>Volver</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CasaForm;
