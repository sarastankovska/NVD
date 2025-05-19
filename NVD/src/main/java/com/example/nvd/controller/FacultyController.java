package com.example.nvd.controller;

import com.example.nvd.models.Faculty;
import com.example.nvd.service.FacultyService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/faculties")
@CrossOrigin(origins = "http://localhost:5173")
public class FacultyController {
    private final FacultyService facultyService;

    public FacultyController(FacultyService facultyService) {
        this.facultyService = facultyService;
    }
    @GetMapping
    public List<Faculty> show() {
        return facultyService.show();
    }
    @PostMapping("/add")
    public Faculty addFaculty(@RequestBody String name, @RequestBody String address) {
        return facultyService.addFaculty(name, address);
    }
    @PutMapping("/{id}")
    public Faculty editFaculty(@PathVariable Long id, @RequestBody String name, @RequestBody String address) {
        return facultyService.editFaculty(id, name, address);
    }
}
