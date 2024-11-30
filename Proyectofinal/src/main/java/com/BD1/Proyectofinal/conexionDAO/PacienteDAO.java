package com.BD1.Proyectofinal.conexionDAO;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.BD1.Proyectofinal.modelo.Paciente;

@Repository
public class PacienteDAO implements DAO<Paciente> {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public PacienteDAO(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Paciente> get(String entity) {
        return null;
    }

    @Override
    public List<Paciente> getAll() {
        return null;
    }

    @Override
    public boolean eliminar(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'eliminar'");
    }

    @Override
    public void registrar(Paciente paciente) {
        String sql = "INSERT INTO paciente (cedula, nombre, apellido, fechaNacimiento, telefono, fechaUltValoracion, ciudad, motivoC, remitente, idcita) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, paciente.getCedula() , paciente.getNombre(), paciente.getApellido(),
                paciente.getFechaNacimiento(), paciente.getTelefono(), paciente.getFechaUltValoracion(),
                paciente.getCiudad(), paciente.getMotivoC(), paciente.getRemitente(), paciente.getIdcita());
    }

    @Override
    public void actualizar(Paciente entidad) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'actualizar'");
    }

}
