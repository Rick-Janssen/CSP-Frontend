import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './DetailsPage.css';

const DetailsPage = () => {
  const { id } = useParams();  // Get the product ID from the URL
  const [product, setProduct] = useState(null);  // State for storing product details
  const [reviews, setReviews] = useState([]);  // State for storing reviews
  const [rating, setRating] = useState(5.0);  // Rating for the review form
  const [reviewContent, setReviewContent] = useState('');  // State for storing the new review content

  // Function to fetch product details including reviews
  const fetchProductDetails = () => {
    fetch(`http://192.168.45.164/csp-backend/product/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setProduct(data);  // Set product data in the state
        setReviews(data.reviews || []);  // Set reviews in the state (if available)
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  };

  // Fetch product details when component mounts
  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  // Handle the review form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      content: reviewContent,
      rating: rating,
      productId: id,
    };

    setReviews([...reviews, newReview]);

    setReviewContent('');
    setRating(5.0);
  };

  return (
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
            value={reviewContent}
            onChange={(e) => setReviewContent(e.target.value)}
            placeholder="Write a review"
            className="review-textarea"
          />
          <div className="rating-footer">
            <div className="stars-footer">★★★★★ <span className="rating-number">{rating}</span></div>
            <button type="submit" className="submit-button">SUBMIT</button>
          </div>
        </form>
      </div>

      <div className='product-card'>
        <div className="reviews">
          <h2>OTHER REVIEWS</h2>
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div className="review" key={index}>
                <h3>{review.title || "Anonymous"}</h3>
                <div className="rating">
                  {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                </div>
                <p>{review.content}</p>
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
      </div>



    </div>
  );
};

export default DetailsPage;
