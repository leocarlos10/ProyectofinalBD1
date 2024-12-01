package com.BD1.Proyectofinal.Controller;

import com.BD1.Proyectofinal.conexionDAO.DAO;
import com.BD1.Proyectofinal.modelo.Cita;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class CitaController {

    @Autowired
    DAO<Cita> citaDAO;


    @GetMapping("api/getcitas")
    public ResponseEntity<?> getCitas(){
        List<Cita> listaCita = citaDAO.getAll();

        if (!listaCita.isEmpty()){
            return  ResponseEntity.ok(listaCita);
        }else {
            Map<String, String> response = new HashMap<>();
            response.put("respuesta","No hay citas registradas");
            return  ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }

    }


    @PostMapping("api/cita")
    public ResponseEntity<?> RegistrarCita (@RequestBody Cita cita) {
        // registramos la cita.
        int id = citaDAO.registrar(cita);
            Map<String, Object> response = new HashMap<>();
            response.put("id",id);
            return  ResponseEntity.ok(response);
    }
}
