package com.webtv.tvonline.model;

import com.fasterxml.jackson.annotation.*;
import com.fasterxml.jackson.databind.annotation.JsonValueInstantiator;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;


@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Video {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotEmpty(message = "Capo não pode estar vazio!")
    private String titulo;

    @NotEmpty(message = "Capo não pode estar vazio!")
    private String urlVideo;

    @NotNull(message = "Capo não pode estar vazio!")
    private LocalDate data;

    @ManyToOne
    @JoinColumn(name = "programa_id")
    @JsonBackReference
    Programa programa;
}