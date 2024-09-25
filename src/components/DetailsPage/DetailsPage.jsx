import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './DetailsPage.css';

const DetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0); // Default rating

  const fetchProductDetails = () => {
    fetch(`http://localhost/csp-backend/product/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setProduct(data);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
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
      })
      .catch(error => {
        console.error('Error submitting review:', error);
      });
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
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Write a review"
            className="review-textarea"
          />
          <input type="number" min={0} max={5}
            value={rating}
            onChange={(e) => setRating(e.target.value)} />
          <div className="rating-footer">
            {/* {'★'.repeat(averageRating)}{'☆'.repeat(5 - review.rating)} */}
            <button type="submit" className="submit-button">SUBMIT</button>
          </div>
        </form>
      </div>

      <div className='product-card'>
        <div className="reviews">
          <h2>OTHER REVIEWS</h2>
          {product && product.reviews && product.reviews.length > 0 ? (
            product.reviews.map((review, index) => (
              <div className="review" key={index}>
                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
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
