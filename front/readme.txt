import React, { useState } from 'react';
import './index.css';
import MenuUsuario from './MenuUsuarioUno';

const Login = () => {
    const [showModal, setShowModal] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [usuario, setUsuario] = useState(() => {
        // Inicializa el estado leyendo del localStorage
        const data = localStorage.getItem('usuarios');
        return data ? JSON.parse(data).usuario : [];
    });

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const switchForm = () => {
        setIsLogin(!isLogin);
    };

    const handleSubmit = (event, userData) => {
        event.preventDefault();
        const { correo, contrasena } = userData;
        const foundUsuario = usuario.find(u => u.correo === correo && u.contrasena === contrasena);
        if (foundUsuario) {
            // Usuario autenticado
            alert(`¡Bienvenido, ${foundUsuario.usuario}!`);
            // Aquí puedes redirigir al usuario a la página de inicio, etc.
        } else {
            // Usuario no encontrado o datos incorrectos
            alert('Correo electrónico o contraseña incorrectos. Por favor, inténtalo de nuevo o regístrate.');
        }
    };

    const handleRegister = (userData) => {
        const { usuario: nombreUsuario, correo, contrasena } = userData;
        const newUsuario = {
            usuario: nombreUsuario,
            correo,
            contrasena,
            id: usuario.length + 1
        };
        const updatedUsuario = [...usuario, newUsuario];
        setUsuario(updatedUsuario);
        // Guarda el nuevo estado en localStorage
        localStorage.setItem('usuarios', JSON.stringify({ usuario: updatedUsuario }));

        toggleModal();
        alert('¡Te has registrado correctamente!');
    };

    return (
        <div>
            <MenuUsuario toggleModal={toggleModal} />

            {showModal && (
                <div className="modal-overlay" onClick={toggleModal}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={toggleModal}>Cerrar</button>
                        {isLogin ? (
                            <LoginForm onSubmit={handleSubmit} switchForm={switchForm} />
                        ) : (
                            <RegisterForm onSubmit={handleRegister} switchForm={switchForm} />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

const LoginForm = ({ onSubmit, switchForm }) => {
    const [userData, setUserData] = useState({ correo: '', contrasena: '' });

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    };

    return (
        <form onSubmit={(event) => onSubmit(event, userData)} className="login-form">
            <h2>Iniciar Sesión</h2>
            <div className="form-group">
                <label htmlFor="correo">Correo Electrónico</label>
                <input type="email" id="correo" name="correo" value={userData.correo} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="contrasena">Contraseña</label>
                <input type="password" id="contrasena" name="contrasena" value={userData.contrasena} onChange={handleChange} required />
            </div>
            <button type="submit" className="submit-btn">Iniciar Sesión</button>
            <p className="switch-form">¿No tienes una cuenta? <span onClick={switchForm}>Registrarse</span></p>
        </form>
    );
};

const RegisterForm = ({ onSubmit, switchForm }) => {
    const [userData, setUserData] = useState({ usuario: '', correo: '', contrasena: '', confirmarContrasena: '' });

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target value });
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleRegister = (event) => {
        event.preventDefault();
        const { correo, contrasena, confirmarContrasena } = userData;
        if (!validateEmail(correo)) {
            alert('Por favor, introduce un correo electrónico válido.');
            return;
        }
        if (!validatePassword(contrasena)) {
            alert('La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número.');
            return;
        }
        if (contrasena !== confirmarContrasena) {
            alert('Las contraseñas no coinciden.');
            return;
        }
        onSubmit(userData);
    };

    return (
        <form onSubmit={handleRegister} className="register-form">
            <h2>Registrarse</h2>
            <div className="form-group">
                <label htmlFor="usuario">Nombre de usuario</label>
                <input type="text" id="usuario" name="usuario" value={userData.usuario} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="correo">Correo Electrónico</label>
                <input type="email" id="correo" name="correo" value={userData.correo} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="contrasena">Contraseña</label>
                <input type="password" id="contrasena" name="contrasena" value={userData.contrasena} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="confirmarContrasena">Confirmar Contraseña</label>
                <input type="password" id="confirmarContrasena" name="confirmarContrasena" value={userData.confirmarContrasena} onChange={handleChange} required />
            </div>
            <button type="submit" className="submit-btn">Registrarse</button>
            <p className="switch-form">¿Ya tienes una cuenta? <span onClick={switchForm}>Iniciar Sesión</span></p>
        </form>
    );
};

export default Login;
