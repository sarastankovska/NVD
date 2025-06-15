package com.example.nvd.controller;

import com.example.nvd.models.Maintaince;
import com.example.nvd.service.MaintainceService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/maintaince")
@CrossOrigin(origins = "http://localhost:5173")
public class MaintainceController {
    private final MaintainceService maintainceService;

    public MaintainceController(MaintainceService maintainceService) {
        this.maintainceService = maintainceService;
    }
@PostMapping("/add")
    public Maintaince addMaintaince(@RequestBody Maintaince maintaince) {
        return maintainceService.addMaintaince(maintaince);
    }
}
