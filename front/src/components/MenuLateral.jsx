import img from "../assets/icons/menu.png";
import React, { useState } from 'react';




const MenuLateral= () =>{

  // Función para alternar el menú
  const toggleMenu = () => {
    var menu = document.getElementById('menuLateral');
    if (menu.style.width === '0px' || menu.style.width === '') {
      menu.style.width = '350px';
    } else {
      menu.style.width = '0';
    }
  };

  return (
    <div className="lateral">
      {/* Botón para alternar el menú */}
      <button className="botonBarra" onClick={toggleMenu}><img src={img} alt="iconMenu"/></button>

      {/* Menú lateral */}
      <div id="menuLateral" className="menuLateral1">
        {/* Contenido del menú */}
        <h3>HOMBRE</h3>
        <a href="#">Camisas</a>
        <a href="#">Buzos</a>
        <a href="#">Jeans</a>
        <a href="#">Chaquetas</a>
        <a href="#">Accesorios</a>

        <h3>MUJER</h3>
        <a href="#">Camisas</a>
        <a href="#">Buzos</a>
        <a href="#">Jeans</a>
        <a href="#">Chaquetas</a>
        <a href="#">Accesorios</a>
      </div>
    </div>
  );
};

export default MenuLateral;