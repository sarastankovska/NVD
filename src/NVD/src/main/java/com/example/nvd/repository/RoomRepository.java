package com.example.nvd.repository;

import com.example.nvd.models.Room;
import com.example.nvd.models.StudentDorm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepository extends JpaRepository<Room, Long> {
    boolean existsByNumRoomAndDorm(int numRoom, StudentDorm dorm);
}
