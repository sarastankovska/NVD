package com.example.nvd.controller;

import com.example.nvd.models.Faculty;
import com.example.nvd.models.Room;
import com.example.nvd.models.StudentDorm;
import com.example.nvd.models.User;
import com.example.nvd.service.RoomService;
import com.example.nvd.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {
    private final UserService userService;
    private final RoomService roomService;

    public UserController(UserService userService, RoomService roomService) {
        this.userService = userService;
        this.roomService = roomService;
    }
    @GetMapping
    public List<User> show() {
        return userService.show();
    }
    @PostMapping("/add")
    public User addUser(@RequestBody String name, @RequestBody String password, @RequestBody String email, @RequestBody StudentDorm dorm,@RequestBody int yearOfStudy, @RequestBody Faculty faculty) {
        return userService.addUser(name, password, email, dorm, yearOfStudy, faculty);
    }
    @PutMapping("/edit/{id}")
    public User editUser(@PathVariable Long id,@RequestBody String name,@RequestBody String password,@RequestBody String email,@RequestBody StudentDorm dorm,@RequestBody int yearOfStudy,@RequestBody Faculty faculty) {
        return userService.editUser(id, name, password, email, dorm, yearOfStudy, faculty);
    }
    @PostMapping("/delete/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }

    @GetMapping("/room/{id}")
    public List<User> userShowByRoom(@PathVariable Long id) {
        return userService.userShowByRoom(id);
    }
    @PostMapping("/login")
    public User login(@RequestBody User user) {
        return userService.login(user.getEmail(), user.getPassword());
    }
    @PostMapping("/reserve/{userId}/{roomId}")
    public void reserveRoom(@PathVariable Long userId, @PathVariable Long roomId) {
        Room getRoom = roomService.findById(roomId);
        userService.reserveRoom(getRoom, userId);
    }
}
