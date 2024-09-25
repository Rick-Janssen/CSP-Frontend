import "./ProductCard.css";
import { Link } from "react-router-dom";
const ProductCard = ({id, image,name, type, country, stars}) => {
    return(
        <Link className='ProductCard'
        key={id}
        //CHANGE THIS TO ROUTER LINK
        to={`product/${id}`}
        >
            <div className='image-box'><img src={image} alt={name} /></div>
            <div className="product-info">
                <span className='product-name'>{name}</span>
                <span className='review-box'> {stars === undefined? 0 : stars}★</span>
            </div>
            <div className='product-description'>
              <span className='product-type'>Type: {type}</span>
              <span className='product-country'>Country: {country}</span>
            </div>
            <hr className='product-hr'></hr>
        </Link>
    );
}

export default ProductCard;