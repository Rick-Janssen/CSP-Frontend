import React, { useState } from 'react';
import Star from "../../assets/star-full.png";
import StarEmpty from "../../assets/star-empty.png";
import StarHalf from "../../assets/star-half.png";

const ReviewsContainer = ({ reviews }) => {
  const [visibleReviews, setVisibleReviews] = useState(6);

  const handleShowMore = () => {
    setVisibleReviews(prev => prev + 6);
  };

  // Function to determine which star image to show
  const getStarImage = (rating, index) => {
    const starRating = index + 1;
    if (rating >= starRating) {
      return Star; // Full star
    } else if (rating >= starRating - 0.5) {
      return StarHalf; // Half star
    } else {
      return StarEmpty; // Empty star
    }
  };

  return (
    <div className="reviews-container">
      <div className="reviews-grid">
        {reviews && reviews.slice(0, visibleReviews).map((review, index) => (
          <div className="review" key={index}>
            <div className="review-rating">
              {[...Array(5)].map((_, starIndex) => (
                <img
                  key={starIndex}
                  src={getStarImage(review.rating, starIndex)}
                  alt={`${review.rating} stars`}
                  className="star"
                />
              ))}
            </div>
            <p>{review.content}</p>
          </div>
        ))}
      </div>
      {visibleReviews < reviews.length && (
        <button className="show-more" onClick={handleShowMore}>Show More</button>
      )}
    </div>
  );
};

export default ReviewsContainer;
