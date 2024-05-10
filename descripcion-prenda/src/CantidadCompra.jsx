import React, { useState } from 'react';
import "./index.css";

const CantidadCompra = ({ onAgregarAlCarrito, productoSeleccionado }) => {
  const [mostrarOpciones, setMostrarOpciones] = useState(false);
  const [tallaSeleccionada, setTallaSeleccionada] = useState('');
  const [cantidad, setCantidad] = useState(1);

  const toggleOpciones = () => {
    setMostrarOpciones(!mostrarOpciones); // Cambiar estado al hacer clic
  };

  const handleSeleccionTalla = (talla) => {
    setTallaSeleccionada(talla);
    setMostrarOpciones(false); // Cerrar el menú al seleccionar talla
  };

  const handleIncrement = () => {
    if (cantidad < 10) {
      setCantidad(cantidad + 1);
    }
  };

  const handleDecrement = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const handleAgregarCarrito = () => {
    if (!tallaSeleccionada) {
      alert('Por favor, selecciona una talla.');
      return;
    }
    if (!productoSeleccionado) {
      alert('No hay ningún producto seleccionado.');
      return;
    }

    const producto = {
      nombre: productoSeleccionado.nombre,
    ref: productoSeleccionado.referencia,
    descripcion: productoSeleccionado.descripcion,
    precio: productoSeleccionado.precio,
    talla: tallaSeleccionada,
    cantidad: cantidad,
    imagen: productoSeleccionado.imagen
    };

    onAgregarAlCarrito(producto);

    setTallaSeleccionada('');
    setCantidad(1);

  };

  return (
    <>
      <div className="selector-cantidad">
        <button className="btn-menos" onClick={handleDecrement}>-</button>
        <input
          type="number"
          value={cantidad}
          readOnly
          className="input-cantidad"
        />
        <button className="btn-mas" onClick={handleIncrement}>+</button>
        <button className="btn-guardar" onClick={handleAgregarCarrito}>Agregar al carrito</button>
      </div>

      {/* Botón para seleccionar talla */}
      <div className="boton-desplegable">
        <button className="btn" onClick={toggleOpciones}>
          {tallaSeleccionada || 'Seleccione Talla'}
        </button>
        {mostrarOpciones && (
          <div className="opciones">
            <button onClick={() => handleSeleccionTalla('XS')}>XS</button>
            <button onClick={() => handleSeleccionTalla('S')}>S</button>
            <button onClick={() => handleSeleccionTalla('M')}>M</button>
            <button onClick={() => handleSeleccionTalla('L')}>L</button>
            <button onClick={() => handleSeleccionTalla('XL')}>XL</button>
            <button onClick={() => handleSeleccionTalla('XXL')}>XXL</button>
          </div>
        )}
      </div>
      
    </>
  );
};

export default CantidadCompra;
