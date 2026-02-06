package com.example.backend.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Pessoa;
import com.example.backend.records.PessoaDTO;
import com.example.backend.repository.PessoaRepository;

@Service
public class PessoaService {

    @Autowired
    private PessoaRepository pessoaRepository;

    public Pessoa criar(PessoaDTO pessoaDTO){
        Pessoa usuario = new Pessoa();
        BeanUtils.copyProperties(pessoaDTO, usuario);
        return pessoaRepository.save(usuario);
    
    
    
}
