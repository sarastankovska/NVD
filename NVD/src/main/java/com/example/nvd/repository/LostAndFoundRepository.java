package com.example.nvd.repository;

import com.example.nvd.models.LostAndFound;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
@Repository
public interface LostAndFoundRepository extends JpaRepository<LostAndFound, Long> {
    List<LostAndFound> findAllByIsFoundFalse();
}
