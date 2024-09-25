import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './DetailsPage.css';
import ReviewsContainer from '../ReviewsContainer/ReviewsContainer';

import Star from "../../assets/star-full.png";
import StarEmpty from "../../assets/star-empty.png";
import StarHalf from "../../assets/star-half.png";
import Navbar from "../../components/Navbar/Navbar";
const DetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0); // Default rating
  const [hoverRating, setHoverRating] = useState(0);
  const [visibleReviews, setVisibleReviews] = useState(6); // Start by showing 6 reviews

  const fetchProductDetails = () => {
    fetch(`http://localhost/csp-backend/product/${id}`)
      .then(response => response.json())
      .then(data => {

        setProduct(data);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  };
  const updateRating = (newRating) => {
    setRating(newRating);
  };

  const highlightStars = (hoverRating) => {
    setHoverRating(hoverRating);
  };

  const resetHighlight = () => {
    setHoverRating(rating);
  };

  const getStarImage = (index) => {
    const starRating = index + 1;
    if (hoverRating >= starRating) {
      return Star; // Full star
    } else if (hoverRating >= starRating - 0.5) {
      return StarHalf; // Half star
    } else {
      return StarEmpty; // Empty star
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      product_id: id,
      content: review,
      rating: rating,
    };

    fetch(`http://localhost/csp-backend/product/${id}/review`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newReview),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Review submitted successfully:', data);
        // Reset the review and rating inputs
        setReview(''); // Clear the review textarea
        setRating(0); // Reset the rating to 0
        fetchProductDetails(); // Optionally refresh product details to include the new review
      })
      .catch(error => {
        console.error('Error submitting review:', error);
      });
  };

  return (
    <>
      <Navbar />
      <div className='product-details'>
        <div className="product-card">
          {product ? (
            <>
              <img src={product.image_url} alt={product.name} className="product-image" />
              <div className="content">
                <div className="header">
                  <h1 className="title">{product.name}</h1>
                </div>
                <div className='type'>
                  <p>Type: {product.type}</p>
                  <p>Country: {product.origin}</p>
                </div>
                <p className="description">{product.description}</p>
              </div>
            </>
          ) : (
            <p>Loading product details...</p>
          )}

          <form onSubmit={handleSubmit} className="review-form">
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Write a review"
              className="review-textarea"
            />


            <div className="rating-container">
              <div className="stars">
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="star" style={{ backgroundImage: `url(${getStarImage(index)})` }}>
                    <div
                      className="half-left"
                      onMouseOver={() => highlightStars(index + 0.5)}
                      onMouseOut={resetHighlight}
                      onClick={() => updateRating(index + 0.5)}

                    />
                    <div
                      className="half-right"
                      onMouseOver={() => highlightStars(index + 1)}
                      onMouseOut={resetHighlight}
                      onClick={() => updateRating(index + 1)}

                    />
                  </div>
                ))}
              </div>
              <div className="rating-value">{hoverRating.toFixed(1)}</div>
            </div>



            <div className="rating-footer">
              <button type="submit" className="submit-button">SUBMIT</button>
            </div>
          </form>
        </div>
        <h2>OTHER REVIEWS</h2>
        <div className="reviews">
          <ReviewsContainer callbackProp={getStarImage} reviews={product ? product.reviews : []} />
        </div>

      </div>
    </>
  );
};

export default DetailsPage;



