package com.example.nvd.models;

import com.example.nvd.service.UserService;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@Entity
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;
    private int numRoom;
    @ManyToOne
    @JoinColumn(name="dorm_id")
    @JsonBackReference
    private StudentDorm dorm;
    private int capacity;


    public Room(int numRoom) {
        this.numRoom = numRoom;
    }

}