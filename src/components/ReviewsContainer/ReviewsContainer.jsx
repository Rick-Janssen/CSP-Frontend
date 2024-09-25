import React, { useState } from 'react';

const ReviewsContainer = ({ reviews }) => {
  const [visibleReviews, setVisibleReviews] = useState(6);

  const handleShowMore = () => {
    setVisibleReviews(prev => prev + 6); 
  };

  return (
    <div className="reviews-container">
      <div className="reviews-grid">
        {reviews && reviews.slice(0, visibleReviews).map((review, index) => (
          <div className="review" key={index}>
            <div className="review-rating">
              {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
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
