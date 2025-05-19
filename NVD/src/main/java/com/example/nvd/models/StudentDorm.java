package com.example.nvd.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@Entity
public class StudentDorm {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String address;
    private String director;
    private int capacity;
    @OneToMany
    private List<Room> rooms;


    public StudentDorm(String name, String address, String director, int capacity) {
        this.name = name;
        this.address = address;
        this.director = director;
        this.capacity = capacity;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public void setRooms(Room rooms) {
        this.rooms.add(rooms);
    }
}
