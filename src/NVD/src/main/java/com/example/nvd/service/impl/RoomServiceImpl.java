package com.example.nvd.service.impl;

import com.example.nvd.models.Room;
import com.example.nvd.repository.RoomRepository;
import com.example.nvd.service.RoomService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomServiceImpl implements RoomService {
    private final RoomRepository roomRepository;

    @Override
    public List<Room> show() {
        return roomRepository.findAll();
    }

    @Override
    public Room addRoom(int numRoom) {
        Room room=new Room(numRoom);
        return this.roomRepository.save(room);
    }

    @Override
    public void deleteRoom(Long id) {
        this.roomRepository.deleteById(id);
    }

    @Override
    public Room findById(Long id) {
        return roomRepository.findById(id).orElse(null);
    }

    public RoomServiceImpl(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }
}
