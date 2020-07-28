package com.webtv.tvonline.controller;

import com.webtv.tvonline.model.Programa;
import com.webtv.tvonline.service.ProgramaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000", exposedHeaders = "X-Total-Count")
@RequestMapping("/api")
public class ProgramaController {

    @Autowired
    ProgramaService programaService;

    @GetMapping(value = "/programa")
    public List<Programa> index(){
        return programaService.findAll();
    }

    @GetMapping(value = "/programa/{id}")
    public Programa getOne(@PathVariable(name = "id") Long id){
        return programaService.getOne(id);
    }

    @PostMapping(value = "/programa")
    public Programa create(@RequestBody Programa programa){
        return programaService.save(programa);
    }

    @PutMapping(value = "/programa/{id}")
    public Programa update(@PathVariable(name = "id") Long id, @RequestBody Programa programa){
        return programaService.save(programa);
    }

    @DeleteMapping(value = "/programa/{id}")
    public void delete(@PathVariable(name = "id") Long id){
        programaService.delete(id);
    }

}
