//jshint esversion: 9
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productClicked } from "../redux";

import { fetchProducts } from "../redux/products/ProductsActions";
import ProductCard from "../components/productPage/ProductCard";

const ProductsList = () => {
    const products = useSelector(state => state.products.products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const Part = () => {
        return (
            <div className="container">
                <div className="row">
                    {products.map((product) => (
                        <div className="col-12 col-sm-3 p-sm-4 mt-4">
                            <ProductCard key={product.id} imgURL={product.img[0]} id={product.id} name={product.name} price={product.price} />
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    if (products) return <Part />;
    else return <p>Loadinggggggggg</p>;
};
export default ProductsList;
