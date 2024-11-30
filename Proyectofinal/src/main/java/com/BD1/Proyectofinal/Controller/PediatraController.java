package com.BD1.Proyectofinal.Controller;

import com.BD1.Proyectofinal.conexionDAO.DAO;
import com.BD1.Proyectofinal.conexionDAO.PediatraDAO;
import com.BD1.Proyectofinal.modelo.Pediatra;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class PediatraController {

    @Autowired
    private DAO<Pediatra> pediatraDAO; // Inyección automática del dao

    @PostMapping ("api/login")
    public ResponseEntity<?> loginPediatra(@RequestBody Pediatra pediatra) {

        List<Pediatra> ped = pediatraDAO.get(pediatra.getNombre());
        // verificamos que la lista no este vacia
        if (!(ped.isEmpty())){
            // verificamos las datos del usuario
            boolean estado = isvaliduser(pediatra.getNombre(), pediatra.getPass(), ped.get(0));
            if (estado){
                return ResponseEntity.ok(ped);
            }else{
                Map<String,String> response = new HashMap<>();
                response.put("respuesta","Cuenta no autorizada");
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
            }
        }else {
            Map<String,String> response = new HashMap<>();
            response.put("respuesta","Cuenta no encontrada");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }
    }

    public boolean isvaliduser(String nombre, String pass, Pediatra ped){
        return nombre.equalsIgnoreCase(ped.getNombre()) && pass.equalsIgnoreCase(ped.getPass());
    }
}
