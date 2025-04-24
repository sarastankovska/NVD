package com.example.nvd.models;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class LostAndFound {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private String username;
    private Byte[] img;

    public LostAndFound(String title, String description, String username, Byte[] img) {
        this.title = title;
        this.description = description;
        this.username = username;
        this.img = img;
    }
}
