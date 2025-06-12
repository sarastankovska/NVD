package com.example.nvd.service.impl;

import com.example.nvd.models.LaundryMachine;
import com.example.nvd.models.LaundryRoom;
import com.example.nvd.models.StudentDorm;
import com.example.nvd.repository.LaundryMachineRepository;
import com.example.nvd.repository.LaundryRoomRepository;
import com.example.nvd.service.LaundryRoomService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class LaundryRoomServiceImpl implements LaundryRoomService {

    private final LaundryRoomRepository laundryRoomRepository;
    private final LaundryMachineRepository laundryMachineRepository;

    public LaundryRoomServiceImpl(LaundryRoomRepository laundryRoomRepository, LaundryMachineRepository laundryMachineRepository) {
        this.laundryRoomRepository = laundryRoomRepository;
        this.laundryMachineRepository = laundryMachineRepository;
    }

    @Override
    public LaundryRoom show(Long studentDormId) {
        return laundryRoomRepository.findAll()
                .stream()
                .filter(lr -> lr.getStudentDorm() != null && lr.getStudentDorm().getId().equals(studentDormId))
                .findFirst()
                .orElse(null);
    }

    @Override
    public LaundryRoom addLaundryRoom(StudentDorm dorm) {
        LaundryRoom lr = new LaundryRoom(dorm);
        return laundryRoomRepository.save(lr);
    }

    @Override
    public void addLaundryMachine(Long id) {
            LaundryRoom lr = laundryRoomRepository.findById(id).orElse(null);
            if (lr == null) {
                throw new RuntimeException("Laundry room not found");
            }
            LaundryMachine machine = new LaundryMachine();
            machine.setLaundryRoom(lr);
            lr.getMachine().add(machine);
            laundryRoomRepository.save(lr);

    }
}
