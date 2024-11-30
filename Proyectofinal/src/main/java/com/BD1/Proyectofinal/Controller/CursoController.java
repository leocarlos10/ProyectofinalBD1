package com.BD1.Proyectofinal.Controller;

import com.BD1.Proyectofinal.conexionDAO.DAO;
import com.BD1.Proyectofinal.modelo.Curso;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class CursoController {

    @Autowired
    private DAO<Curso> CursoDAO;

    @GetMapping("api/getcursos")
    public ResponseEntity<?> getCursos(){
        List<Curso> Cursos = CursoDAO.getAll();
        if (!Cursos.isEmpty()){
            return  ResponseEntity.ok(Cursos);
        }else {
            Map<String, String> response = new HashMap<>();
            response.put("respuesta", "No hay cursos registrados");
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(response);
        }
    }
}
