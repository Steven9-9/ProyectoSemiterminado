import ImagenRopa from './ImagenRopa';
import product1 from '../assets/Ropa/G-star/jeans/g.j1.jpg';
import product2 from '../assets/Ropa/G-star/jeans/g-j-h4.jpg';
import product3 from '../assets/Ropa/G-star/jeans/g-j.3.jpg';
import product4 from '../assets/Ropa/G-star/jeans/g.j2.jpg';
import product5 from "../assets/Ropa/G-star/jeans/g-j-h5.jpg";
import React, { useState } from 'react';


const VitrinaJeans = ({setProductoSeleccionado}) => {

  const [carrito, setCarrito] = useState([]);

  const products = [
    { id: 1, nombre: "mon jeans", referencia: "605D007-MO135003", descripcion:"El diseño del mon jean es práctico y funcional, sin dejar de lado el estilo. ofrece libertad de movimiento para cualquier actividad", imagen: product1, precio: 500000},
    { id: 2, nombre: "jean Gris ", referencia: "605D007-RE190034", descripcion:"El jean gris es una opción moderna y versátil para cualquier ocasión. Confeccionado en un suave y flexible denim de color gris, este pantal", imagen: product2, precio: 4500000 },
    { id: 3, nombre: "jean claro",referencia: "605D007-CL200034", descripcion:"El jean clásico es la personificación del estilo atemporal y la versatilidad. Fabricado con denim resistente y duradero, este pantalón es un símbolo de la moda que nunca pasa de moda.", imagen: product3, precio: 400000 },
    { id: 4, nombre: "jean rectro",referencia: "605D007-AZ194378", descripcion:" El jean reto desafía las convenciones con su diseño audaz y único. Confeccionado en denim resistente, este pantalón es una declaración de estilo..", imagen: product4, precio: 400000 },
    { id: 5, nombre: "jean gris claro",referencia: "600D004-GRG194003", descripcion:"El jean gris claro es una opción moderna y versátil para cualquier ocasión. Confeccionado en un suave y flexible denim de color gris, este pantal", 
    imagen: product5, precio: 500000 },
   

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

export default VitrinaJeans;
