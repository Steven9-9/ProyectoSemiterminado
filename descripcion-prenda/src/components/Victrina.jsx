import ImagenRopa from './ImagenRopa';
import product1 from '../assets/Ropa/G-star/Buzos/g1.jpg';
import product2 from '../assets/Ropa/G-star/Buzos/g2.jpg';
import product3 from '../assets/Ropa/G-star/Buzos/g4.jpg';
import product4 from '../assets/Ropa/G-star/Buzos/g3.jpg';
import product5 from "../assets/Ropa/G-star/Buzos/g5Recortada.png";
import React, { useState } from 'react';


const Victrina = ({setProductoSeleccionado}) => {

  const [carrito, setCarrito] = useState([]);

  const products = [
    { id: 1, nombre: "Buzo Azul", referencia: "605D007-AZ135003", descripcion:"Buzo cerrado para mujer con capucha y cordón ajustable. Confeccionado con mezcla de algodón que te brindan suavidad. Bolsillo amplio en frente. Una prenda ideal para los días fríos. Este buzo tejido te otorga comodidad y frescura durante el día. Combínalo con tu pantalón o jean oscuro.", imagen: product1, precio: 150000},
    { id: 2, nombre: "Buzo Beige", referencia: "605D007-BE190034", descripcion:"Buzo beige cerrado, con un diseño elegante y moderno. Fabricado en algodán, un material resistente y duradero. Su tono neutro lo hace versátil, perfecto para combinar con cualquier atuendo. Cuenta con cierre seguro para mantener tus pertenencias protegidas. Ideal para llevar tus elementos esenciales con estilo en cualquier ocasión.", imagen: product2, precio: 200000 },
    { id: 3, nombre: "Buzo Negro Sin Chompa",referencia: "605D007-NE200034", descripcion:"Buzo negro sin capucha, confeccionado en una mezcla de licra y algodón para ofrecer comodidad y flexibilidad. Su diseño minimalista lo hace perfecto para lucir tanto en actividades deportivas como en ocasiones casuales. La combinación de materiales proporciona transpirabilidad y libertad de movimiento, mientras que el color negro añade un toque de elegancia. Una opción versátil y funcional para tu guardarropa.", imagen: product3, precio: 140000 },
    { id: 4, nombre: "Buzo Navy",referencia: "605D007-NA194378", descripcion:"Buzo de color navy con capucha, confeccionado en suave algodón para brindar comodidad y calidez. El tono navy, un clásico atemporal, agrega un toque de sofisticación a tu estilo casual. La capucha proporciona versatilidad, brindando protección adicional contra el viento y el frío. Ideal para lucir con jeans o pantalones deportivos para un look relajado pero elegante. Una pieza imprescindible para tu guardarropa de entretiempo.", imagen: product4, precio: 250000 },
    { id: 5, nombre: "Gaban Beige",referencia: "600D004-NEG194003", descripcion:"Gabán beige de alta calidad, elegante y versátil. Corte clásico con correa ajustable para resaltar la figura. Detalles discretos como botones frontales y bolsillos laterales. Ideal para ocasiones formales e informales, añade sofisticación a cualquier conjunto", 
    imagen: product5, precio: 1000000 },

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

export default Victrina;
