package com.example.demo.controllers;

import com.example.demo.entities.Inout;
import com.example.demo.services.InoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class InoutController {

    @Autowired
    InoutService inoutService;

    @GetMapping("/rest/inout")
    public List<Inout> getAllInout(){
        return inoutService.findAllInout();
    }

    @GetMapping("/rest/inout/user/{user}")
    public List<Inout> getInoutByUser(@PathVariable int user){
        return inoutService.findByUser(user);
    }

    @PostMapping("/rest/inout")
    public Inout createNewInout(@RequestBody Inout inout){
        return inoutService.creatNewInout(inout);
    }
}
