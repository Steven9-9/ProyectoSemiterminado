import React, { useState } from "react";
import ImagenGalery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import CantidadCompra from "../CantidadCompra";
import VitrinaTenis from "./VitrinaTenis";
import "../../../proyecto-vitrina/src/indexVitrina.css";
import eslogan from "../assets/logoMarcas/g-star-logo.png";
import MenuMarcas from "../../../proyecto-vitrina/src/components/MenuMarcas";
import MenuLateral from "../../../proyecto-vitrina/src/components/MenuLateral";
import MenuUsuario from "../../../proyecto-vitrina/src/components/MenuUsuario";
import { Link } from "react-router-dom";
import Slider from "./Slider";
import LoginRopa from '../../../proyecto-vitrina/src/pages/LoginRopa'

import botasBeige1 from "../assets/Ropa/G-star/tenis/g-z-m4.1.jpg";
import botasBeige2 from "../assets/Ropa/G-star/tenis/g-z-m4.2.jpg";
import botasBeige3 from "../assets/Ropa/G-star/tenis/g-z-m4.jpg";
import botinesNegros1 from  "../assets/Ropa/G-star/tenis/g-z-m5.1.jpg";
import botinesNegros2 from "../assets/Ropa/G-star/tenis/g-z-m5.2.jpg";
import botinesNegros3 from "../assets/Ropa/G-star/tenis/g-z-m5.jpg";
import botasArena1 from '../assets/Ropa/G-star/tenis/g-z1.2.jpg';
import botasArena2 from '../assets/Ropa/G-star/tenis/g-z1.3.jpg';
import botasArena3 from '../assets/Ropa/G-star/tenis/g-z1.jpg';
import tenisBlancos1 from '../assets/Ropa/G-star/tenis/g-z2.1.jpg';
import tenisBlancos2 from '../assets/Ropa/G-star/tenis/g-z2.3.jpg';
import tenisBlancos3 from '../assets/Ropa/G-star/tenis/g-z2.jpg';
import bramaNegra1 from '../assets/Ropa/G-star/tenis/g-z3.1.jpg';
import bramaNegra2 from '../assets/Ropa/G-star/tenis/g-z3.2.jpg';
import bramaNegra3 from '../assets/Ropa/G-star/tenis/g-z2.jpg';
import Swal from "sweetalert2";
function DescripcionTenis() {
  const [ productoSeleccionado, setProductoSeleccionado] = useState(null);

  const productoImagenes = {
  1: [
    {
      original: botasBeige1,
      thumbnail: botasBeige1,
    },
    {
      original: botasBeige2,
      thumbnail: botasBeige2,

    },
    {
      original: botasBeige3,
      thumbnail: botasBeige3,
    }
  ],
  2: [
    {
      original: botinesNegros1,
      thumbnail: botinesNegros1,
    },
    {
      original: botinesNegros2,
      thumbnail: botinesNegros2,

    },
    {
      original: botinesNegros3,
      thumbnail: botinesNegros3,
    }
  ],
  3: [
    {
      original:  botasArena1,
      thumbnail: botasArena1,
    },
    {
      original: botasArena2,
      thumbnail: botasArena2,

    },
    {
      original: botasArena3,
      thumbnail: botasArena3,
    }
  ],
  4: [
    {
      original: tenisBlancos1,
      thumbnail: tenisBlancos1,
    },
    {
      original: tenisBlancos2,
      thumbnail: tenisBlancos2,

    },
    {
      original: tenisBlancos3,
      thumbnail: tenisBlancos3,
    }
  ],
  5: [
    {
      original: bramaNegra1,
      thumbnail: bramaNegra1,
    },
    {
      original: bramaNegra2,
      thumbnail: bramaNegra2,
    },
    {
      original: bramaNegra3,
      thumbnail: bramaNegra3,
    }
  ],
  }
  const handleSeleccionarProducto = (producto) => {
    setProductoSeleccionado(producto);
  };

  const slides = [
    'Respaldo total del envío',
    'SU+PAY / Descuentos',
    'OFERTAS ESPECIALES'
  ]

  const [productosCarrito, setProductosCarrito] = useState([]);

  const agregarProductoAlCarrito = (producto) => {
    setProductosCarrito([...productosCarrito, producto]);
    Swal.fire("Se agrego el producto");
  };

  const eliminarPrenda = (productoAEliminar) => {
    
    setProductosCarrito(productosCarrito.filter(producto => producto !== productoAEliminar));
  };

  return (
    <>
      <div className="ProyectoVitrinaEstilos">
        <div>
          <Slider slides={slides} />
        </div>
        <header className="headerVitrina">
          <div className='logoPrincipal'><Link to="/"><img src={eslogan} alt="Eslogan" /></Link></div>
          <div className="marcasVitrina">
            <MenuUsuario eliminarPrenda={eliminarPrenda}
            productosCarrito={productosCarrito} agregarProductoAlCarrito={agregarProductoAlCarrito}  />
            <MenuMarcas />
            <MenuLateral />
            <LoginRopa />
          </div>
        </header>
        <div style={{ width: "60vw", margin: "30px" }}>
        {productoSeleccionado && productoImagenes[productoSeleccionado.id] && (
            <ImagenGalery
              className="carrusel"
              items={productoImagenes[productoSeleccionado.id]} // Utiliza las imágenes del producto seleccionado
              showFullscreenButton={false}
              showPlayButton={false}
              showNav={false}
              showThumbnails={true}
              thumbnailPosition="right"
            />
)}
        </div>
        <section className="descripcion">

  {productoSeleccionado && (
    
    <>
      <h1>{productoSeleccionado.nombre}</h1>
      <p>REF: {productoSeleccionado.referencia}</p>
      <p>{productoSeleccionado.descripcion}</p>
      <h1>$ {productoSeleccionado.precio}</h1>
    </>
  )}
          <CantidadCompra onAgregarAlCarrito={agregarProductoAlCarrito} productoSeleccionado={productoSeleccionado}/>
        </section>

        
        <VitrinaTenis setProductoSeleccionado={handleSeleccionarProducto} />
        {/* Use Context */}
      </div>
    </>
  );
}

export default DescripcionTenis;
