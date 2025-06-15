package com.example.nvd.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@Entity
public class LaundryMachine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private boolean isOccupied;
    @ManyToOne
    @JoinColumn(name="laundry_id")
    @JsonBackReference
    private LaundryRoom laundryRoom;
    private LocalDateTime occupiedUntil;




    public LaundryMachine(boolean isOccupied) {
        this.isOccupied = isOccupied;
    }

    public void setOccupied(boolean occupied) {
        isOccupied = occupied;
    }
}
