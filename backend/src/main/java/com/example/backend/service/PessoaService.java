package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.backend.records.PessoaDTO;
import com.example.backend.repository.PessoaRepository;

@Service
public class PessoaService {

    @Autowired
    private PessoaRepository pessoaRepository;

    public PessoaDTO salvarPessoa(PessoaDTO pessoadto){
        return pessoaRepository.save(pessoadto);
    }
    
    
    
}
