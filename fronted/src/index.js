import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import VerAlumnos from "./VerAlumnos";
import App from './App';
import reportWebVitals from './reportWebVitals';

// Obtener el contenedor root donde se va a renderizar
const root = ReactDOM.createRoot(document.getElementById('root'));

// Verificar la ruta actual y renderizar el componente correspondiente
if (window.location.pathname === '/ver-alumnos') {
    // Si la URL es "/ver-alumnos", renderiza VerAlumnos
    root.render(
        <React.StrictMode>
            <VerAlumnos />
        </React.StrictMode>
    );
} else {
    // Si la URL no es "/ver-alumnos", renderiza App
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
