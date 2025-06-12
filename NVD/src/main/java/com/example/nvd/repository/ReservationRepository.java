package com.example.nvd.repository;

import com.example.nvd.models.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    List<Reservation> findByMachineId(Long machineId);
    List<Reservation> findByMachineIdAndStartTimeBetween(Long machineId, LocalDateTime start, LocalDateTime end);
}
