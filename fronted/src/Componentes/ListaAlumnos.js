import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListaAlumnos = () => {
    const [alumnos, setAlumnos] = useState([]);
    const [loading, setLoading] = useState(true);

    // Obtener todos los alumnos registrados desde el backend
    useEffect(() => {
        const fetchAlumnos = async () => {
            try {
                const response = await axios.get('http://localhost:8080/alumnos/todos');
                setAlumnos(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error al obtener los alumnos:', error);
                setLoading(false);
            }
        };
        fetchAlumnos();
    }, []);

    // Eliminar un alumno por ID
    const eliminarAlumno = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/alumnos/baja/${id}`);
            setAlumnos(alumnos.filter(alumno => alumno.id !== id)); // Eliminarlo de la lista
            alert('Alumno eliminado exitosamente!');
        } catch (error) {
            console.error('Error al eliminar el alumno:', error);
            alert('Error al eliminar el alumno');
        }
    };

    // Redirigir a la página de actualización de datos de un alumno (aquí es solo un ejemplo)
    const actualizarAlumno = (id) => {
        // Redirigir a la página de actualización (por ejemplo, en React Router)
        // history.push(`/actualizar/${id}`); (usando React Router si lo tienes)
        alert(`Actualizar alumno con ID: ${id}`);
    };

    if (loading) {
        return <div>Cargando alumnos...</div>;
    }

    return (
        <div>
            <h1>Lista de Alumnos Registrados</h1>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Carnet</th>
                    <th>Nombre</th>
                    <th>Correo Electrónico</th>
                    <th>Fecha de Nacimiento</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {alumnos.map(alumno => (
                    <tr key={alumno.id}>
                        <td>{alumno.id}</td>
                        <td>{alumno.carnet1}-{alumno.carnet2}-{alumno.carnet3}</td>
                        <td>{alumno.nombre1} {alumno.nombre2} {alumno.apellido1} {alumno.apellido2}</td>
                        <td>{alumno.correoElectronico}</td>
                        <td>{alumno.fechaNacimiento}</td>
                        <td>
                            <button onClick={() => actualizarAlumno(alumno.id)}>Actualizar</button>
                            <button onClick={() => eliminarAlumno(alumno.id)}>Eliminar</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListaAlumnos;
