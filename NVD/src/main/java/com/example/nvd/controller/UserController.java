package com.example.nvd.controller;

import com.example.nvd.models.Faculty;
import com.example.nvd.models.StudentDorm;
import com.example.nvd.models.User;
import com.example.nvd.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }
    @GetMapping
    public List<User> show() {
        return userService.show();
    }
    @PostMapping("/add")
    public User addUser(@RequestBody String name, @RequestBody String password, @RequestBody String email, @RequestBody StudentDorm dorm,@RequestBody int yearOfStudy, @RequestBody Faculty faculty) {
        return userService.addUser(name, password, email, dorm, yearOfStudy, faculty);
    }
    @PutMapping("/edit/{id}")
    public User editUser(@PathVariable Long id,@RequestBody String name,@RequestBody String password,@RequestBody String email,@RequestBody StudentDorm dorm,@RequestBody int yearOfStudy,@RequestBody Faculty faculty) {
        return userService.editUser(id, name, password, email, dorm, yearOfStudy, faculty);
    }
    @PostMapping("/delete/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }
}
