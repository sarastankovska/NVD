package com.example.nvd.repository;

import com.example.nvd.models.StudentDorm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentDormRepository extends JpaRepository<StudentDorm, Long> {

}