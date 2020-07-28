package com.webtv.tvonline.service;

import com.webtv.tvonline.model.Funcionario;
import com.webtv.tvonline.repository.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FuncionarioService {
    FuncionarioRepository repository;

    @Autowired
    public void setRepository(FuncionarioRepository repository){
        this.repository = repository;
    }

    public List<Funcionario> findAll(){
        return repository.findAll();
    }

    public Funcionario getOne(Long id){
        return repository.getOne(id);
    }

    public Funcionario save(Funcionario funcionario){
        return repository.save(funcionario);
    }

    public void delete(Long id){
        repository.deleteById(id);
    }

    public Boolean existsById(Long id){
        return repository.existsById(id);
    }
}
