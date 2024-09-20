const ProductCard = ({image,name, type, country, stars}) => {
    return(
        <div className="ProductCard">
            <div><img/></div>
            <div>
                <span>{name}</span>
                <span>{stars}</span>
            </div>
            <div>
                <span>{type}</span>
                <span>{country}</span>
            </div>
            <hr/>
        </div>
    );
}