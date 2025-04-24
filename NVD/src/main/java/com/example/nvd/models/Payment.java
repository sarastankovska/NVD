package com.example.nvd.models;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private float sum;
    private Date date;
    @ManyToOne
    private User user;
    private String description;

    public Payment(float sum, Date date, User user, String description) {
        this.sum = sum;
        this.date = date;
        this.user = user;
        this.description = description;
    }
}
