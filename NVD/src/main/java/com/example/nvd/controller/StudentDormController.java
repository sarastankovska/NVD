package com.example.nvd.controller;

import com.example.nvd.models.StudentDorm;
import com.example.nvd.service.StudentDormService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/dorms")
@CrossOrigin(origins = "http://localhost:5173")
public class StudentDormController {
    private final StudentDormService studentDormService;

    public StudentDormController(StudentDormService studentDormService) {
        this.studentDormService = studentDormService;
    }
    @GetMapping
    public List<StudentDorm> show() {
        return studentDormService.show();
    }
    @PostMapping("/add")
    public StudentDorm addStudentDorm(@RequestBody String name,@RequestBody String address,@RequestBody String director,@RequestBody int capacity) {
        return studentDormService.addStudentDorm(name, address, director, capacity);
    }
    @PostMapping("/delete/{id}")
    public void deleteStudentDorm(@PathVariable Long id) {
        studentDormService.deleteStudentDorm(id);
    }
    @PutMapping("/edit/{id}")
    public StudentDorm editStudentDorm(@PathVariable Long id,@RequestBody String name,@RequestBody String address, @RequestBody String director,@RequestBody int capacity) {
        return studentDormService.editStudentDorm(id, name, address, director, capacity);
    }
}
