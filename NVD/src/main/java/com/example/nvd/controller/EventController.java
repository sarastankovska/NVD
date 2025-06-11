package com.example.nvd.controller;

import com.example.nvd.models.Event;
import com.example.nvd.models.StudentDorm;
import com.example.nvd.service.EventService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/events")
@CrossOrigin(origins = "http://localhost:5173")
public class EventController {
    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping("/{dormId}")
    public List<Event> showEvents(@PathVariable Long dormId) {
        return eventService.showEvents(dormId);
    }

    @PostMapping("/add")
    public Event addEvent(@RequestBody StudentDorm dorm, @RequestBody String title, @RequestBody String description, @RequestBody Date date) {
        return eventService.addEvent(dorm, title, description, date);
    }
    @PutMapping("/edit/{id}")
    public Event editEvent(@PathVariable Long id, @RequestBody Long dormId, @RequestBody String title, @RequestBody String description, @RequestBody Date date) {
        return eventService.editEvent(id, dormId, title, description, date);
    }

    @PostMapping("/delete/{id}")
    public void deleteEvent(@PathVariable Long id) {
        eventService.deleteEvent(id);
    }
}
