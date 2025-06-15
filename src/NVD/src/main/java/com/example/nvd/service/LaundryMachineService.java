package com.example.nvd.service;

import com.example.nvd.models.LaundryMachine;

import java.util.List;

public interface LaundryMachineService {
    List<LaundryMachine> show();
    LaundryMachine addLaundryMachine();

    void deleteLaundryMachine(Long id);

    void occupate(Long id, boolean isOccupied);

    public void resetMachines();
    public void releaseExpiredMachines() ;
}