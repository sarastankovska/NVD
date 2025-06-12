package com.example.nvd.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@Entity
public class LaundryMachine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
  //  private boolean isOccupied;
    @ManyToOne
    @JoinColumn(name="laundry_id")
    @JsonBackReference
    private LaundryRoom laundryRoom;
    @OneToMany(mappedBy = "machine")
    private List<Reservation> reservations;

}
