package com.example.nvd.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
public class LostAndFound {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private String username;
    @Lob
    private Byte[] img;

    public LostAndFound(String title, String description, String username, Byte[] img) {
        this.title = title;
        this.description = description;
        this.username = username;
        this.img = img;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setImg(Byte[] img) {
        this.img = img;
    }
}
