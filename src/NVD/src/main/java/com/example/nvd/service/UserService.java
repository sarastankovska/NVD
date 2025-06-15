package com.example.nvd.service;

import com.example.nvd.models.Faculty;
import com.example.nvd.models.Room;
import com.example.nvd.models.StudentDorm;
import com.example.nvd.models.User;

import java.util.List;

public interface UserService {
    List<User> show();
    User findById(Long id);
    User addUser(String name, String password, String email, StudentDorm dorm, int yearOfStudy, Faculty faculty);
    User editUser(Long id,String name, String password, String email, StudentDorm dorm, int yearOfStudy, Faculty faculty);
    void deleteUser(Long id);
    List<User> userShowByRoom(Long id);
    public User login(String email, String password);
    void reserveRoom(Room room,Long id);

}
