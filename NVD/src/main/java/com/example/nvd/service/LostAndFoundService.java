package com.example.nvd.service;

import com.example.nvd.models.LostAndFound;

import java.util.List;

public interface LostAndFoundService {
    List<LostAndFound> show();
    LostAndFound addLostAndFound(String title, String description, String username, Byte[] img);
}
