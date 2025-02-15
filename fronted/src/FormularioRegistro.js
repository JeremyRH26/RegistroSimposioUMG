import React, { useState } from 'react';
import axios from 'axios';

const FormularioRegistro = () => {
    const [carnet1, setCarnet1] = useState('');
    const [carnet2, setCarnet2] = useState('');
    const [carnet3, setCarnet3] = useState('');
    const [nombre1, setNombre1] = useState('');
    const [nombre2, setNombre2] = useState('');
    const [apellido1, setApellido1] = useState('');
    const [apellido2, setApellido2] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correoElectronico, setCorreoElectronico] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');

    const [errorCorreo, setErrorCorreo] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const regexEmail = /\S+@\S+\.\S+/;
        if (!regexEmail.test(correoElectronico)) {
            setErrorCorreo('Por favor, ingrese un correo electronico válido');
            return;
        }else{
            setErrorCorreo('');
        }

        // Crear el objeto con los datos del formulario
        const alumnoData = {
            carnet1,
            carnet2,
            carnet3,
            nombre1,
            nombre2,
            apellido1,
            apellido2,
            telefono,
            correoElectronico,
            fechaNacimiento,
        };

        try {
            // Hacer la petición POST al backend de Spring
            const response = await axios.post('http://localhost:8080/alumnos/alta', alumnoData);
            console.log('Respuesta del servidor:', response.data);
            alert('Alumno registrado exitosamente!');
            window.location.reload();
        } catch (error) {
            console.error('Hubo un error al registrar al alumno:', error);
            alert('Error al registrar el alumno');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Carnet 1:</label>
                <input
                    type="text"
                    value={carnet1}
                    onChange={(e) => setCarnet1(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Carnet 2:</label>
                <input
                    type="text"
                    value={carnet2}
                    onChange={(e) => setCarnet2(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Carnet 3:</label>
                <input
                    type="text"
                    value={carnet3}
                    onChange={(e) => setCarnet3(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Primer Nombre:</label>
                <input
                    type="text"
                    value={nombre1}
                    onChange={(e) => setNombre1(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Segundo Nombre:</label>
                <input
                    type="text"
                    value={nombre2}
                    onChange={(e) => setNombre2(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Primer Apellido:</label>
                <input
                    type="text"
                    value={apellido1}
                    onChange={(e) => setApellido1(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Segundo Apellido:</label>
                <input
                    type="text"
                    value={apellido2}
                    onChange={(e) => setApellido2(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Teléfono:</label>
                <input
                    type="tel"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Correo Electrónico:</label>
                <input
                    type="email"
                    value={correoElectronico}
                    onChange={(e) => setCorreoElectronico(e.target.value)}
                    required
                />
                {errorCorreo && <span className="error">{errorCorreo}</span>}
            </div>
            <div>
                <label>Fecha de Nacimiento:</label>
                <input
                    type="date"
                    value={fechaNacimiento}
                    onChange={(e) => setFechaNacimiento(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Registrar</button>
        </form>
    );
};

export default FormularioRegistro;
