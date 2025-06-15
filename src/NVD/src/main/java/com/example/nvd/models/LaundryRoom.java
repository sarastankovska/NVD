package com.example.nvd.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@Entity
public class LaundryRoom {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToOne
    private StudentDorm studentDorm;
    @OneToMany(mappedBy = "laundryRoom", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<LaundryMachine> machine = new ArrayList<>();

    public LaundryRoom(StudentDorm studentDorm) {
        this.studentDorm = studentDorm;
    }

}
