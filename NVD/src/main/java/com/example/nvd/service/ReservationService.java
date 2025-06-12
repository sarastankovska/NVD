package com.example.nvd.service;


import com.example.nvd.models.Reservation;

import java.time.LocalDateTime;
import java.util.List;

public interface ReservationService {
    Reservation reserve(Long machineId, Long userId, LocalDateTime startTime);
    List<LocalDateTime> getAvailableSlots(Long machineId);
    List<Reservation> getReservationsForMachine(Long machineId);
}