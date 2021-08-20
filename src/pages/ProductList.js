//jshint esversion: 9
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD

=======
import { productClicked } from "../redux";
>>>>>>> 2a9eac0db1081c3877170517245d2dbbc11c8f04
import { fetchProducts } from "../redux/products/ProductsActions";
import ProductCard from "../components/productPage/ProductCard";
import "../components/navbar_footer/nav.css";
const ProductsList = () => {
    const products = useSelector((state) => state.products.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const Part = () => {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        {products.map((product) => (
                            <div className="col-12 col-sm-3 p-sm-4 mt-4">
                                <ProductCard key={product.id} imgURL={product.img[0]} id={product.id} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    if (products) return <Part />;
    else return <p>Loadinggggggggg</p>;
};
export default ProductsList;
