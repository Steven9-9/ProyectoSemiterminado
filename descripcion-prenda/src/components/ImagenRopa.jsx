import React, { useState } from 'react';

const ImagenRopa = ({ id, nombre, imagen, precio, onAgregarAlCarrito,productoSeleccionado, isInCart, onImagenClick }) => {
  const [tallaSeleccionada, setTallaSeleccionada] = useState('');
  const tallasDisponibles = ['XS', 'S', 'M', 'L', 'XL'];
 

  const handleAgregarCarrito = () => {
    if (!tallaSeleccionada) {
      alert('Por favor, selecciona una talla.');
      return;
    }
  

    const producto = { id, nombre: productoSeleccionado.nombre, 
      precio:productoSeleccionado.precio,
       talla: tallaSeleccionada, 
       imagen: productoSeleccionado.imagen }; 

    alert(`"${nombre}" (${tallaSeleccionada}) se ha añadido al carrito.\nPrecio: ${precio}`);
    onAgregarAlCarrito(producto);

    
  };

  const handleTallaClick = (talla) => {
    setTallaSeleccionada(talla);
  };
  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  const toggleMostrarDetalles = () => {
   
  };
  const handleClickVerMasDetalles = () => {
    handleScrollUp(); 
    toggleMostrarDetalles();
  };

  const handleClickProducto = () => {
    onImagenClick(imagen);
  };
  

  return (
    <div className="product">
      <div className="tallas-overlay">
        {tallasDisponibles.map((talla, index) => (
          <div key={index} className={`talla ${tallaSeleccionada === talla ? 'selected' : ''}`} onClick={() => handleTallaClick(talla)}>
            {talla}
          </div>
        ))}
      </div>
      <img src={imagen} alt={nombre} onClick={handleClickProducto} />
      <div className="product-info">
        <h3>{nombre}</h3>
        <p>{precio}</p>
        {isInCart ? (
          <p>Ya está en el carrito</p>
        ) : (
          <>
            <button className="buy-btn" onClick={handleAgregarCarrito}>Agregar al carrito</button>
            <button className="details-btn" onClick={handleClickVerMasDetalles}>Ver más detalles</button>
          </>
        )}
      </div>
    </div>
  );
};

export default ImagenRopa;
