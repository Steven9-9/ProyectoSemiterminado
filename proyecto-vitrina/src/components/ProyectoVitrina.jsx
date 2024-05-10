// ProyectoVitrina
import Slider from '../components/Slider';
import MenuMarcas from '../components/MenuMarcas';
import MenuUsuario from '../components/MenuUsuario';
import MenuLateral from '../components/MenuLateral';
import VictinaRopa from '../components/VitrinaRopa';
import eslogan from '../assets/eslogans/g-star-logo.png';
import { Link, Routes, Route } from "react-router-dom";
import Footer from '../../../front/src/components/Footer';
import Login from '../pages/LoginRopa';
import React, { useState } from "react";
import DescripcionPrenda from '../../../descripcion-prenda/src/components/DescripcionPrenda';
import DescripcionJeans from '../../../descripcion-prenda/src/components/DescripcionJeans';
import DescripcionTenis from '../../../descripcion-prenda/src/components/DescripcionTenis';
import DescripcionAccesorios from '../../../descripcion-prenda/src/components/DescripcionAccesorios'


function ProyectoVitrina() {
  const slides = [
    'Respaldo total del envío',
    'SU+PAY / Descuentos',
    'OFERTAS ESPECIALES'
  ];
  const [productosCarrito, setProductosCarrito] = useState([]);

  const agregarProductoAlCarrito = (producto) => {
    setProductosCarrito([...productosCarrito, producto]);
  };

  return (
    <div className="ProyectoVitrinaEstilos">
      <div>
        <Slider slides={slides} />
      </div>

      <header className="headerVitrina">
        <div className='logoPrincipal'><Link to="/"><img  className="logoPrincipal" src={eslogan} alt="Eslogan" /></Link></div>
        <div className="marcasVitrina">
          <MenuUsuario productosCarrito={productosCarrito} agregarAlCarrito={agregarProductoAlCarrito}  />
          <MenuMarcas />
          <MenuLateral />
          <Login />
        </div>
      </header>

      <div>
        <Routes>
          <Route exact path="/" element={<VictinaRopa />} />
          <Route exact path="/descripcion" element={<DescripcionPrenda />} />
          <Route exact path="/descripcionJeans" element={<DescripcionJeans />} />
          <Route exact path="/descripcionAccesorios" element={<DescripcionAccesorios />} />
          <Route exact path="/descripcionTenis" element={<DescripcionTenis />} />
        </Routes>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default ProyectoVitrina;
