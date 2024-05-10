import React, { useState } from "react";
import ImagenGalery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import CantidadCompra from "../CantidadCompra";
import Victrina from "./Victrina";
import "../../../proyecto-vitrina/src/indexVitrina.css";
import eslogan from "../assets/logoMarcas/g-star-logo.png";
import MenuMarcas from "../../../proyecto-vitrina/src/components/MenuMarcas";
import MenuLateral from "../../../proyecto-vitrina/src/components/MenuLateral";
import MenuUsuario from "../../../proyecto-vitrina/src/components/MenuUsuario";
import { Link } from "react-router-dom";
import Slider from "./Slider";
import LoginRopa from '../../../proyecto-vitrina/src/pages/LoginRopa'
import imgUno from "../assets/Ropa/G-star/Buzos/g5.1Recort.jpg";
import imgDos from "../assets/Ropa/G-star/Buzos/g5.2Recort.jpg";
import imgTres from "../assets/Ropa/G-star/Buzos/g5Recortada.png";
import BuzoAzul1 from  "../assets/Ropa/G-star/Buzos/g1.jpg";
import BuzoAzul2 from "../assets/Ropa/G-star/Buzos/g1.2.jpg";
import BuzoAzul3 from "../assets/Ropa/G-star/Buzos/g1.1.jpg";
import buzoBeige1 from '../assets/Ropa/G-star/Buzos/g2.jpg';
import buzoBeigi2 from '../assets/Ropa/G-star/Buzos/g2.2.jpg';
import buzoBeigi3 from '../assets/Ropa/G-star/Buzos/g2.3.jpg';
import buzoNegro1 from '../assets/Ropa/G-star/Buzos/g4.jpg';
import buzoNegro2 from '../assets/Ropa/G-star/Buzos/g4.1.jpg';
import buzoNegro3 from '../assets/Ropa/G-star/Buzos/g4.2.jpg';
import buzoNavy1 from '../assets/Ropa/G-star/Buzos/g3.jpg';
import buzoNavy2 from '../assets/Ropa/G-star/Buzos/g3.1.jpg';
import buzoNavy3 from '../assets/Ropa/G-star/Buzos/g3.2.jpg';
import Swal from "sweetalert2";

function DescripcionPrenda() {
  const [ productoSeleccionado, setProductoSeleccionado] = useState(null);

  const productoImagenes = {
  1: [
    {
      original: BuzoAzul1,
      thumbnail: BuzoAzul1,
    },
    {
      original: BuzoAzul2,
      thumbnail: BuzoAzul2,

    },
    {
      original: BuzoAzul3,
      thumbnail: BuzoAzul3,
    }
  ],
  2: [
    {
      original: buzoBeige1,
      thumbnail: buzoBeige1,
    },
    {
      original: buzoBeigi2,
      thumbnail: buzoBeigi2,

    },
    {
      original: buzoBeigi3,
      thumbnail: buzoBeigi3,
    }
  ],
  3: [
    {
      original: buzoNegro1,
      thumbnail: buzoNegro1,
    },
    {
      original: buzoNegro2,
      thumbnail: buzoNegro2,

    },
    {
      original: buzoNegro3,
      thumbnail: buzoNegro3,
    }
  ],
  4: [
    {
      original: buzoNavy1,
      thumbnail: buzoNavy1,
    },
    {
      original: buzoNavy2,
      thumbnail: buzoNavy2,

    },
    {
      original: buzoNavy3,
      thumbnail: buzoNavy3,
    }
  ],
  5: [
    {
      original: imgTres,
      thumbnail: imgTres,
    },
    {
      original: imgDos,
      thumbnail: imgDos,
    },
    {
      original: imgUno,
      thumbnail: imgUno,
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

        
        <Victrina setProductoSeleccionado={handleSeleccionarProducto} />
        {/* Use Context */}
      </div>
    </>
  );
}

export default DescripcionPrenda;
