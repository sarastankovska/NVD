package com.example.nvd.repository;

import com.example.nvd.models.LaundryMachine;
import com.example.nvd.models.LaundryRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LaundryRoomRepository extends JpaRepository<LaundryRoom, Long> {



}