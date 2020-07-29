package com.webtv.tvonline.service;

import com.webtv.tvonline.model.Cargo;
import com.webtv.tvonline.repository.CargoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CargoService {

    private CargoRepository cargoRepository;

    @Autowired
    public void setCargoRepository(CargoRepository cargoRepository) {
        this.cargoRepository = cargoRepository;
    }

    public List<Cargo> findAll(){
        return cargoRepository.findAll();
    }

    public Cargo getOne(Long id){
        return cargoRepository.findById(id).get();
    }

    public void save(Cargo cargo){
        cargoRepository.save(cargo);
    }

    public void delete(Long id){
        cargoRepository.deleteById(id);
    }

}
