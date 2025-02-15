import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const EstadisticasEdad = () => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/alumnos/estadisticas/por-edad')
            .then((response) => {
                const datosTransformados = response.data.map((item) => ({
                    name: `${item.edad} años`,
                    value: item.cantidad,
                }));
                setDatos(datosTransformados);
            })
            .catch((error) => console.error("Error al obtener estadísticas:", error));
    }, []);

    const colores = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA336A'];

    return (
        <div style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={datos}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={150}
                        fill="#8884d8"
                        label
                    >
                        {datos.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colores[index % colores.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default EstadisticasEdad;
