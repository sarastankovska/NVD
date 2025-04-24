package com.example.nvd.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class LaundryRoom {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToOne
    private StudentDorm studentDorm;
    @ManyToOne
    private LaundryMachine machine;

    public LaundryRoom(StudentDorm studentDorm, LaundryMachine machine) {
        this.studentDorm = studentDorm;
        this.machine = machine;
    }
}
