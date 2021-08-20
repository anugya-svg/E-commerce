import { Link } from "react-router-dom";
import "./productCard.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const ProductCard = (props) => {
    // expected data can be changed
    const { title, imgURL, description, price, id } = props;
    return (
        // <div className="col-12 col-sm-3 p-sm-4 mt-4">
        <div className="product-container">
            <Link to={`/product/${id}`}>
                <div className="product-img">
                    <img src={imgURL} alt="" />
                    <div className="product-tray">
                        <i className="bi bi-heart"></i>
                        <i className="bi bi-cart-check"></i>
                        <i className="bi bi-zoom-in"></i>
                    </div>
                </div>
                <div className="product-name">
                    <span className="name">Bag + Shirt</span>
                </div>
                <div className="product-price">
                    <span className="discount-price">$ 280 </span>
                    <span className="original-price">
                        <strike>$ 900</strike>
                    </span>
                </div>
            </Link>
        </div>
        // </div>
    );
};

export default ProductCard;
