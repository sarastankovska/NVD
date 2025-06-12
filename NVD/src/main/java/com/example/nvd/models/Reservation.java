
package com.example.nvd.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@Entity
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "machine_id")
    private LaundryMachine machine;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private LocalDateTime startTime;
    private LocalDateTime endTime;

    public Reservation(LaundryMachine machine, User user, LocalDateTime startTime) {
        this.machine = machine;
        this.user = user;
        this.startTime = startTime;
        this.endTime = startTime.plusMinutes(90);
    }
}