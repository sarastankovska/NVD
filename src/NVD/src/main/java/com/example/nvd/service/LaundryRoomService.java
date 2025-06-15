package com.example.nvd.service;


import com.example.nvd.models.LaundryRoom;
import com.example.nvd.models.StudentDorm;

import java.util.List;

public interface LaundryRoomService {
    LaundryRoom show(Long studentDormId);
    LaundryRoom addLaundryRoom(StudentDorm dorm);

    void addLaundryMachine(Long id);

}
