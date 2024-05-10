import iconCarro from "./assets/icons/entrega.png";
import iconLogin from "./assets/icons/usuario.png";
import iconCompra from "./assets/icons/carrito-de-compras.png";
import iconLupa from "./assets/icons/lupa.png";
import iconTelefono from "./assets/icons/llamada-telefonica.png";
import React, { useState } from 'react';

function MenuUsuario({ toggleModal}) {

  const [mostrarCompra, setMostrarCompra] = useState(false);

  const handleLoginClick = () => {
    toggleModal(); // Llamamos a la función toggleModal del componente Login cuando se hace clic en el icono de login
  };
  const handleCompraClick = () => {
    setMostrarCompra(!mostrarCompra);
  };
 

  return (
    <div className="iconos">
      <ul className="menu">
        <li><div><img className="icon" src={iconCarro} /></div></li>
        <li><div onClick={handleLoginClick}><img className="icon" src={iconLogin} /></div></li>
        <li><div onClick={handleCompraClick}>
            <img className="icon" src={iconCompra} alt="Compra" />
          </div></li>
        <li><div><img className="icon" src={iconLupa} /></div></li>
        <li><div><img className="icon" src={iconTelefono} /></div></li>
      </ul>
    </div>
  );
};

export default MenuUsuario;