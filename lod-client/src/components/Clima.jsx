import { useEffect, useState } from 'react';

function Clima() {
  const [temp, setTemp] = useState(null);

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Santiago&appid=ceba3971e01e7ea59b94c71cb91d44e1&units=metric')
      .then(res => res.json())
      .then(data => setTemp(data.main.temp))
      .catch(err => console.error('Error al cargar el clima', err));
  }, []);

  return (
    <div style={{ fontSize: '14px', marginBottom: '10px' }}>
      {temp !== null ? <p>🌡️ Clima actual: {temp}°C en Santiago</p> : <p>Cargando clima...</p>}
    </div>
  );
}

export default Clima;
