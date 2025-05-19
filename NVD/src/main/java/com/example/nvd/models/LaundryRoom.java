package com.example.nvd.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
public class LaundryRoom {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToOne
    private StudentDorm studentDorm;
    @ManyToOne
    private LaundryMachine machine;

    public LaundryRoom(StudentDorm studentDorm) {
        this.studentDorm = studentDorm;
    }

    public void setStudentDorm(StudentDorm studentDorm) {
        this.studentDorm = studentDorm;
    }

    public void setMachine(LaundryMachine machine) {
        this.machine = machine;
    }
}
