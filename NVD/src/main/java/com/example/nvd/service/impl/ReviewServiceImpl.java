package com.example.nvd.service.impl;

import com.example.nvd.models.Review;
import com.example.nvd.models.User;
import com.example.nvd.repository.ReviewRepository;
import com.example.nvd.service.ReviewService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewServiceImpl implements ReviewService {
    private final ReviewRepository reviewRepository;
    public ReviewServiceImpl(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    @Override
    public List<Review> show() {
        return reviewRepository.findAll();
    }

    @Override
    public Review addReview(User user, String comment, int stars) {
        Review review=new Review(user,comment,stars);
        return this.reviewRepository.save(review);
    }

    @Override
    public Review editReview(Long id, User user, String comment, int stars) {
        if(id!=null){
            Review review=this.reviewRepository.findById(id).orElseThrow(null);
            review.setUser(user);
            review.setComment(comment);
            review.setStars(stars);
            return this.reviewRepository.save(review);
        }
        return null;
    }

    @Override
    public void deleteReview(Long id) {
        this.reviewRepository.deleteById(id);
    }
}
