package com.example.nvd.service.impl;

import com.example.nvd.models.Payment;
import com.example.nvd.models.User;
import com.example.nvd.repository.PaymentRepository;
import com.example.nvd.service.PaymentService;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class PaymentServiceImpl implements PaymentService {
    private final PaymentRepository paymentRepository;

    public PaymentServiceImpl(PaymentRepository paymentRepository) {
        this.paymentRepository = paymentRepository;
    }

    @Override
    public List<Payment> show() {
        return paymentRepository.findAll();
    }

    @Override
    public Payment addPayment(float sum, Date date, User user, String description) {
        Payment payment=new Payment(sum,date,user,description);
        return this.paymentRepository.save(payment);
    }
}
