package com.example.nvd.models;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String password;
    private String email;
    @ManyToOne
    private StudentDorm dorm;
    private int yearOfStudy;
    @ManyToOne
    private Faculty faculty;

    public User(String name, String password, String email, StudentDorm dorm, int yearOfStudy, Faculty faculty) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.dorm = dorm;
        this.yearOfStudy = yearOfStudy;
        this.faculty = faculty;
    }
}
