package com.example.nvd.repository;

import com.example.nvd.models.LostAndFound;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LostAndFoundRepository extends JpaRepository<Long, LostAndFound> {

}