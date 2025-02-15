package com.ingenieria.registroalumno.model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "alumnos")
public class Alumno {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String carnet1;
    private String carnet2;
    private String carnet3;
    private String nombre1;
    private String nombre2;
    private String apellido1;
    private String apellido2;
    private int telefono;

    @Column(name = "correo_electronico", unique = true)
    private String correoElectronico;

    @Temporal(TemporalType.DATE)
    @Column(name = "fecha_nacimiento")
    private Date fechaNacimiento;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "fecha_registro")
    private Date fechaRegistro;

    @PrePersist
    public void prePersist() {
        this.fechaRegistro = new Date(); // Asigna la fecha actual antes de la inserción
    }

    // Getters y Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCarnet1() {
        return carnet1;
    }

    public void setCarnet1(String carnet1) {
        this.carnet1 = carnet1;
    }

    public String getCarnet2() {
        return carnet2;
    }

    public void setCarnet2(String carnet2) {
        this.carnet2 = carnet2;
    }

    public String getCarnet3() {
        return carnet3;
    }

    public void setCarnet3(String carnet3) {
        this.carnet3 = carnet3;
    }

    public String getNombre1() {
        return nombre1;
    }

    public void setNombre1(String nombre1) {
        this.nombre1 = nombre1;
    }

    public String getNombre2() {
        return nombre2;
    }

    public void setNombre2(String nombre2) {
        this.nombre2 = nombre2;
    }

    public String getApellido1() {
        return apellido1;
    }

    public void setApellido1(String apellido1) {
        this.apellido1 = apellido1;
    }

    public String getApellido2() {
        return apellido2;
    }

    public void setApellido2(String apellido2) {
        this.apellido2 = apellido2;
    }

    public int getTelefono() {
        return telefono;
    }

    public void setTelefono(int telefono) {
        this.telefono = telefono;
    }

    public String getCorreoElectronico() {
        return correoElectronico;
    }

    public void setCorreoElectronico(String correoElectronico) {
        this.correoElectronico = correoElectronico;
    }

    public Date getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(Date fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    public Date getFechaRegistro() {
        return fechaRegistro;
    }

    public void setFechaRegistro(Date fechaRegistro) {
        this.fechaRegistro = fechaRegistro;
    }

}