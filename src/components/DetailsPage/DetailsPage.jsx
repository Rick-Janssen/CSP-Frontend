import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './DetailsPage.css';
import ReviewsContainer from '../ReviewsContainer/ReviewsContainer';
import { Link } from 'react-router-dom';
import Star from "../../assets/star-full.png";
import StarEmpty from "../../assets/star-empty.png";
import StarHalf from "../../assets/star-half.png";
import useCheckLogin from '../../utils/CheckLogin';

const DetailsPage = () => {
  const isAuthenticated = useCheckLogin();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0); // Default rating
  const [hoverRating, setHoverRating] = useState(0);
  const [visibleReviews, setVisibleReviews] = useState(6); // Start by showing 6 reviews

  // State for the popup
  const [isFlagged, setIsFlagged] = useState(false); 
  const [flaggedMessage, setFlaggedMessage] = useState(''); 
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

    const token = localStorage.getItem('token'); // Get token from localStorage

    fetch(`http://localhost/csp-backend/product/${id}/review`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // Include token in Authorization header
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
        console.log('Response from server:', data); // Log the response

        if (data.flagged) {
            // Show popup if the review is flagged
            setIsFlagged(true);
            setFlaggedMessage(data.message);
        } else {
            console.log('Review submitted successfully:', data);
            setReview('');  // Clear the review input
            setRating(0);  // Reset the rating
            fetchProductDetails();  // Optionally refresh product details to include the new review
            setIsFlagged(false);  // Hide popup if the review is not flagged
        }
    })
    .catch(error => {
        console.error('Error submitting review:', error);
    });
};


  return (
    <>
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
                  <p><strong>Type: </strong>{product.type}</p>
                  <p><strong>Country:</strong> {product.origin}</p>
                </div>
                <p className="description">{product.description}</p>
              </div>
            </>
          ) : (
            <p>Loading product details...</p>
          )}

          {!isAuthenticated ? (
            <Link to="/login" className="Formbutton">
              Login to write a review
            </Link>
          ) : (
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

              {isFlagged && (
                <div className="popup-message">
                    <p>{flaggedMessage}</p>
                    <button onClick={() => setIsFlagged(false)}>Close</button>
                </div>
            )}
            </form>
          )}
        </div>

        <h2>Reviews</h2>
        <div className="reviews">
          <ReviewsContainer callbackProp={getStarImage} reviews={product ? product.reviews : []} />
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
