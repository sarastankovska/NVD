package com.example.nvd.controller;

import com.example.nvd.models.Room;
import com.example.nvd.service.RoomService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/rooms")
@CrossOrigin(origins = "http://localhost:5173")
public class RoomController {
    private final RoomService roomService;

    public RoomController(RoomService roomService) {
        this.roomService = roomService;
    }
    @GetMapping
    public List<Room> show() {
        return roomService.show();
    }
    @PostMapping("/add")
    public Room addRoom(@RequestBody int numRoom) {
        return roomService.addRoom(numRoom);
    }
    @PostMapping("/delete/{id}")
    public void deleteRoom(@PathVariable Long id) {
        roomService.deleteRoom(id);
    }
}
