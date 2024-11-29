package com.BD1.Proyectofinal.Controller;

import com.BD1.Proyectofinal.conexionDAO.PacienteDAO;
import com.BD1.Proyectofinal.modelo.Paciente;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public class PacienteController {

    @Autowired 
    private PacienteDAO pacienteDAO;

  
    @PostMapping("/api/paciente")
    public void postPaciente(@RequestBody Paciente paciente) {
        pacienteDAO.registrar(paciente);
    }

    @GetMapping
    public List<Paciente> getPacientes() {
        return pacienteDAO.get(null);
    }
}
