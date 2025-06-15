package com.example.nvd.service;

import com.example.nvd.models.Event;
import com.example.nvd.models.StudentDorm;

import java.util.Date;
import java.util.List;

public interface EventService {
    List<Event> showEvents(Long dormId);
    Event addEvent(StudentDorm dorm, String title, String description, Date date);
    Event editEvent(Long id,Long dormId, String title, String description, Date date);
    void deleteEvent(Long id);

}
