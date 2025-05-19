package com.example.nvd.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@Entity
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

    public void setSum(float sum) {
        this.sum = sum;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
