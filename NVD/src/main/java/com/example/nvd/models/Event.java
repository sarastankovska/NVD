package com.example.nvd.models;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.service.spi.InjectService;

import java.util.Date;

@Data
@NoArgsConstructor
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToMany
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
