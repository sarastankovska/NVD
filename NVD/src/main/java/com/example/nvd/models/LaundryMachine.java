package com.example.nvd.models;

import com.fasterxml.jackson.databind.node.LongNode;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class LaundryMachine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private boolean isOccupied;

    public LaundryMachine(boolean isOccupied) {
        this.isOccupied = isOccupied;
    }
}
