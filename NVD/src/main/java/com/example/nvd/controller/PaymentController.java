package com.example.nvd.controller;

import com.example.nvd.models.Payment;
import com.example.nvd.models.User;
import com.example.nvd.service.PaymentService;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/payments")
@CrossOrigin(origins = "http://localhost:5173")
public class PaymentController {
    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }
    @GetMapping
    public List<Payment> show() {
        return paymentService.show();
    }
    @PostMapping("/add")
    public Payment addPayment(@RequestBody float sum,@RequestBody Date date, @RequestBody User user,@RequestBody String description) {
        return paymentService.addPayment(sum, date, user, description);
    }
}
