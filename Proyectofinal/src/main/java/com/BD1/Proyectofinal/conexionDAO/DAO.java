package com.BD1.Proyectofinal.conexionDAO;

import com.BD1.Proyectofinal.modelo.Cita;

import java.util.List;

public interface DAO <T>{

    List<T> get(String object);

    List<T> getAll();
    boolean eliminar(Long id);
    int registrar(T entidad);
    void actualizar(T entidad);

}