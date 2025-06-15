package com.example.nvd.service.impl;

import com.example.nvd.models.Faculty;
import com.example.nvd.repository.FacultyRepository;
import com.example.nvd.service.FacultyService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FacultyServiceImpl implements FacultyService {

    private final FacultyRepository facultyRepository;

    public FacultyServiceImpl(FacultyRepository facultyRepository) {
        this.facultyRepository = facultyRepository;
    }

    @Override
    public List<Faculty> show() {
        return facultyRepository.findAll();
    }

    @Override
    public Faculty addFaculty(String name, String address) {
       Faculty faculty = new Faculty(name, address);
       return facultyRepository.save(faculty);
    }

    @Override
    public Faculty editFaculty(Long id, String name, String address) {
        Faculty faculty = facultyRepository.findById(id).orElse(null);
        if(faculty != null){
            faculty.setName(name);
            faculty.setAddress(address);
            return facultyRepository.save(faculty);
        }
        return null;
    }
}
