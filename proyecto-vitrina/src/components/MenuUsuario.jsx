import React, { useState, useEffect, useRef } from "react";
import iconCarro from "../assets/icons/entrega.png";
import iconLogin from "../assets/icons/usuario.png";
import iconCompra from "../assets/icons/carrito-de-compras.png";
import iconLupa from "../assets/icons/lupa.png";
import iconTelefono from "../assets/icons/llamada-telefonica.png";
import CompraFinal from "../../../descripcion-prenda/src/components/CompraFinal"

function MenuUsuario({ toggleModal, productosCarrito, agregarAlCarrito, eliminarPrenda, completarCompra, eliminarCompra }) {
  const [mostrarCompra, setMostrarCompra] = useState(false);
  const [mostrarCompraFinal, setMostrarCompraFinal] = useState(false);
  const [resumenCompra, setResumenCompra] = useState({ productos: [], totalCompra: 0 });
  const menuCompraRef = useRef(null);

  const handleLoginClick = () => {
    toggleModal(); 
  };

  const handleCompletarCompra = () => {
    setMostrarCompraFinal(true);
   
    const resumen = calcularResumenCompra(); 
    setResumenCompra(resumen);
  };
  const handleCloseCompraFinal = () => {
    setMostrarCompraFinal(false);
  };

  const calcularResumenCompra = () => {
    const totalCompra = productosCarrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
    const productos = productosCarrito.map(producto => ({
      nombre: producto.nombre,
      precio: producto.precio,
      cantidad: producto.cantidad,
      imagen: producto.imagen,
      total: producto.precio * producto.cantidad
    }));
    return { productos, totalCompra };
  };


  const handleCompraClick = () => {
    setMostrarCompra(!mostrarCompra);
  };

  const handleClickOutside = (event) => {
    if (menuCompraRef.current && !menuCompraRef.current.contains(event.target)) {
      setMostrarCompra(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleEliminarPrenda = (index) => {
    const productoAEliminar = productosCarrito[index]; // Obtener el producto a eliminar
    eliminarPrenda(productoAEliminar); // Llamar a eliminarPrenda con el producto específico
  };

  return (
    <nav className="iconosVitrina" > 
    <div className="menuVitrina">
       
      <ul>
        <li>
          <div>
            <img className="iconVitrina" src={iconCarro} alt="Carrito" />
          </div>
        </li>


        <li><div onClick={handleLoginClick}><img style={{ position: 'absolute',
    width: '23px',
    marginLeft: '-67px',
    marginTop: '54px' }} className="iconVitrina" src={iconLogin} /></div></li>

        <li ref={menuCompraRef}>
          <div onClick={handleCompraClick}>
            <img style={{  position: 'relative', zIndex: 0, marginTop: '103px'}}  className="iconVitrina" src={iconCompra} alt="Compra" />
          </div>
          {mostrarCompra && (
            <div className="menu-desplegable">
      
              {productosCarrito.length > 0 ? (
                productosCarrito.map((producto, index) => (
                  <div key={index}>
                    <img src={producto.imagen} style={{ width: '100px', height: '160px', objectFit: 'cover' }} alt="Producto" />
                    <div className="descripcionRopa">
                      <p>Producto: {producto.nombre}</p>
                      <p>Talla: {producto.talla}</p>
                      <p>Cantidad: {producto.cantidad}</p>
                      <p>Precio: ${producto.precio}</p>
                      <button onClick={() => handleEliminarPrenda(index)} className="eliminar-btn">Eliminar</button>
                      <hr />
                    </div>
                  </div>
                ))
              ) : (
                <p>No hay productos en el carrito.</p>
              )}
              <button onClick={handleCompletarCompra} className="completar-btn">Completar Compra</button>
              <button onClick={eliminarCompra} className="completar-btn">Eliminar Compra</button>
              
            </div>
          )}
        </li>
        <li>
          <div>
            <img className="iconVitrina" src={iconLupa} alt="Buscar" />
          </div>
        </li>
        <li>
          <div>
            <img className="iconVitrina" src={iconTelefono} alt="Teléfono" />
          </div>
        </li>
      </ul>
      </div>
      {mostrarCompraFinal && <CompraFinal resumenCompra={resumenCompra} onClose={handleCloseCompraFinal} />}
    
    </nav>
  );
}

export default MenuUsuario;
