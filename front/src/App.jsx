import React from 'react';
import Inicio from './components/Inicio';
import ProyectoVitrina from "../../proyecto-vitrina/src/components/ProyectoVitrina";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import DescripcionPrenda from '../../descripcion-prenda/src/components/DescripcionPrenda';
import DescripcionJeans from '../../descripcion-prenda/src/components/DescripcionJeans';
import DescripcionTenis from '../../descripcion-prenda/src/components/DescripcionTenis';
import DescripcionAccesorios from '../../descripcion-prenda/src/components/DescripcionAccesorios'


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route path="/proyecto-vitrina" element={<ProyectoVitrina />} />
          <Route path="/descripcion" element={<DescripcionPrenda />}/>
          <Route path="/descripcionJeans" element={<DescripcionJeans />}/>
          <Route path="/descripcionAccesorios" element={<DescripcionAccesorios />}/>
          <Route path="/descripcionTenis" element={<DescripcionTenis />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
