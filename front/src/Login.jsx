import React, { useState, useEffect } from 'react';
import MenuUsuario from '../src/MenuUsuarioUno';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'; // Importar la función v4 de uuid
const apiUsuariosURL = 'http://localhost:5172/usuario';

const Login = () => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [esIniciarSesion, setEsIniciarSesion] = useState(true);
  const [usuarios, setUsuarios] = useState([]);

  // Cargar usuarios desde la API al iniciar el componente
  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        const respuesta = await axios.get(apiUsuariosURL);
        const datosUsuarios = respuesta.data;
        setUsuarios(datosUsuarios);
        localStorage.setItem('usuarios', JSON.stringify(datosUsuarios));
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
      }
    };

    obtenerUsuarios();
  }, []);

  const alternarModal = () => {
    setMostrarModal(!mostrarModal);
  };

  const cambiarFormulario = () => {
    setEsIniciarSesion(!esIniciarSesion);
  };

  const manejarEnvio = (evento, datosUsuario) => {
    evento.preventDefault();

    // Verificar las credenciales del usuario utilizando los datos cargados de usuarios.json
    const usuarioEncontrado = usuarios.find(
        (usuario) => usuario.correo === datosUsuario.correo && usuario.contrasena === datosUsuario.contrasena
    );

    if (usuarioEncontrado) {
        // Usuario autenticado correctamente
        alert(`¡Bienvenido, ${usuarioEncontrado.correo}!`);
        // Aquí puedes realizar más acciones, como redirigir al usuario a otra página si es necesario
    } else {
        // Credenciales incorrectas
        alert('Correo electrónico o contraseña incorrectos. Por favor, inténtalo de nuevo.');
    }
};


  const manejarRegistro = async (datosUsuario) => {
    try {
        // Generar un ID único utilizando uuid
        const nuevoIdUsuario = uuidv4();
        
        // Asignar el ID al nuevo usuario
        datosUsuario.id = nuevoIdUsuario;

        // Realiza una solicitud POST a la API para registrar al usuario
        const respuesta = await axios.post(apiUsuariosURL, datosUsuario);
        const nuevoUsuario = respuesta.data; // Datos del usuario de la respuesta

        // Actualiza el JSON y localStorage
        const usuariosActualizados = [...usuarios, nuevoUsuario];
        setUsuarios(usuariosActualizados);
        localStorage.setItem('usuarios', JSON.stringify(usuariosActualizados));
        
        alternarModal(); // Cierra el modal
        alert('¡Te has registrado correctamente!');
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        alert('Ocurrió un error al registrarse. Inténtalo de nuevo.');
    }
};

  return (
    <div>
      <MenuUsuario toggleModal={alternarModal} />

      {mostrarModal && (
        <div className="modal-overlay" onClick={alternarModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={alternarModal}>Cerrar</button>
            {esIniciarSesion ? (
              <LoginForm onSubmit={manejarEnvio} switchForm={cambiarFormulario} />
            ) : (
              <RegisterForm onSubmit={manejarRegistro} switchForm={cambiarFormulario} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const LoginForm = ({ onSubmit, switchForm }) => {
  const [datosUsuario, setDatosUsuario] = useState({ correo: '', contrasena: '' });

  const handleChange = (evento) => {
    setDatosUsuario({ ...datosUsuario, [evento.target.name]: evento.target.value });
  };

  return (
    <form onSubmit={(evento) => onSubmit(evento, datosUsuario)} className="login-form">
      <h2>Iniciar Sesión</h2>
      <div className="form-group">
        <label htmlFor="correo">Correo</label>
        <input type="email" id="correo" name="correo" value={datosUsuario.correo} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="contrasena">Contraseña</label>
        <input type="password" id="contrasena" name="contrasena" value={datosUsuario.contrasena} onChange={handleChange} required />
      </div>
      <button type="submit" className="submit-btn">Iniciar Sesión</button>
      <p className="switch-form">¿No tienes una cuenta? <span onClick={switchForm}>Registrarse</span></p>
    </form>
  );
};

const RegisterForm = ({ onSubmit, switchForm }) => {
  const [datosUsuario, setDatosUsuario] = useState({ correo: '', contrasena: '', confirmarContrasena: '' });

  const handleChange = (evento) => {
    setDatosUsuario({ ...datosUsuario, [evento.target.name]: evento.target.value });
  };

  const validarCorreo = (correo) => {
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(correo);
  };

  const validarContrasena = (contrasena) => {
    const regexContrasena = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return regexContrasena.test(contrasena);
  };

  const manejarRegistro = async (evento) => {
    evento.preventDefault();
    const { correo, contrasena, confirmarContrasena } = datosUsuario;
    if (!validarCorreo(correo)) {
      alert('Por favor, introduce un correo electrónico válido.');
      return;
    }
    if (!validarContrasena(contrasena)) {
      alert('La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número.');
      return;
    }
    if (contrasena !== confirmarContrasena) {
      alert('Las contraseñas no coinciden.');
      return;
    }
    onSubmit(datosUsuario);
  };

  return (
    <form onSubmit={manejarRegistro} className="register-form">
      <h2>Registrarse</h2>
      <div className="form-group">
        <label htmlFor="correo">Correo</label>
        <input type="email" id="correo" name="correo" value={datosUsuario.correo} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="contrasena">Contraseña</label>
        <input type="password" id="contrasena" name="contrasena" value={datosUsuario.contrasena} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="confirmarContrasena">Confirmar Contraseña</label>
        <input type="password" id="confirmarContrasena" name="confirmarContrasena" value={datosUsuario.confirmarContrasena} onChange={handleChange} required />
      </div>
      <button type="submit" className="submit-btn">Registrarse</button>
      <p className="switch-form">¿Ya tienes una cuenta? <span onClick={switchForm}>Iniciar Sesión</span></p>
    </form>
  );
};

export default Login;
