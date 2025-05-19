package com.example.nvd.service;

import com.example.nvd.models.StudentDorm;

import java.util.List;

public interface StudentDormService {
    List<StudentDorm> show();
    StudentDorm addStudentDorm(String name, String address, String director, int capacity);
    void deleteStudentDorm(Long id);
    StudentDorm editStudentDorm(Long id,String name, String address, String director, int capacity);
}
