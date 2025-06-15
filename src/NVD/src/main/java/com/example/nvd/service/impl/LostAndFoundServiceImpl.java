package com.example.nvd.service.impl;

import com.example.nvd.models.LostAndFound;
import com.example.nvd.models.User;
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
    public LostAndFound addLostAndFound(LostAndFound lostAndFound) {
        LostAndFound laf = new LostAndFound(lostAndFound.getTitle(),lostAndFound.getDescription(),lostAndFound.getUser(),lostAndFound.getImg());
        return lostAndFoundRepository.save(laf);
    }
    @Override
    public LostAndFound findById(Long id) {
        return lostAndFoundRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Предметот не е пронајден со ID: " + id));
    }

    @Override
    public LostAndFound save(LostAndFound item) {
        return lostAndFoundRepository.save(item);
    }

}
