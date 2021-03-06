package com.example.demo.services;

import com.example.demo.configs.MyUserDetailsService;
import com.example.demo.entities.Inout;
import com.example.demo.entities.User;
import com.example.demo.repositories.InoutRepo;
import com.example.demo.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private InoutRepo inoutRepo;
    @Autowired
    private MyUserDetailsService myUserDetailsService;

    public List<User> findAllUsers(){
        return (List<User>) userRepo.findAll();
    }

    public User findOneUser(int user_id){
        User user = userRepo.findById(user_id);
        if(user==null) return null;

        List<Inout> inouts = inoutRepo.findAllByUser(user_id);
        user.setInouts(inouts);

        return user;
    }

    public User findCurrentUser() {
        // the login session is stored between page reloads,
        // and we can access the current authenticated user with this
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepo.findByUsername(username);
    }
    public User registerUser(User user) {
        return myUserDetailsService.addUser(user.getUsername(), user.getPassword());
    }
}
