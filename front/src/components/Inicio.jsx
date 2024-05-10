
import MenuAccesorios from "../MenuAccesorios";
import MenuColeccion from "../MenuColeccion";
import MenuEventos from "../MenuEventos";
import MenuMarcas from "../MenuMarcas";
import MenuUsuario from "../MenuUsuarioUno";
import NuevaColeccion from "../NuevaColeccion";
import SliderPrincipal from "../SliderPrincipal";
import imgPublicidad from "../assets/publicidad/su+pay.png";
import ServicioCliente from "./ServicioCliente";
import Footer from "./Footer";
import Slider from "./Slider";
import MenuLateral from "./MenuLateral";
import Popup from "./VentanaSuscripcion";
import Login from "../Login";
import React, { useState } from 'react';






function Inicio() {

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
  <>
      <section className="inicio">
      <Popup />

      <header>

  
    <div>
      <Slider slides={slides} />
    </div>
  

<section className="marcas"> 

<MenuLateral />
<MenuMarcas />
<MenuUsuario productosCarrito={productosCarrito}/>

<Login />


</section>

</header>

<SliderPrincipal />

<div className="menuEmpresa" >

<MenuColeccion />
<MenuAccesorios />
<MenuEventos />

</div>

<div >

<NuevaColeccion />

</div>

<div className="fidelizacion">

    <div><a href=""><img src={imgPublicidad} /></a></div>

</div>

<div>

<ServicioCliente />

</div>

<footer>

<Footer  />

</footer>

</section>

</>

  );
};

export default Inicio;
