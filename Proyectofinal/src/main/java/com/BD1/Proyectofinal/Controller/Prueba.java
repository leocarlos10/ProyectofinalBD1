package com.BD1.Proyectofinal.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Prueba {


    @RequestMapping(value = "api/usuarios", method = RequestMethod.GET)
    public List<String> getUsers(){

        return List.of("usuario1","usuario2");

    }
}
