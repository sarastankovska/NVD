import axios from "axios"

export const addReview = (user, comment, stars, dorm) => {
    const review = {
        user: { id: user.id },
        comment: comment,
        stars: stars,
        dorm: { id: dorm.id }
    };
    return axios.post("http://localhost:8080/api/reviews/add", review)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));
}

export const getReviewByDorm = (userDormId) => {
    return axios.get('http://localhost:8080/api/reviews/' + userDormId)
        .then((response) => response.data)
        .catch((error) => console.error("Error loading reviews:", error));
}