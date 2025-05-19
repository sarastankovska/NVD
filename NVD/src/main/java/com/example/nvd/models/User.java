package com.example.nvd.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@Entity
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
    @OneToMany
    private List<Room> rooms;

    public User(String name, String password, String email, StudentDorm dorm, int yearOfStudy, Faculty faculty) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.dorm = dorm;
        this.yearOfStudy = yearOfStudy;
        this.faculty = faculty;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setDorm(StudentDorm dorm) {
        this.dorm = dorm;
    }

    public void setYearOfStudy(int yearOfStudy) {
        this.yearOfStudy = yearOfStudy;
    }

    public void setFaculty(Faculty faculty) {
        this.faculty = faculty;
    }

    public void setRooms(Room rooms) {
        this.rooms.add(rooms);
    }
}
