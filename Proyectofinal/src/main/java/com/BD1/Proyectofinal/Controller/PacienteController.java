package com.BD1.Proyectofinal.Controller;

import com.BD1.Proyectofinal.conexionDAO.PacienteDAO;
import com.BD1.Proyectofinal.modelo.Paciente;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@RestController
public class PacienteController {

    @Autowired
    private PacienteDAO pacienteDAO;

    @PostMapping("/api/paciente")
    public void postPaciente(@RequestBody Paciente paciente) { 
        pacienteDAO.registrar(paciente); 
    }

    @GetMapping("api/paciente")
    public List<Paciente> getPacientes() {

        List<Paciente> pacientes = new ArrayList<>();
        pacientes.add(new Paciente(1, 12345678, "Juan", "Pérez", LocalDate.of(1985, 5, 15), "555-1234",
                LocalDate.of(2023, 3, 1), "Ciudad A", "Chequeo general", "Dr. Ramírez", 101));
        pacientes.add(new Paciente(2, 87654321, "María", "Gómez", LocalDate.of(1990, 8, 22), "555-5678",
                LocalDate.of(2023, 3, 5), "Ciudad B", "Consulta de rutina", "Dr. Rodríguez", 102));
        pacientes.add(new Paciente(3, 45678912, "Carlos", "Ruiz", LocalDate.of(1975, 11, 30), "555-9876",
                LocalDate.of(2023, 3, 10), "Ciudad C", "Dolor de cabeza", "Dra. Fernández", 103));
        return pacientes;
    }
}
