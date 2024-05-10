import React, { useState } from 'react';
import '../compraFinal.css'
import iconCerrar from "../../../proyecto-vitrina/src/assets/icons/btnCerrar.png"
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
const apiRegistroCompra = 'http://localhost:3001/registroCompra'
import Swal from 'sweetalert2';

function CompraFinal({resumenCompra, onClose}) {

  const handleCerrarVentana = () => {
    // Lógica para cerrar la ventana
    onClose();
  };

  const [datosFormulario, setDatosFormulario] = useState({
    nombre: '',
    apellido: '',
    tipoDocumento: 'Cedula',
    pais: '',
    ciudad: '',
    direccion: '',
    correoElectronico: '',
    celular: '',
    metodoPago: 'Tarjeta de Crédito'
  });

  const handleChange = (e) => {
    setDatosFormulario({
      ...datosFormulario,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const registroCompra = {
        id: uuidv4(),
        ...datosFormulario,
        productos: resumenCompra.productos,
        totalCompra: resumenCompra.totalCompra
      };
      await axios.post(apiRegistroCompra, registroCompra);
      Swal.fire("Compra exitosa");
      // Aquí puedes cerrar la ventana o hacer cualquier otra lógica necesaria después de registrar la compra
      onClose();
    } catch (error) {
      Swal.fire("Error al registra copmra");
    }
  };
  return (

    <>
   
    <div className="contenedor-formulario">
    <button className="btnCerrar"  onClick={handleCerrarVentana} >
      <img src= {iconCerrar} />
      </button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" value={datosFormulario.nombre} onChange={handleChange} required />

        <label htmlFor="apellido">Apellido:</label>
        <input type="text" id="apellido" name="apellido" value={datosFormulario.apellido} onChange={handleChange} required />

        <label htmlFor="tipoDocumento">Tipo de Documento:</label>
        <select id="tipoDocumento" name="tipoDocumento" value={datosFormulario.tipoDocumento} onChange={handleChange} required>
          <option value="Pasaporte">Pasaporte</option>
          <option value="Carnet de Extranjería">Carnet de Extranjería</option>
          <option value="Cédula">Cédula</option>
        </select>

        <label htmlFor="numeroDocumento">Número de Documento:</label>
        <input type="text" id="numeroDocumento" name="numeroDocumento" value={datosFormulario.numeroDocumento} onChange={handleChange} required />


        <label htmlFor="pais">País:</label>
        <input type="text" id="pais" name="pais" value={datosFormulario.pais} onChange={handleChange} required />

        <label htmlFor="ciudad">Ciudad:</label>
        <input type="text" id="ciudad" name="ciudad" value={datosFormulario.ciudad} onChange={handleChange} required />

        <label htmlFor="direccion">Dirección:</label>
        <input type="text" id="direccion" name="direccion" value={datosFormulario.direccion} onChange={handleChange} required />

        <label htmlFor="correoElectronico">Correo Electrónico:</label>
        <input type="email" id="correoElectronico" name="correoElectronico" value={datosFormulario.correoElectronico} onChange={handleChange} required />

        <label htmlFor="celular">Celular:</label>
        <input type="tel" id="celular" name="celular" value={datosFormulario.celular} onChange={handleChange} required />

        <label htmlFor="metodoPago">Método de Pago:</label>
        <select id="metodoPago" name="metodoPago" value={datosFormulario.metodoPago} onChange={handleChange} required>
          <option value="Tarjeta de Crédito">Tarjeta de Crédito</option>
          <option value="Transferencia Bancaria">Transferencia Bancaria</option>
          <option value="PayPal">PayPal</option>
        </select>

        <button type="submit">Finalizar Compra</button>
      </form>
  
    
    <div className="resumen-compra">
    {resumenCompra.productos.map((producto, index) => (
          <div key={index} className="producto-resumen">
            <img src={producto.imagen} alt="Producto"  />
            <div>
              <p>{producto.nombre}</p>
              <p>Precio: ${producto.precio}</p>
              <p>Cantidad: {producto.cantidad}</p>
              <p>Total: ${producto.total}</p>
            </div>
          </div>
        ))}
        <p>Total de la compra: {resumenCompra.totalCompra}</p>
    </div>
    </div>
   </>
  );
}

export default CompraFinal;
