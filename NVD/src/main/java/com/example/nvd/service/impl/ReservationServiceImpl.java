package com.example.nvd.service.impl;

import com.example.nvd.models.LaundryMachine;
import com.example.nvd.models.Reservation;
import com.example.nvd.models.User;
import com.example.nvd.repository.LaundryMachineRepository;
import com.example.nvd.repository.ReservationRepository;
import com.example.nvd.repository.UserRepository;
import com.example.nvd.service.ReservationService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class ReservationServiceImpl implements ReservationService {

    private final ReservationRepository reservationRepository;
    private final LaundryMachineRepository laundryMachineRepository;
    private final UserRepository userRepository;

    public ReservationServiceImpl(ReservationRepository reservationRepository, LaundryMachineRepository laundryMachineRepository, UserRepository userRepository) {
        this.reservationRepository = reservationRepository;
        this.laundryMachineRepository = laundryMachineRepository;
        this.userRepository = userRepository;
    }

    @Override
    public Reservation reserve(Long machineId, Long userId, LocalDateTime startTime) {
        LaundryMachine machine = laundryMachineRepository.findById(machineId).orElseThrow();
        User user = userRepository.findById(userId).orElseThrow();
        LocalDateTime endTime = startTime.plusMinutes(90);

        // Check if overlapping with any reservation
        List<Reservation> conflicts = reservationRepository.findByMachineIdAndStartTimeBetween(machineId, startTime, endTime.minusMinutes(1));
        if (!conflicts.isEmpty()) throw new RuntimeException("Slot already reserved.");

        Reservation reservation = new Reservation(machine, user, startTime);
        return reservationRepository.save(reservation);
    }

    @Override
    public List<LocalDateTime> getAvailableSlots(Long machineId) {
        LocalDateTime dayStart = LocalDateTime.now().withHour(8).withMinute(0).withSecond(0).withNano(0);
        LocalDateTime dayEnd = dayStart.withHour(23).withMinute(59);

        List<LocalDateTime> available = new ArrayList<>();
        List<Reservation> reservations = reservationRepository.findByMachineId(machineId);

        LocalDateTime slot = dayStart;
        while (slot.plusMinutes(90).isBefore(dayEnd)) {
            LocalDateTime end = slot.plusMinutes(90);
            final LocalDateTime finalSlot = slot;
            final LocalDateTime finalEnd = end;
            boolean overlaps = reservations.stream()
                    .anyMatch(r -> !(r.getEndTime().isBefore(finalSlot) || r.getStartTime().isAfter(finalEnd)));
            if (!overlaps) available.add(slot);
            slot = slot.plusMinutes(90);
        }
        return available;
    }

    @Override
    public List<Reservation> getReservationsForMachine(Long machineId) {
        return reservationRepository.findByMachineId(machineId);
    }
}