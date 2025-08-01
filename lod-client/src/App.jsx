import { BrowserRouter, Routes, Route } from 'react-router-dom';   // Importamos BrowserRouter, Routes y Route
import Home from './components/Home.jsx';
import CasaForm from './components/CasaForm.jsx';

const App = () => {
  return (
    <BrowserRouter>   
      <Routes>
        <Route path="/" element={<Home />} />                       {/* Ruta Principal  */}
        <Route path="/formulario-casa" element={<CasaForm />} />
        <Route path="/formulario-edificio" element={<CasaForm />} />   {/* path = ruta */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
