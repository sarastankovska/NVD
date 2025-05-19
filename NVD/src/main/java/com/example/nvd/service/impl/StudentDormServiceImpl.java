package com.example.nvd.service.impl;

import com.example.nvd.models.StudentDorm;
import com.example.nvd.repository.StudentDormRepository;
import com.example.nvd.service.StudentDormService;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class StudentDormServiceImpl implements StudentDormService {
    private final StudentDormRepository studentDormRepository;

    public StudentDormServiceImpl(StudentDormRepository studentDormRepository) {
        this.studentDormRepository = studentDormRepository;
    }


    @Override
    public List<StudentDorm> show() {
        return studentDormRepository.findAll();
    }

    @Override
    public StudentDorm addStudentDorm(String name, String address, String director, int capacity) {
        StudentDorm dorm=new StudentDorm(name,address,director,capacity);
        return this.studentDormRepository.save(dorm);
    }

    @Override
    public void deleteStudentDorm(Long id) {
         studentDormRepository.deleteById(id);
    }

    @Override
    public StudentDorm editStudentDorm(Long id, String name, String address, String director, int capacity) {
        if(id!=null){
            StudentDorm studentDorm=studentDormRepository.findById(id).orElseThrow(null);
            studentDorm.setName(name);
            studentDorm.setAddress(address);
            studentDorm.setCapacity(capacity);
            studentDorm.setDirector(director);
            return studentDormRepository.save(studentDorm);
        }
        return null;
    }
}
