package com.example.nvd.service;

import com.example.nvd.models.Faculty;

import java.util.List;

public interface FacultyService {
    List<Faculty> show();
    Faculty addFaculty(String name, String address);

    Faculty editFaculty(Long id, String name, String address);

}
