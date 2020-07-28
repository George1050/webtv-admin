package com.webtv.tvonline.service;

import com.webtv.tvonline.model.Programa;
import com.webtv.tvonline.repository.ProgramaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProgramaService {
    ProgramaRepository programaRepository;

    @Autowired
    public void setProgramaRepository(ProgramaRepository programaRepository) {
        this.programaRepository = programaRepository;
    }

    public List<Programa> findAll(){
        return programaRepository.findAll();
    }

    public Programa getOne(Long id){
        return programaRepository.findById(id).get();
    }

    public Programa save(Programa programa){
        return programaRepository.save(programa);
    }

    public void delete(Long id){
        programaRepository.deleteById(id);
    }
}
