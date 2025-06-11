package com.example.nvd.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@Entity
@Table(name="dorm_users")
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
    @ManyToOne
    private Room room;



    public User(String name, String password, String email, StudentDorm dorm, int yearOfStudy, Faculty faculty) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.dorm = dorm;
        this.yearOfStudy = yearOfStudy;
        this.faculty = faculty;
    }




}
