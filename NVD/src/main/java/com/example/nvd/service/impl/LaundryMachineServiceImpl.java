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
        return laundryMachineRepository.save(new LaundryMachine());
    }

    @Override
    public void deleteLaundryMachine(Long id) {
        laundryMachineRepository.deleteById(id);
    }





}