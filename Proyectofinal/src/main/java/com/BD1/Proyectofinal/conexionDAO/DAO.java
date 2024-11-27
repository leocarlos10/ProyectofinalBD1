package com.BD1.Proyectofinal.conexionDAO;

import java.util.List;

public interface DAO <T>{

    List<T> get(Long id);

    boolean eliminar(Long id);

    void registrar(T entidad);

    void actualizar(T entidad);
}
