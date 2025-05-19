package com.example.nvd.service.impl;

import com.example.nvd.models.Event;
import com.example.nvd.models.StudentDorm;
import com.example.nvd.repository.EventRepository;
import com.example.nvd.repository.StudentDormRepository;
import com.example.nvd.service.EventService;
import com.example.nvd.service.StudentDormService;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class EventServiceImpl implements EventService {
    private final EventRepository eventRepository;
    private final StudentDormRepository studentDormRepository;

    public EventServiceImpl(EventRepository eventRepository, StudentDormRepository studentDormRepository) {
        this.eventRepository = eventRepository;
        this.studentDormRepository = studentDormRepository;
    }

    @Override
    public List<Event> showEvents() {
        return eventRepository.findAll();
    }

    @Override
    public Event addEvent(StudentDorm dorm, String title, String description, Date date) {
        Event event=new Event(dorm,title,description,date);
        return eventRepository.save(event);
    }

    @Override
    public Event editEvent(Long id, Long dormId, String title, String description, Date date) {
        if(eventRepository.existsById(id)){
            Event event=eventRepository.findById(id).orElseThrow(null);
            StudentDorm getDorm = studentDormRepository.findById(dormId).orElse(null);
            event.setDorm(getDorm);
            event.setTitle(title);
            event.setDescription(description);
            event.setDate(date);
            return this.eventRepository.save(event);
        }
        return null;
    }

    @Override
    public void deleteEvent(Long id) {
        Event event=eventRepository.findById(id).orElseThrow(null);
        this.eventRepository.delete(event);
    }
}
