import React, { useState } from "react";
import ImagenGalery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import CantidadCompra from "../CantidadCompra";
import VitrinaJeans from "./VitrinaJeans";
import "../../../proyecto-vitrina/src/indexVitrina.css";
import eslogan from "../assets/logoMarcas/g-star-logo.png";
import MenuMarcas from "../../../proyecto-vitrina/src/components/MenuMarcas";
import MenuLateral from "../../../proyecto-vitrina/src/components/MenuLateral";
import MenuUsuario from "../../../proyecto-vitrina/src/components/MenuUsuario";
import { Link } from "react-router-dom";
import Slider from "./Slider";
import LoginRopa from '../../../proyecto-vitrina/src/pages/LoginRopa';
import monjeans1 from "../assets/Ropa/G-star/jeans/g.j1.jpg";
import monjeans2 from "../assets/Ropa/G-star/jeans/g.j1.2.jpg";
import monjeans3 from "../assets/Ropa/G-star/jeans/g.j1.3.jpg";
import jeansGrisClarol1 from  "../assets/Ropa/G-star/jeans/g.j2.1.jpg";
import jeansGrisClaro2 from "../assets/Ropa/G-star/jeans/g.j2.2.jpg";
import jeansGrisClaro3 from "../assets/Ropa/G-star/jeans/g.j2.jpg";
import jeansRetro1 from '../assets/Ropa/G-star/jeans/g-j-h4.1.jpg';
import jeansRetro2  from '../assets/Ropa/G-star/jeans/g-j-h4.2.jpg';
import jeansRetro3 from '../assets/Ropa/G-star/jeans/g-j-h4.jpg';
import jeansClaro1 from '../assets/Ropa/G-star/jeans/g-j.3.2avif.jpg';
import jeansClaro2 from '../assets/Ropa/G-star/jeans/g-j.3.jpg';
import jeansClaro3 from '../assets/Ropa/G-star/jeans/g-j.3.3.jpg';
import jeansGris1 from '../assets/Ropa/G-star/jeans/g-j-h5.jpg';
import jeansGris2 from '../assets/Ropa/G-star/jeans/g-j-h5.1.jpg';
import jeansGris3 from '../assets/Ropa/G-star/jeans/g-j-h5.1.2.jpg';
import Swal from "sweetalert2";


function DescripcionJeans() {
  const [ productoSeleccionado, setProductoSeleccionado] = useState(null);

  const productoImagenes = {
  1: [
    {
      original: jeansGrisClarol1,
      thumbnail: jeansGrisClarol1,
    },
    {
      original: jeansGrisClaro2,
      thumbnail: jeansGrisClaro2,

    },
    {
      original: jeansGrisClaro3,
      thumbnail: jeansGrisClaro3,
    }
  ],
  2: [
    {
      original: jeansRetro1,
      thumbnail: jeansRetro1,
    },
    {
      original: jeansRetro2,
      thumbnail:jeansRetro2,

    },
    {
      original: jeansRetro3,
      thumbnail: jeansRetro3,
    }
  ],
  3: [
    {
      original: jeansClaro1,
      thumbnail:jeansClaro1,
    },
    {
      original: jeansClaro2,
      thumbnail: jeansClaro2,

    },
    {
      original: jeansClaro3,
      thumbnail: jeansClaro3,
    }
  ],
  4: [
    {
      original: monjeans1,
      thumbnail: monjeans1,
    },
    {
      original: monjeans2,
      thumbnail: monjeans2,

    },
    {
      original: monjeans3,
      thumbnail: monjeans3,
    }
  ],
  5: [
    {
      original: jeansGris1,
      thumbnail: jeansGris1,
    },
    {
      original: jeansGris2,
      thumbnail: jeansGris2,
    },
    {
      original: jeansGris3,
      thumbnail: jeansGris3,
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

        
        <VitrinaJeans setProductoSeleccionado={handleSeleccionarProducto} />
        {/* Use Context */}
      </div>
    </>
  );
}

export default DescripcionJeans;
