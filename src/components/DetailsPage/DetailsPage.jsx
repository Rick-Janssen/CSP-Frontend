import React, { useState } from 'react';
import '../DetailsPage/DetailsPage.css';

const DetailsPage = () => {
  const [rating, setRating] = useState(5.0);
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Review submitted: ${review}`);

  };

  return (
    <div className='product-details'>
      <div className="product-card">
        <div className="image-placeholder">
          <p>(image)</p>
        </div>
        <div className="content">
          <div className="header">
            <h1 className="title">TITLE</h1>
            <div className="rating">
              <div className="stars">
                <span className="rating-number">{rating}</span> ★★★★★
              </div>
            </div>
          </div>
          <div className='type'>
            <p>Type: Food</p>
            <p>Country: Dutch</p>
          </div>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <form onSubmit={handleSubmit} className="review-form">
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="review"
              className="review-textarea"
            />
            <div className="rating-footer">
              <div className="stars-footer">★★★★★ <span className="rating-number">{rating}</span></div>
              <button type="submit" className="submit-button">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
      <div className='product-card'>


        <div className="reviews">
          <h2>OTHER REVIEWS</h2>
          <div className="review">
            <h3>USERNAME</h3>
            <div className="rating">★★★★★</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="review">
            <h3>USERNAME</h3>
            <div className="rating">★★★☆☆</div> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="review">
            <h3>USERNAME</h3>
            <div className="rating">★★★☆☆</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <span className='more-reviews'>See more reviews</span>
        </div>

      </div>

      <div className='similar-products'>
        <div className='h2-title'>
          <h2>SIMILAR PRODUCTS</h2>
        </div>
        <div className='product-showcase'>
          <div className='product-box'>
            <div className='image-box'></div>
            <div className='product-info'>
            <span className='product-name'>Product Name</span>
            <span className='review-box'> 0★</span>
            </div>
            <div className='product-description'>
              <span className='product-type'>Type:Food</span>
              <span className='product-country'>Country:Dutch</span>
            </div>
            <hr className='product-hr'></hr>
          </div>
          <div className='product-box'>
            <div className='image-box'></div>
            <div className='product-info'>
            <span className='product-name'>Product Name</span>
            <span className='review-box'> 0★</span>
            </div>
            <div className='product-description'>
              <span className='product-type'>Type:Food</span>
              <span className='product-country'>Country:Dutch</span>
            </div>
            <hr className='product-hr'></hr>
          </div>
          <div className='product-box'>
            <div className='image-box'></div>
            <div className='product-info'>
            <span className='product-name'>Product Name</span>
            <span className='review-box'> 0★</span>
            </div>
            <div className='product-description'>
              <span className='product-type'>Type:Food</span>
              <span className='product-country'>Country:Dutch</span>
            </div>
            <hr className='product-hr'></hr>
          </div>
          <div className='product-box'>
            <div className='image-box'></div>
            <div className='product-info'>
            <span className='product-name'>Product Name</span>
            <span className='review-box'> 0★</span>
            </div>
            <div className='product-description'>
              <span className='product-type'>Type:Food</span>
              <span className='product-country'>Country:Dutch</span>
            </div>
            <hr className='product-hr'></hr>
          </div>
          <div className='product-box'>
            <div className='image-box'></div>
            <div className='product-info'>
            <span className='product-name'>Product Name</span>
            <span className='review-box'> 0★</span>
            </div>
            <div className='product-description'>
              <span className='product-type'>Type:Food</span>
              <span className='product-country'>Country:Dutch</span>
            </div>
            <hr className='product-hr'></hr>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
