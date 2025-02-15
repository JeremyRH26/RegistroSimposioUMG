import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './VerAlumnos.css'; // Asegúrate de tener un archivo CSS si deseas personalizar el estilo

const VerAlumnos = () => {
    const [alumnos, setAlumnos] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [alumnoSeleccionado, setAlumnoSeleccionado] = useState(null);

    useEffect(() => {
        // Obtener los alumnos registrados
        const fetchAlumnos = async () => {
            try {
                const response = await axios.get('http://localhost:8080/alumnos/todos');
                setAlumnos(response.data);
            } catch (error) {
                console.error('Hubo un error al obtener los alumnos:', error);
            }
        };

        fetchAlumnos();
    }, []);

    // Función para eliminar alumno
    const eliminarAlumno = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/alumnos/baja/${id}`);
            setAlumnos(alumnos.filter(alumno => alumno.id !== id)); // Actualizar lista de alumnos
        } catch (error) {
            console.error('Error al eliminar el alumno:', error);
        }
    };

    // Función para actualizar alumno (abrir modal)
    const actualizarAlumno = (id) => {
        const alumno = alumnos.find(a => a.id === id);
        setAlumnoSeleccionado(alumno);
        setModalVisible(true); // Mostrar el modal
    };

    // Función para cerrar el modal
    const cerrarModal = () => {
        setModalVisible(false); // Cerrar el modal
        setAlumnoSeleccionado(null); // Limpiar el alumno seleccionado
    };

    // Función para manejar la actualización del alumno
    const handleActualizar = async (event) => {
        event.preventDefault();

        // Lógica de actualización aquí (envío de los datos)
        try {
            await axios.put(`http://localhost:8080/alumnos/actualizar/${alumnoSeleccionado.id}`, alumnoSeleccionado);
            // Cerrar el modal después de la actualización
            cerrarModal();
        } catch (error) {
            console.error('Error al actualizar el alumno:', error);
        }
    };

    // Manejar el cambio de campos
    const handleChange = (event) => {
        const { name, value } = event.target;
        setAlumnoSeleccionado({ ...alumnoSeleccionado, [name]: value });
    };

    return (
        <div className="ver-alumnos">
            <h2>Alumnos Registrados</h2>
            <table>
                <thead>
                <tr>
                    <th>Carnet</th>
                    <th>Estudiante</th>
                    <th>Correo Electrónico</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {alumnos.map((alumno) => (
                    <tr key={alumno.id}>
                        <td>{alumno.carnet1} {alumno.carnet2} {alumno.carnet3}</td>
                        <td>{alumno.nombre1} {alumno.nombre2} {alumno.apellido1} {alumno.apellido2}</td>
                        <td>{alumno.correoElectronico}</td>
                        <td>
                            <button onClick={() => actualizarAlumno(alumno.id)} className="action-button">Actualizar</button>
                            <button onClick={() => eliminarAlumno(alumno.id)} className="action-button">Eliminar</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* Modal de actualización */}
            {modalVisible && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Actualizar Alumno</h3>
                        <form onSubmit={handleActualizar}>
                            <div className="form-field">
                                <label>Carnet1</label>
                                <input
                                    type="text"
                                    name="carnet1"
                                    value={alumnoSeleccionado.carnet1}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-field">
                                <label>Carnet2</label>
                                <input
                                    type="text"
                                    name="carnet2"
                                    value={alumnoSeleccionado.carnet2}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-field">
                                <label>Carnet3</label>
                                <input
                                    type="text"
                                    name="carnet3"
                                    value={alumnoSeleccionado.carnet3}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-field">
                                <label>Nombre1</label>
                                <input
                                    type="text"
                                    name="nombre1"
                                    value={alumnoSeleccionado.nombre1}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-field">
                                <label>Nombre2</label>
                                <input
                                    type="text"
                                    name="nombre2"
                                    value={alumnoSeleccionado.nombre2}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-field">
                                <label>Apellido1</label>
                                <input
                                    type="text"
                                    name="apellido1"
                                    value={alumnoSeleccionado.apellido1}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-field">
                                <label>Apellido2</label>
                                <input
                                    type="text"
                                    name="apellido2"
                                    value={alumnoSeleccionado.apellido2}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-field">
                                <label>Teléfono</label>
                                <input
                                    type="number"
                                    name="telefono"
                                    value={alumnoSeleccionado.telefono}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-field">
                                <label>Correo Electrónico</label>
                                <input
                                    type="email"
                                    name="correo_electronico"
                                    value={alumnoSeleccionado.correoElectronico}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-field">
                                <label>Fecha de Nacimiento</label>
                                <input
                                    type="date"
                                    name="fecha_nacimiento"
                                    value={alumnoSeleccionado.fecha_nacimiento}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-actions">
                                <button type="submit" className="submit-button">Guardar Cambios</button>
                                <button type="button" onClick={cerrarModal} className="close-button">Cerrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Botón de regresar al formulario principal */}
            <button onClick={() => window.location.href = '/'} className="boton-regresar">Regresar al Formulario</button>
        </div>
    );
};

export default VerAlumnos;
