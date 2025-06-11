package com.example.nvd.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.service.spi.InjectService;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
//
//@Data
//@Entity
//@NoArgsConstructor
//public class Event {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//    @ManyToMany(fetch = FetchType.EAGER)
//    private List<StudentDorm> dorm;
//    private String title;
//    private String description;
//    private Date date;
//
//    public Event(StudentDorm dorm, String title, String description, Date date) {
//        this.dorm.add(dorm);
//        this.title = title;
//        this.description = description;
//        this.date = date;
//    }
//
//    public void setDorm(StudentDorm dorm) {
//        this.dorm.add(dorm);
//    }
//
//    public void setTitle(String title) {
//        this.title = title;
//    }
//
//    public void setDescription(String description) {
//        this.description = description;
//    }
//
//    public void setDate(Date date) {
//        this.date = date;
//    }
//}
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
