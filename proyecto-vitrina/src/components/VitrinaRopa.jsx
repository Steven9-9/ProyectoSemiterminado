import React from 'react';
import ImagenRopa from './ImagenRopa';
import product1 from '../assets/G-star/Buzos/g5Recortada.png';
import product2 from '../assets/G-star/jeans/g-j-h5.1.2.jpg';
import product3 from '../../../descripcion-prenda/src/assets/Ropa/G-star/accesorios/gorra.jpg';
import product4 from '../assets/G-star/tenis/g-z1.jpg';
import { Link } from "react-router-dom";


const products = [
  { name: 'Chaquetas', image: product1, path: '/descripcion' },
  { name: 'Jeans', image: product2, path: '/descripcionJeans'},
  { name: 'Accesorios', image: product3, path: '/descripcionAccesorios', description: 'Descripción de accesorios'},
  { name: 'Calzado', image: product4, path: '/descripcionTenis', description: 'Descripción de tenis'},
];

const VictinaRopa = () => {
  return (
    <div className="product-container-vitrina">
    <h1 style={{ position: "absolute", marginTop: "-660px" }}>
     CATEGORIAS
   </h1>
     {products.map((product, index) => (
       <Link key={index} to={{ pathname: product.path, state: { imagenes: product.imagenes} }}>
         <ImagenRopa key={index} {...product} />
       </Link>
     ))}
   </div>
  );
};

export default VictinaRopa;
