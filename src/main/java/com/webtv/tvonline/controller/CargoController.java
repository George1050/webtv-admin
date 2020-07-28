package com.webtv.tvonline.controller;

import com.webtv.tvonline.model.Cargo;
import com.webtv.tvonline.service.CargoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.Entity;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000", exposedHeaders = "X-Total-Count")
public class CargoController {
    private CargoService service;

    @Autowired
    public void setService(CargoService service) {
        this.service = service;
    }

    @GetMapping(value = "/cargo")
    public List<Cargo> index(){
        return service.findAll();
    }

    @PostMapping(value = "/cargo")
    @PutMapping(value = "/cargo")
    public void save(@RequestBody Cargo cargo){
        service.save(cargo);
    }
}
