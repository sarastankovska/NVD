package com.example.nvd.controller;

import com.example.nvd.models.LaundryMachine;
import com.example.nvd.service.LaundryMachineService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/laundry")
@CrossOrigin(origins = "http://localhost:5173")
public class LaundryMachineController {
    private final LaundryMachineService laundryMachineService;

    public LaundryMachineController(LaundryMachineService laundryMachineService) {
        this.laundryMachineService = laundryMachineService;
    }
    @GetMapping
    public List<LaundryMachine> show() {
        return laundryMachineService.show();
    }
    @PostMapping("/add")
    public LaundryMachine addLaundryMachine() {
        return laundryMachineService.addLaundryMachine();
    }
    @PostMapping("/delete/{id}")
    public void deleteLaundryMachine(@PathVariable Long id) {
        laundryMachineService.deleteLaundryMachine(id);
    }


}
