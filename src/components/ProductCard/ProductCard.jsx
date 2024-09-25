import "./ProductCard.css";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
    return (
        <Link className='ProductCard'
            key={product.id}
            //CHANGE THIS TO ROUTER LINK

            to={`/product/${product.id}`}
        >
            <div className='image-box'><img src={product.image_url} alt={product.name} /></div>
            <div className="product-info">
                <span className='product-name'>{product.name}</span>

                {(() => {
                    if (product.reviews.length === 0) {
                        return (
                            <div>
                                <span className='review-box'>-</span> {/* Display message when there are no ratings */}
                            </div>
                        );
                    }

                    const totalRating = product.reviews.reduce((acc, review) => acc + review.rating, 0);
                    const averageRating = totalRating / product.reviews.length;

                    return (
                        <div>
                            <span className='review-box'>{averageRating.toFixed(1)} / 5 ★</span> {/* Display average rating */}
                        </div>
                    );
                })()}





            </div>
            <div className='product-description'>
                <span className='product-type'>Type: {product.type}</span>
                <span className='product-country'>Country: {product.origin}</span>
            </div>
            <hr className='product-hr'></hr>
        </Link >
    );
}

export default ProductCard;