package com.example.nvd.service;

import com.example.nvd.models.LostAndFound;
import com.example.nvd.models.User;

import java.util.List;

public interface LostAndFoundService {
    List<LostAndFound> show();
    LostAndFound addLostAndFound(LostAndFound lostAndFound);
    LostAndFound findById(Long id);
    LostAndFound save(LostAndFound item);

}
