package com.example.nvd.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

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

    public LaundryMachine(boolean isOccupied) {
        this.isOccupied = isOccupied;
    }

    public void setOccupied(boolean occupied) {
        isOccupied = occupied;
    }
}
