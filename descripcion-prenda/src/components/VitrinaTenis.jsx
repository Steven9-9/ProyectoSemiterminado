import ImagenRopa from './ImagenRopa';
import product1 from '../assets/Ropa/G-star/tenis/g-z-m4.jpg';
import product2 from '../assets/Ropa/G-star/tenis/g-z-m5.jpg';
import product3 from '../assets/Ropa/G-star/tenis/g-z1.jpg';
import product4 from '../assets/Ropa/G-star/tenis/g-z2.jpg';
import product5 from "../assets/Ropa/G-star/tenis/g-z3.jpg";
import React, { useState } from 'react';


const VitrinaTenis = ({setProductoSeleccionado}) => {

  const [carrito, setCarrito] = useState([]);

  const products = [
    { id: 1, nombre: "Botas Beige", referencia: "605D007-BG135003", descripcion:"Estas botas beige son un elegante equilibrio entre estilo y versatilidad. Su tono neutro aporta un toque de suavidad y calidez a cualquier conjunto. Fabricadas con cuero de alta calidad, estas botas ofrecen durabilidad y comodidad sin comprometer el estilo.", imagen: product1, precio: 600000},
    { id: 2, nombre: "Botines Negros ", referencia: "605D007-NG190034", descripcion:"Estos botines de tacón negro son la combinación perfecta de elegancia y estilo. Confeccionados en un lujoso cuero negro, emanan una sofisticación atemporal. Su diseño moderno y versátil los convierte en un elemento imprescindible en cualquier guardarropa. ", imagen: product2, precio: 900000 },
    { id: 3, nombre: "Botas Arena",referencia: "605D007-AR200034", descripcion:"Las botas arena son un símbolo de elegancia y sofisticación. Su tono suave y cálido evoca la serenidad de las playas bañadas por el sol. Fabricadas con materiales de primera calidad, estas botas ofrecen un ajuste cómodo y una sensación de lujo con cada paso. ", imagen: product3, precio: 600000 },
    { id: 4, nombre: "Tenis Blancos",referencia: "605D007-BL194378", descripcion:"Estos tenis blancos son una declaración de estilo fresco y atemporal. Con su color blanco puro y limpio, irradian una sensación de frescura y pureza. Fabricados con materiales de alta calidad y un diseño aerodinámico, estos tenis ofrecen comodidad y estilo en igual medida", imagen: product4, precio:500000 },
    { id: 5, nombre: "Bramas Negra",referencia: "600D004-NRG194003", descripcion:"Estas botas negras son un clásico atemporal que nunca pasa de moda. Su elegancia y versatilidad las convierten en un elemento básico imprescindible en cualquier guardarropa. Fabricadas con cuero de alta calidad y acabadas con atención al detalle, estas botas ofrecen durabilidad y estilo incomparables. ", 
    imagen: product5, precio:700000 },
   

  ];

  const addToCart = (producto) => {
    setCarrito([...carrito, producto]);
  };


  const handleClickProducto = (product) => {
    console.log(product);
    setProductoSeleccionado(product)
  };

  return (
    <div className="product-container">
      {products.map((product) => (
         <div key={product.id} onClick={() => handleClickProducto(product)}>
   <ImagenRopa
  key={product.id}
  {...product}
  onImagenClick={handleClickProducto} 
  addToCart={addToCart}
  isInCart={carrito.some((item) => item.id === product.id)}
  onAgregarAlCarrito={handleClickProducto}
  productoSeleccionado={product}
  
/>
        </div>
      ))}
    </div>
  );
};

export default VitrinaTenis;