package com.webtv.tvonline.model;

import com.fasterxml.jackson.annotation.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Programa {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @NotEmpty(message = "Campo vazio!")
    private String titulo;
    @NotEmpty(message = "Campo vazio!")
    private String descricao;
    @NotEmpty(message = "Campo vazio!")
    private String uriLogo;

    //Relação n/n de programa com apresentador, um programa -> n apresentadores
    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinTable(
            name = "programa_funcionario",
            joinColumns = @JoinColumn(name = "programa_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "funcionario_id")
    )
    private List<Funcionario> equipe;


    @OneToMany(mappedBy = "programa", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<Video> videos;

}
