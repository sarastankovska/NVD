package com.example.nvd.repository;

import com.example.nvd.models.Maintaince;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MaintainceRepository extends JpaRepository<Maintaince,Long> {
}
