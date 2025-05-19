package com.example.nvd.service.impl;

import com.example.nvd.models.LostAndFound;
import com.example.nvd.repository.LostAndFoundRepository;
import com.example.nvd.service.LostAndFoundService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LostAndFoundServiceImpl implements LostAndFoundService {

    private final LostAndFoundRepository lostAndFoundRepository;

    public LostAndFoundServiceImpl(LostAndFoundRepository lostAndFoundRepository) {
        this.lostAndFoundRepository = lostAndFoundRepository;
    }

    @Override
    public List<LostAndFound> show() {
        return lostAndFoundRepository.findAll();
    }

    @Override
    public LostAndFound addLostAndFound(String title, String description, String username, Byte[] img) {
        LostAndFound laf = new LostAndFound(title, description, username, img);
        return lostAndFoundRepository.save(laf);
    }
}
