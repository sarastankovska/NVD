package com.example.nvd.models;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class StudentDorm {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String address;
    private String director;
    private int capacity;


    public StudentDorm(String name, String address, String director, int capacity) {
        this.name = name;
        this.address = address;
        this.director = director;
        this.capacity = capacity;
    }
}
