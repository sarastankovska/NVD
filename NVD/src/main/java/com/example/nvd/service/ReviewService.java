package com.example.nvd.service;

import com.example.nvd.models.Review;
import com.example.nvd.models.User;

import java.util.List;

public interface ReviewService {
    List<Review> show(Long dormId);
    Review addReview(User user, String comment, int stars,Long dormId);
    Review editReview(Long id,User user, String comment, int stars,Long dormId);
    void deleteReview(Long id);
}
