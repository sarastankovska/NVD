package com.example.nvd.init;

import com.example.nvd.models.Room;
import com.example.nvd.models.StudentDorm;
import com.example.nvd.repository.RoomRepository;
import com.example.nvd.repository.StudentDormRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class RoomSeeder implements CommandLineRunner {

    private final RoomRepository roomRepository;
    private final StudentDormRepository studentDormRepository;

    public RoomSeeder(RoomRepository roomRepository, StudentDormRepository studentDormRepository) {
        this.roomRepository = roomRepository;
        this.studentDormRepository = studentDormRepository;
    }

    @Override
    public void run(String... args) {
        insertRooms(100, 110, 4, 1L);
        insertRooms(200, 210, 4, 1L);
        insertRooms(300, 310, 4, 1L);

        insertRooms(100, 110, 2, 2L);
        insertRooms(200, 210, 2, 2L);
        insertRooms(300, 310, 2, 2L);
    }

    private void insertRooms(int start, int end, int capacity, Long dormId) {
        StudentDorm dorm = studentDormRepository.findById(dormId).get();
        for (int i = start; i <= end; i++) {
            boolean isExists = roomRepository.existsByNumRoomAndDorm(i, dorm);
            if (!isExists) {
                Room room = new Room();
                room.setNumRoom(i);
                room.setDorm(dorm);
                room.setCapacity(capacity);
                roomRepository.save(room);
            }
        }
    }
}

