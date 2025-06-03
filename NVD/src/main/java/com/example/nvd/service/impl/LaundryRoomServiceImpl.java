package com.example.nvd.service.impl;

import com.example.nvd.models.LaundryMachine;
import com.example.nvd.models.LaundryRoom;
import com.example.nvd.models.StudentDorm;
import com.example.nvd.repository.LaundryRoomRepository;
import com.example.nvd.service.LaundryRoomService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class LaundryRoomServiceImpl implements LaundryRoomService {

    private final LaundryRoomRepository laundryRoomRepository;

    public LaundryRoomServiceImpl(LaundryRoomRepository laundryRoomRepository) {
        this.laundryRoomRepository = laundryRoomRepository;
    }

    @Override
    public List<LaundryRoom> show(Long studentDormId) {
        return laundryRoomRepository.findAll().stream().filter(laundryRoom -> laundryRoom.getStudentDorm().getId().equals(studentDormId)).collect(Collectors.toList());
    }

    @Override
    public LaundryRoom addLaundryRoom(StudentDorm dorm) {
        LaundryRoom lr = new LaundryRoom(dorm);
        return laundryRoomRepository.save(lr);
    }

    @Override
    public void addLaundryMachine(Long id) {
        LaundryRoom lr = laundryRoomRepository.findById(id).orElse(null);
        lr.setMachine(new LaundryMachine(false));
    }
}
