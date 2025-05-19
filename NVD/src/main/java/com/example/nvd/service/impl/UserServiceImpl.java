package com.example.nvd.service.impl;

import com.example.nvd.models.Faculty;
import com.example.nvd.models.StudentDorm;
import com.example.nvd.models.User;
import com.example.nvd.repository.UserRepository;
import com.example.nvd.service.UserService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Override
    public List<User> show() {
        return userRepository.findAll();
    }

    @Override
    public User addUser(String name, String password, String email, StudentDorm dorm, int yearOfStudy, Faculty faculty) {
        User user=new User(name,password,email,dorm,yearOfStudy,faculty);
        return this.userRepository.save(user);
    }

    @Override
    public User editUser(Long id, String name, String password, String email, StudentDorm dorm, int yearOfStudy, Faculty faculty) {
        if(id!=null){
            User user=userRepository.findById(id).orElseThrow(null);
            user.setDorm(dorm);
            user.setName(name);
            user.setFaculty(faculty);
            user.setEmail(email);
            user.setYearOfStudy(yearOfStudy);
            user.setPassword(password);
            return userRepository.save(user);
        }
        return null;
    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
}
