package com.BD1.Proyectofinal.conexionDAO;

import com.BD1.Proyectofinal.modelo.Pediatra;

import java.util.List;

public class PediatraDAO   implements DAO<Pediatra>    {



    @Override
    public List<Pediatra> get(Long id) {
        return null;
    }

    @Override
    public boolean eliminar(Long id) {
        return false;
    }

    @Override
    public void registrar(Pediatra entidad) {

    }

    @Override
    public void actualizar(Pediatra entidad) {

    }
}
