package com.example.nvd.service.impl;

import com.example.nvd.models.LaundryMachine;
import com.example.nvd.repository.LaundryMachineRepository;
import com.example.nvd.service.LaundryMachineService;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class LaundryMachineServiceImpl implements LaundryMachineService {

    private final LaundryMachineRepository laundryMachineRepository;

    public LaundryMachineServiceImpl(LaundryMachineRepository laundryMachineRepository) {
        this.laundryMachineRepository = laundryMachineRepository;
    }

    @Override
    public List<LaundryMachine> show() {
        return laundryMachineRepository.findAll();
    }

    @Override
    public LaundryMachine addLaundryMachine() {
        return laundryMachineRepository.save(new LaundryMachine(false));
    }

    @Override
    public void deleteLaundryMachine(Long id) {
        laundryMachineRepository.deleteById(id);
    }

    @Override
    public void occupate(Long id, boolean isOccupied) {
        // laundryMachineRepository.findById(id).ifPresent(lm -> lm.setOccupied(isOccupied));
        LaundryMachine machine = laundryMachineRepository.findById(id).orElseThrow();
        machine.setOccupied(true);
        machine.setOccupiedUntil(LocalDateTime.now().plusMinutes(90)); // 1.5 часа
        laundryMachineRepository.save(machine);
    }

    @Scheduled(cron = "0 0 8 * * *") // секој ден во 8:00
    public void resetMachines() {
        List<LaundryMachine> machines = laundryMachineRepository.findAll();
        for (LaundryMachine machine : machines) {
            machine.setOccupied(false);
            machine.setOccupiedUntil(null);
        }
        laundryMachineRepository.saveAll(machines);
    }
    @Scheduled(fixedRate = 300000) // на секои 5 минути
    public void releaseExpiredMachines() {
        List<LaundryMachine> machines = laundryMachineRepository.findAll();
        for (LaundryMachine machine : machines) {
            if (machine.isOccupied() && machine.getOccupiedUntil() != null &&
                    machine.getOccupiedUntil().isBefore(LocalDateTime.now())) {
                machine.setOccupied(false);
                machine.setOccupiedUntil(null);
            }
        }
        laundryMachineRepository.saveAll(machines);
    }

}