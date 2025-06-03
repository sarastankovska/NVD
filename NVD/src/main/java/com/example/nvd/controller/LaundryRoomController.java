package com.example.nvd.controller;

import com.example.nvd.models.LaundryRoom;
import com.example.nvd.models.StudentDorm;
import com.example.nvd.service.LaundryRoomService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/lrooms")
@CrossOrigin(origins = "http://localhost:5173")
public class LaundryRoomController {
    private final LaundryRoomService laundryRoomService;

    public LaundryRoomController(LaundryRoomService laundryRoomService) {
        this.laundryRoomService = laundryRoomService;
    }
    @GetMapping
    public List<LaundryRoom> show(@PathVariable Long studentDormId) {
        return laundryRoomService.show(studentDormId);
    }
    @PostMapping("/add-lroom")
    public LaundryRoom addLaundryRoom(@RequestBody StudentDorm dorm) {
        return laundryRoomService.addLaundryRoom(dorm);
    }
    @PostMapping("/add-machine/{id}")
    public void addLaundryMachine(@PathVariable Long id) {
        laundryRoomService.addLaundryMachine(id);
    }
}
