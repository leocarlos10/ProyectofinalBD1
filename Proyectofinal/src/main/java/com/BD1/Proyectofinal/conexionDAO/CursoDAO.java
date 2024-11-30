package com.BD1.Proyectofinal.conexionDAO;

import com.BD1.Proyectofinal.modelo.Curso;
import com.BD1.Proyectofinal.modelo.Pediatra;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import java.util.List;
@Repository
public class CursoDAO implements DAO<Curso>{

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public CursoDAO(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Curso> get(String entity) {
        return null;
    }

    @Override
    public List<Curso> getAll() {
        String sql = "SELECT * FROM curso ";
        return jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(Curso.class));
    }

    @Override
    public boolean eliminar(Long id) {
        return false;
    }

    @Override
    public void registrar(Curso entidad) {

    }

    @Override
    public void actualizar(Curso entidad) {

    }
}
