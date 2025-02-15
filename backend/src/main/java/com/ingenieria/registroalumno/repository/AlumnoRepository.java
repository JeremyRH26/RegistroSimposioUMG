package com.ingenieria.registroalumno.repository;

import com.ingenieria.registroalumno.model.Alumno;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Map;


public interface AlumnoRepository extends JpaRepository<Alumno, Integer> {


    @Query("Select year (current_date) - year(a.fechaNacimiento) AS edad, COUNT(a) AS cantidad FROM Alumno a GROUP BY edad ORDER BY edad ")
    List<Map<String, Object >> obtenerEstadisticasporEdad();

}