package com.example.nvd.service;

import com.example.nvd.models.Payment;
import com.example.nvd.models.User;

import java.util.Date;
import java.util.List;

public interface PaymentService {
    List<Payment> show();
    Payment addPayment(float sum, Date date, User user, String description);
}
