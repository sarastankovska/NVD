package com.example.nvd.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
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
    @OneToMany(mappedBy = "dorm", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Room> rooms;
    @ManyToMany(mappedBy = "dorms")
    @JsonBackReference
    private List<Maintaince> maintainceList;





    public StudentDorm(String name, String address, String director, int capacity) {
        this.name = name;
        this.address = address;
        this.director = director;
        this.capacity = capacity;

    }



    public void setRooms(Room rooms) {
        this.rooms.add(rooms);
    }
}
