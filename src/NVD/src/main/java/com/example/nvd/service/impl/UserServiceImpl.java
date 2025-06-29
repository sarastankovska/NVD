package com.example.nvd.service.impl;

import com.example.nvd.models.Faculty;
import com.example.nvd.models.Room;
import com.example.nvd.models.StudentDorm;
import com.example.nvd.models.User;
import com.example.nvd.repository.RoomRepository;
import com.example.nvd.repository.UserRepository;
import com.example.nvd.service.UserService;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Collections;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final RoomRepository roomRepository;

    public UserServiceImpl(UserRepository userRepository, RoomRepository roomRepository) {
        this.userRepository = userRepository;
        this.roomRepository = roomRepository;
    }

    @Override
    public User findById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public List<User> show() {
        return userRepository.findAll();
    }

    @Override
    public User addUser(String name, String password, String email, StudentDorm dorm, int yearOfStudy, Faculty faculty) {
        User user = new User(name, password, email, dorm, yearOfStudy, faculty);
        return this.userRepository.save(user);
    }

    @Override
    public User editUser(Long id, String name, String password, String email, StudentDorm dorm, int yearOfStudy, Faculty faculty) {
        if (id != null) {
            User user = userRepository.findById(id).orElseThrow(null);
            user.setDorm(dorm);
            user.setName(name);
            user.setFaculty(faculty);
            user.setEmail(email);
            user.setYearOfStudy(yearOfStudy);
            user.setPassword(password);
            return userRepository.save(user);
        }
        return null;
    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public List<User> userShowByRoom(Long id) {
        List<User> usersList = userRepository.findAll().stream()
                .filter(user -> user.getRoom() != null && user.getRoom().getId() != null && user.getRoom().getId().equals(id))
                .toList();
        if (usersList.isEmpty())
            return Collections.emptyList();
        return usersList;
    }
    @Override
    public User login(String email, String password) {
        return userRepository.findAll().stream()
                .filter(u -> u.getEmail().equals(email) && u.getPassword().equals(password))
                .findFirst()
                .orElseThrow(() -> new RuntimeException("Invalid credentials"));
    }

    @Override
    public void reserveRoom(Room room,Long id) {
        User user= userRepository.findById(id).orElse(null);
        user.setRoom(room);
        roomRepository.save(room);
    }
}
