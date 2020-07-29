package com.webtv.tvonline.controller;

import com.webtv.tvonline.model.Funcionario;
import com.webtv.tvonline.service.FuncionarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000", exposedHeaders = "X-Total-Count")
public class FuncionarioController {

    @Autowired
    FuncionarioService service;

    @GetMapping(value = "/funcionario")
    public List<Funcionario> index(){
        return service.findAll();
    }

    @GetMapping(value = "/funcionario/{id}")
    public Funcionario getOne(@PathVariable(name = "id") Long id){
        return service.getOne(id);
    }

    @PostMapping(value = "/funcionario")
    public Funcionario create(@RequestBody Funcionario funcionario){
        return service.save(funcionario);
    }

    @PutMapping(value = "/funcionario/{id}")
    public Funcionario update(@PathVariable Long id,@RequestBody Funcionario funcionario){
        return service.save(funcionario);
    }

    @DeleteMapping(value = "/funcionario/{id}")
    public void delete(@PathVariable(name = "id") Long id, HttpServletResponse response){
        if(service.existsById(id)){
            service.delete(id);
            response.setStatus(200);
        }
        response.setStatus(400);
    }
}
