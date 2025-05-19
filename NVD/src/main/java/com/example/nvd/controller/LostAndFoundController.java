package com.example.nvd.controller;

import com.example.nvd.models.LostAndFound;
import com.example.nvd.service.LostAndFoundService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/lostandfound")
@CrossOrigin(origins = "http://localhost:5173")
public class LostAndFoundController {
    private final LostAndFoundService lostAndFoundService;

    public LostAndFoundController(LostAndFoundService lostAndFoundService) {
        this.lostAndFoundService = lostAndFoundService;
    }
    @GetMapping
    public List<LostAndFound> show() {
        return lostAndFoundService.show();
    }
    @PostMapping("/add")
    public LostAndFound addLostAndFound(@RequestBody String title,@RequestBody String description, @RequestBody String username, @RequestBody Byte[] img) {
        return lostAndFoundService.addLostAndFound(title, description, username, img);
    }
}
