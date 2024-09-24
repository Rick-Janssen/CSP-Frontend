import ProductCard from "../ProductCard/ProductCard.jsx";
import "./ProductList.css";
const ProductList = () => {

    // const items = localStorage.getItem("token");
    return(
        <div className="ProductList">
            <ProductCard image={"A"} name= {"A"} type={"A"} country={"A"} stars={"A"}></ProductCard>
            <ProductCard image={"A"} name= {"A"} type={"A"} country={"A"} stars={"A"}></ProductCard>
            <ProductCard image={"A"} name= {"A"} type={"A"} country={"A"} stars={"A"}></ProductCard>
            <ProductCard image={"A"} name= {"A"} type={"A"} country={"A"} stars={"A"}></ProductCard>
            <ProductCard image={"A"} name= {"A"} type={"A"} country={"A"} stars={"A"}></ProductCard>
            <ProductCard image={"A"} name= {"A"} type={"A"} country={"A"} stars={"A"}></ProductCard>
            <ProductCard image={"A"} name= {"A"} type={"A"} country={"A"} stars={"A"}></ProductCard>
            <ProductCard image={"A"} name= {"A"} type={"A"} country={"A"} stars={"A"}></ProductCard>

        </div>
    )
};

export default ProductList;