package com.BD1.Proyectofinal.modelo;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class Cita {
    @Setter @Getter
    private int id;

    @Setter @Getter
    private LocalDateTime fechahora;
    @Setter @Getter
    private String servicio;

    public Cita(int id, LocalDateTime fechahora, String servicio) {
        this.id = id;
        this.fechahora = fechahora;
        this.servicio = servicio;
    }

    public Cita (){}
}
