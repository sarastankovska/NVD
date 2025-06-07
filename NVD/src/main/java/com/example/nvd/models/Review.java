package com.example.nvd.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    private User user;
    private String comment;
    private int stars;
    @ManyToOne
    private StudentDorm dorm;

    public Review(User user, String comment, int stars,StudentDorm dorm) {
        this.user = user;
        this.comment = comment;
        this.stars = stars;
        this.dorm = dorm;
    }


}
