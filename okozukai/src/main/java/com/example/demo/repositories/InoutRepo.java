package com.example.demo.repositories;

import com.example.demo.entities.Inout;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InoutRepo extends CrudRepository<Inout, Integer> {
    public List<Inout> findAllByUser(int user);
}

