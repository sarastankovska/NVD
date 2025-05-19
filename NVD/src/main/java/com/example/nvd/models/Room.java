package com.example.nvd.models;

import com.example.nvd.service.UserService;
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

    public Room(int numRoom) {
        this.numRoom = numRoom;
    }

    public void setNumRoom(int numRoom) {
        this.numRoom = numRoom;
    }
}