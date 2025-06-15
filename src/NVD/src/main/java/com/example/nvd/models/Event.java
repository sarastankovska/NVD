package com.example.nvd.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.service.spi.InjectService;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private StudentDorm dorm;

    private String title;
    private String description;
    private Date date;

    public Event(StudentDorm dorm, String title, String description, Date date) {
        this.dorm = dorm;
        this.title = title;
        this.description = description;
        this.date = date;
    }

}
