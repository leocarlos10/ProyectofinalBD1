package com.BD1.Proyectofinal.Controller;

import com.BD1.Proyectofinal.conexionDAO.PacienteDAO;
import com.BD1.Proyectofinal.modelo.Paciente;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class PacienteController {

    @Autowired
    private PacienteDAO pacienteDAO;

    @PostMapping("api/paciente")
    public ResponseEntity<?> postPaciente(@RequestBody Paciente paciente) {
        int estado = pacienteDAO.registrar(paciente);
        if(estado == 1){
            Map<String,String> response = new HashMap<>();
            response.put("respuesta", " Se ha registrado correctamente");
            return ResponseEntity.ok(response);
        }else {
            Map<String,String> response = new HashMap<>();
            response.put("respuesta", "No se registro correctamente, intente mas tarde");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }
    }
}
