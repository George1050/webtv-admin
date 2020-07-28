package com.webtv.tvonline.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Funcionario {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @NotEmpty(message = "Capo não pode estar vazio!")
    private String nome;
    @NotEmpty(message = "Capo não pode estar vazio!")
    private String contato;
    @NotNull(message = "Capo não pode estar vazio!")
    private Boolean status;

    @OneToOne
    @JoinColumn(name = "cargo_id")
    private Cargo cargo;


}
