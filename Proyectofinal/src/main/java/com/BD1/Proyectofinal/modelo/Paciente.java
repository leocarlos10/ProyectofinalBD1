package com.BD1.Proyectofinal.modelo;

import java.time.LocalDate;

public class Paciente {

    private int id;
    private int cedula;
    private String nombre;
    private String apellido;
    private LocalDate fechaNacimiento;
    private String telefono;
    private LocalDate fechaUltValoracion;
    private String ciudad;
    private String motivoC;
    private String remitente;
    private int idcita;

    public Paciente() {
    }

    public Paciente(int id , int cedula, String nombre, String apellido, LocalDate fechaNacimiento, String telefono, LocalDate fechaUltValoracion, String ciudad, String motivoC, String remitente, int idcita) {
        this.id = id;
        this.cedula = cedula;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.telefono = telefono;
        this.fechaUltValoracion = fechaUltValoracion;
        this.ciudad = ciudad;
        this.motivoC = motivoC;
        this.remitente = remitente;
        this.idcita = idcita;
    }

    public int getId(){
        return id;
    }

    public void setId(int id ){
        this.id = id;
    }

    public int getCedula() {
        return cedula;
    }

    public void setCedula(int cedula) {
        this.cedula = cedula;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public LocalDate getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(LocalDate fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public LocalDate getFechaUltValoracion() {
        return fechaUltValoracion;
    }

    public void setFechaUltValoracion(LocalDate fechaUltValoracion) {
        this.fechaUltValoracion = fechaUltValoracion;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public String getMotivoC() {
        return motivoC;
    }

    public void setMotivoC(String motivoC) {
        this.motivoC = motivoC;
    }

    public String getRemitente() {
        return remitente;
    }

    public void setRemitente(String remitente) {
        this.remitente = remitente;
    }

    public int getIdcita() {
        return idcita;
    }

    public void setIdcita(int idcita) {
        this.idcita = idcita;
    }
}
