import "./ProductCard.css";
const ProductCard = ({image,name, type, country, stars}) => {
    return(
        <div className='ProductCard'>
            <div className='image-box'></div>
            <span className='product-name'>{name}</span>
            <span className='review-box'> {stars}★</span>
            <div className='product-description'>
              <span className='product-type'>Type: {type}</span>
              <span className='product-country'>Country: {country}</span>
            </div>
            <hr className='product-hr'></hr>
        </div>
    );
}

export default ProductCard;