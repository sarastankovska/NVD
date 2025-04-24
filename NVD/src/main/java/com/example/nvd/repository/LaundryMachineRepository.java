package com.example.nvd.repository;

import com.example.nvd.models.LaundryMachine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LaundryMachineRepository extends JpaRepository<Long, LaundryMachine> {

}