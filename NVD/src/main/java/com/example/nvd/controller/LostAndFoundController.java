package com.example.nvd.controller;

import com.example.nvd.models.LostAndFound;
import com.example.nvd.models.User;
import com.example.nvd.service.LostAndFoundService;
import com.example.nvd.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

import static org.apache.tomcat.util.buf.ByteChunk.convertToBytes;

@RestController
@RequestMapping("/api/lostandfound")
@CrossOrigin(origins = "http://localhost:5173")
public class LostAndFoundController {
    private final LostAndFoundService lostAndFoundService;
    private final UserService userService;

    public LostAndFoundController(LostAndFoundService lostAndFoundService, UserService userService) {
        this.lostAndFoundService = lostAndFoundService;
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<List<LostAndFound>> show() {
        try {
            List<LostAndFound> list = lostAndFoundService.show();
            return ResponseEntity.ok(list);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    @PostMapping("/add")
    public LostAndFound addLostAndFound(
            @RequestParam String title,
            @RequestParam String description,
            @RequestParam("image") MultipartFile image,
            @RequestParam Long userId
    ) throws IOException {

        User user = userService.findById(userId);

        LostAndFound item = new LostAndFound();
        item.setTitle(title);
        item.setDescription(description);
        item.setUser(user);
        item.setImg(image.getBytes());

        return lostAndFoundService.addLostAndFound(item);
    }
    private Byte[] convertToBytes(MultipartFile file) throws IOException {
        byte[] bytes = file.getBytes();
        Byte[] byteObjects = new Byte[bytes.length];
        for (int i = 0; i < bytes.length; i++) {
            byteObjects[i] = bytes[i];
        }
        return byteObjects;
    }
    @PutMapping("/{id}/mark-as-found")
    public void markAsFound(@PathVariable Long id, @RequestParam Long userId) {
        LostAndFound item = lostAndFoundService.findById(id);
        if (!item.getUser().getId().equals(userId)) {
            throw new RuntimeException("Не сте овластени да го обележите овој предмет.");
        }
        item.setFound(true);
        lostAndFoundService.save(item);
    }


}
