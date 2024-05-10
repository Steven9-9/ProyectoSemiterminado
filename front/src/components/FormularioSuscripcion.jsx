import React, { useState } from 'react';
import axios from 'axios';

const FormularioSuscripcion = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        nombre: '',
        apellidos: '',
        documento: '',
        fechaNacimiento: '',
        correo: '',
        celular: '',
        aceptoTratamiento: false,
    });

    const abrirModal = () => {
        setIsVisible(true);
    };

    const cerrarModal = () => {
        setIsVisible(false);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Hacer una solicitud POST a tu archivo JSON
            await axios.post('/path/to/usuariosSuscritos.json', formData);
            // Cerrar el modal después de enviar la información
            cerrarModal();
        } catch (error) {
            console.error('Error al enviar la información:', error);
        }
    };

    return (
        <div>
            <button onClick={abrirModal}>Suscribirse</button>

            {isVisible && (
                <div className="modal">
                    <div className="modal-contenido">
                        <h2>Formulario de Suscripción</h2>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Nombre:</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    className="campo-nombre"
                                />
                            </div>
                            <div>
                                <label>Apellidos:</label>
                                <input
                                    type="text"
                                    name="apellidos"
                                    value={formData.apellidos}
                                    onChange={handleChange}
                                    className="campo-apellidos"
                                />
                            </div>
                            <div>
                                <label>Documento de Identidad:</label>
                                <input
                                    type="text"
                                    name="documento"
                                    value={formData.documento}
                                    onChange={handleChange}
                                    className="campo-documento"
                                />
                            </div>
                            <div>
                                <label>Fecha de Nacimiento:</label>
                                <input
                                    type="date"
                                    name="fechaNacimiento"
                                    value={formData.fechaNacimiento}
                                    onChange={handleChange}
                                    className="campo-fecha-nacimiento"
                                />
                            </div>
                            <div>
                                <label>Correo Electrónico:</label>
                                <input
                                    type="email"
                                    name="correo"
                                    value={formData.correo}
                                    onChange={handleChange}
                                    className="campo-correo"
                                />
                            </div>
                            <div>
                                <label>Número de Celular:</label>
                                <input
                                    type="tel"
                                    name="celular"
                                    value={formData.celular}
                                    onChange={handleChange}
                                    className="campo-celular"
                                />
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    name="aceptoTratamiento"
                                    checked={formData.aceptoTratamiento}
                                    onChange={handleChange}
                                    className="campo-acepto-tratamiento"
                                />
                                <label>Acepto el tratamiento de datos</label>
                            </div>
                            <button type="submit">Enviar</button>
                        </form>
                        <button onClick={cerrarModal}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FormularioSuscripcion;
