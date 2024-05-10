import React, { useState, useEffect } from 'react';
import img from "../assets/publicidad/imgSuscripcion.jpg";
import Swal from "sweetalert2";


const Popup = () => {
  const [mostrarPopup, setMostrarPopup] = useState(true);
  const [email, setEmail] = useState('');
  const [emailsRegistrados, setEmailsRegistrados] = useState(() => {
    const storedEmails = localStorage.getItem('emailsRegistrados');
    return storedEmails ? JSON.parse(storedEmails) : [];
  });

  useEffect(() => {
    const cerrarPopup = (event) => {
      if (mostrarPopup && !document.getElementById('popup').contains(event.target)) {
        setMostrarPopup(false);
      }
    };

    document.body.addEventListener('click', cerrarPopup);

    return () => {
      document.body.removeEventListener('click', cerrarPopup);
    };
  }, [mostrarPopup]);

  const validarCorreo = (email) => {
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(email);
  };

  const handleClickSuscribirse = () => {
    if (validarCorreo(email)) {
      if (!emailsRegistrados.includes(email)) {
        const nuevosEmailsRegistrados = [...emailsRegistrados, email];
        setEmailsRegistrados(nuevosEmailsRegistrados);
        localStorage.setItem('emailsRegistrados', JSON.stringify(nuevosEmailsRegistrados));

        Swal.fire({
          title: "Bienvenido",
          text: "Gracias por suscribirte",
          icon: "success",
        });

        handleClickCerrar();
      } else {
        
        Swal.fire({
          title: "¡El correo electrónico yaa está registrado!",
          text: "Ingresa uno nuevo",
          icon: "warning",
        });

        
        
      }
    } else {

      
      Swal.fire({
        title: "Ooops",
        text: "¡El formato del correo electrónico es inválido!",
        icon: "error",
        
      });
    }
  };

  const handleClickCerrar = () => {
    setMostrarPopup(false);
  };

  return (
    mostrarPopup && (
      <div className="popup-fondo" >
        <div id="popup" className="popup">
          <div className="popup-contenido">
            <img src={img} alt="Imagen de suscripción"/>
            <span className="cerrar" onClick={handleClickCerrar}>&times;</span>
            <h2>¡Suscríbete!</h2>
            <p>¿Deseas recibir nuestras últimas noticias y actualizaciones?</p>
            <input
              style={{ textAlign: "center"}}
              type="email" 
              placeholder="Ingrese su correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btnSuscripcion" onClick={handleClickSuscribirse}>Suscribirse</button>
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;
