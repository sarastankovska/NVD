package com.example.nvd.service;

import com.example.nvd.models.Room;

import java.util.List;

public interface RoomService {
    List<Room> show();
    Room addRoom(int numRoom);
    void deleteRoom(Long id);
    Room findById(Long id);
}
