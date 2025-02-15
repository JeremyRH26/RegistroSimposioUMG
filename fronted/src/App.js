import React from 'react';
import './App.css';
import FormularioRegistro from './FormularioRegistro';
import { motion } from 'framer-motion';
import EstadisticaEdad from "./Componentes/EstadisticaEdad";

function App() {
    return (
            <div className="App">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="REGISTRO SIMPOSIO"
                >
                    Registro para Simposio 2025
                </motion.h1>

                <div className="contenedor">
                    <div className="formulario">
                        <FormularioRegistro />
                    </div>

                    <div className="grafica">
                        <h2 className="Estadistica">Alumnos Registrados por Edad</h2>
                        <EstadisticaEdad />
                    </div>
                </div>

                <div>
                    <a href="/ver-alumnos">
                        <button className="botonVerAlumnos">Alumnos Registrados</button>
                        </a>
                </div>
            </div>

    );
}

export default App;
