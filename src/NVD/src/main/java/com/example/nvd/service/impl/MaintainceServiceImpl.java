package com.example.nvd.service.impl;

import com.example.nvd.models.Maintaince;
import com.example.nvd.models.Room;
import com.example.nvd.models.StudentDorm;
import com.example.nvd.repository.MaintainceRepository;
import com.example.nvd.repository.RoomRepository;
import com.example.nvd.repository.StudentDormRepository;
import com.example.nvd.service.MaintainceService;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MaintainceServiceImpl implements MaintainceService {
    private final MaintainceRepository maintainceRepository;
    private final RoomRepository roomRepository;
    private final StudentDormRepository studentDormRepository;

    public MaintainceServiceImpl(MaintainceRepository maintainceRepository, RoomRepository roomRepository, StudentDormRepository studentDormRepository) {
        this.maintainceRepository = maintainceRepository;
        this.roomRepository = roomRepository;
        this.studentDormRepository = studentDormRepository;
    }

    @Transactional
    @Override
    public Maintaince addMaintaince(Maintaince maintaince) {
        // Fetch Rooms by ID
        List<Room> rooms = maintaince.getRooms().stream()
                .map(r -> roomRepository.findById(r.getId()).orElseThrow(() -> new RuntimeException("Room not found")))
                .collect(Collectors.toList());

        // Fetch Dorms by ID
        List<StudentDorm> dorms = maintaince.getDorms().stream()
                .map(d -> studentDormRepository.findById(d.getId()).orElseThrow(() -> new RuntimeException("Dorm not found")))
                .collect(Collectors.toList());

        maintaince.setRooms(rooms);
        maintaince.setDorms(dorms);

        return maintainceRepository.save(maintaince);
    }
}
