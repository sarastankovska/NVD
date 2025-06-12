package com.example.nvd.controller;


import com.example.nvd.models.Reservation;
import com.example.nvd.service.ReservationService;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/reservations")
@CrossOrigin(origins = "http://localhost:5173")
public class ReservationController {

    private final ReservationService reservationService;

    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    @PostMapping("/reserve")
    public Reservation reserve(@RequestBody ReservationRequest request) {
        return reservationService.reserve(request.machineId, request.userId, request.startTime);
    }

    @GetMapping("/slots/{machineId}")
    public List<LocalDateTime> getAvailableSlots(@PathVariable Long machineId) {
        return reservationService.getAvailableSlots(machineId);
    }

    @GetMapping("/machine/{machineId}")
    public List<Reservation> getReservations(@PathVariable Long machineId) {
        return reservationService.getReservationsForMachine(machineId);
    }

    public static class ReservationRequest {
        public Long machineId;
        public Long userId;
        public LocalDateTime startTime;
    }
}