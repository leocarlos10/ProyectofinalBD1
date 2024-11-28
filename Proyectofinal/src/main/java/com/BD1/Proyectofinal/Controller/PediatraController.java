package com.BD1.Proyectofinal.Controller;

import com.BD1.Proyectofinal.conexionDAO.PediatraDAO;
import com.BD1.Proyectofinal.modelo.Pediatra;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PediatraController {

    @Autowired
    private PediatraDAO pediatraDAO; // Inyección automática del dao

    @GetMapping("api/pediatra/{id}")
    public List<Pediatra> getPediatraById(@PathVariable Long id) {

        return pediatraDAO.get(id);
    }
}
