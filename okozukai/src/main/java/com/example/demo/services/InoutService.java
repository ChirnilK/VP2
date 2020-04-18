package com.example.demo.services;

import com.example.demo.entities.Inout;
import com.example.demo.repositories.InoutRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InoutService {

    @Autowired
    private InoutRepo inoutRepo;

    public List<Inout> findAllInout(){
        return (List<Inout>) inoutRepo.findAll();
    }

    public Optional<Inout> findOneInout(int id){
        return inoutRepo.findById(id);
    }

    public List<Inout> findByUser(int user){
        return inoutRepo.findAllByUser(user);
    }

    public Inout creatNewInout(Inout newInout){
        return inoutRepo.save(newInout);

    }
}

