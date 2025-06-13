package com.example.nvd.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.fasterxml.jackson.annotation.JsonIgnore;
@Data
@NoArgsConstructor
@Entity
public class LostAndFound {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    @ManyToOne
    private User user;
    @Lob
    private byte[] img;
    private boolean isFound = false;


    public LostAndFound(String title, String description, User user, byte[] img) {
        this.title = title;
        this.description = description;
        this.user = user;
        this.img = img;
        this.isFound=false;
    }


}
