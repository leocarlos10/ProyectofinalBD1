package com.BD1.Proyectofinal.conexionDAO;

import com.BD1.Proyectofinal.modelo.Pediatra;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class PediatraDAO implements DAO<Pediatra> {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public PediatraDAO(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @SuppressWarnings("deprecation")
    @Override
    public List<Pediatra> get(Long id) {

        // Si quieres buscar un pediatra por su id, debes usar un marcador de parámetro
        String sql = "SELECT * FROM pediatra WHERE id = ?";
        return jdbcTemplate.query(sql, new Object[] { id }, new BeanPropertyRowMapper<>(Pediatra.class));

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