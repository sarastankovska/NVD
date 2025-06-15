package com.example.nvd.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Entity
@NoArgsConstructor
public class Maintaince {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String description;
    @ManyToMany
    @JsonManagedReference
    private List<Room> rooms;
    @ManyToMany
    @JsonManagedReference
    private List<StudentDorm> dorms;

    public Maintaince(String description, List<Room> rooms) {
        this.description = description;
        this.rooms = rooms;
    }
}
