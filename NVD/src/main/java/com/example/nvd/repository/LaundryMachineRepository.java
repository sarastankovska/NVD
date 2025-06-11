package com.example.nvd.repository;

import com.example.nvd.models.LaundryMachine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LaundryMachineRepository extends JpaRepository<LaundryMachine, Long> {

}