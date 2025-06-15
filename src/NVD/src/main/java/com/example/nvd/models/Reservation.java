//package com.example.nvd.models;
//
//import jakarta.persistence.*;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//import java.time.LocalDateTime;
//
//@Entity
//@Data
//@NoArgsConstructor
//public class Reservation {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @ManyToOne
//    private LaundryMachine laundryMachine;
//
//    @ManyToOne
//    private User user;
//
//    private LocalDateTime startTime;
//    private LocalDateTime endTime;
//}
//
