package com.BD1.Proyectofinal.Controller;

import com.BD1.Proyectofinal.conexionDAO.CitaPacienteDAO;
import com.BD1.Proyectofinal.modelo.CitaPacienteDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CitaPacienteController {

    @Autowired
    private CitaPacienteDAO citaPacienteDAO;

    @GetMapping("/api/getcitaspacientes")
    public ResponseEntity<List<CitaPacienteDTO>> getCitasPacientes() {
        try {
            List<CitaPacienteDTO> citasPacientes = citaPacienteDAO.getCitasPacientes();
            return new ResponseEntity<>(citasPacientes, HttpStatus.OK);
        } catch (Exception e) {
            // Log the exception
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
