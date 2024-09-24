import "./ProductCard.css";
const ProductCard = ({id, image,name, type, country, stars}) => {
    return(
        <div className='ProductCard'
        key={id}
        //CHANGE THIS TO ROUTER LINK
        onClick={() => window.location.href = `product-details.html?id=${id}`}
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
        </div>
    );
}

export default ProductCard;