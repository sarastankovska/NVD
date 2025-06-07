package com.example.nvd.service.impl;

import com.example.nvd.models.Review;
import com.example.nvd.models.StudentDorm;
import com.example.nvd.models.User;
import com.example.nvd.repository.ReviewRepository;
import com.example.nvd.service.ReviewService;
import com.example.nvd.service.StudentDormService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReviewServiceImpl implements ReviewService {
    private final ReviewRepository reviewRepository;
    private final StudentDormService studentDormService;

    public ReviewServiceImpl(ReviewRepository reviewRepository, StudentDormService studentDormService) {
        this.reviewRepository = reviewRepository;
        this.studentDormService = studentDormService;
    }

    @Override
    public List<Review> show(Long dormId) {
        return reviewRepository.findAll().stream()
                .filter(review -> review.getDorm() != null && review.getDorm().getId().equals(dormId))
                .collect(Collectors.toList());
    }

    @Override
    public Review addReview(User user, String comment, int stars,Long dormId) {
        StudentDorm dorm=studentDormService.findById(dormId);

        Review review=new Review(user,comment,stars,dorm);
        return this.reviewRepository.save(review);
    }

    @Override
    public Review editReview(Long id, User user, String comment, int stars,Long dormId) {
        StudentDorm dorm=studentDormService.findById(dormId);
        if(id!=null){
            Review review=this.reviewRepository.findById(id).orElseThrow(null);
            review.setUser(user);
            review.setComment(comment);
            review.setStars(stars);
            review.setDorm(dorm);
            return this.reviewRepository.save(review);
        }
        return null;
    }

    @Override
    public void deleteReview(Long id) {
        this.reviewRepository.deleteById(id);
    }
}
