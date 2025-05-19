package com.example.nvd.controller;

import com.example.nvd.models.Review;
import com.example.nvd.models.User;
import com.example.nvd.service.ReviewService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
@CrossOrigin(origins = "http://localhost:5173")
public class ReviewController {
    private final ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }
    @GetMapping
    public List<Review> show() {
        return reviewService.show();
    }
    @PostMapping("/add")
    public Review addReview(@RequestBody User user,@RequestBody String comment,@RequestBody int stars) {
        return reviewService.addReview(user, comment, stars);
    }
    @PutMapping("/edit/{id}")
    public Review editReview(@PathVariable Long id,@RequestBody User user,@RequestBody String comment, @RequestBody int stars) {
        return reviewService.editReview(id, user, comment, stars);
    }
    @PostMapping("/delete/{id}")
    public void deleteReview(@PathVariable Long id) {
        reviewService.deleteReview(id);
    }
}
