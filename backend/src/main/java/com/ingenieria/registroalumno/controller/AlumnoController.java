package com.ingenieria.registroalumno.controller;

import com.ingenieria.registroalumno.model.Alumno;
import com.ingenieria.registroalumno.repository.AlumnoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/alumnos")
@CrossOrigin(origins = "http://localhost:3000")
public class AlumnoController {

    @Autowired
    private AlumnoRepository alumnoRepository;

    // Alta (Crear un nuevo alumno)
    @PostMapping("/alta")
    public Alumno crearAlumno(@RequestBody Alumno alumno) {
        return alumnoRepository.save(alumno);
    }

    // Baja (Eliminar un alumno por ID)
    @DeleteMapping("/baja/{id}")
    public void eliminarAlumno(@PathVariable int id) {
        alumnoRepository.deleteById(id);
    }

    // Cambio (Actualizar datos de un alumno)
    @PutMapping("/actualizar/{id}")
    public Alumno actualizarAlumno(@PathVariable int id, @RequestBody Alumno alumno) {
        Alumno alumnoExistente = alumnoRepository.findById(id).orElseThrow();
        alumnoExistente.setCarnet1(alumno.getCarnet1());
        alumnoExistente.setCarnet2(alumno.getCarnet2());
        alumnoExistente.setCarnet3(alumno.getCarnet3());
        alumnoExistente.setNombre1(alumno.getNombre1());
        alumnoExistente.setNombre2(alumno.getNombre2());
        alumnoExistente.setApellido1(alumno.getApellido1());
        alumnoExistente.setApellido2(alumno.getApellido2());
        alumnoExistente.setTelefono(alumno.getTelefono());
        alumnoExistente.setCorreoElectronico(alumno.getCorreoElectronico());
        alumnoExistente.setFechaNacimiento(alumno.getFechaNacimiento());
        return alumnoRepository.save(alumnoExistente);
    }

    // Obtener todos los alumnos
    @GetMapping("/todos")
    public List<Alumno> obtenerTodosLosAlumnos() {
        return alumnoRepository.findAll();
    }

    // obtener estadisticas por edad
    @GetMapping("/estadisticas/por-edad")
    public List<Map<String, Object>> obtenerEstadisticasPorEdad() {
        return alumnoRepository.obtenerEstadisticasporEdad();
    }
}