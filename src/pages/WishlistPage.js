//jshint esversion: 9
import React from "react";
import Card from "../components/wishlistPage/Card";
import "./../components/wishlistPage/wishlist.css";

function WishlistPage() {
    return (
        <div className="wishlist-page">
            <div className="container">
                <div className="page-head fs-4 pt-5 fw-bold">Wishlist</div>
                <div className="wishlist-items px-5 mx-5 m-auto">
                    <Card />
                </div>
            </div>
        </div>
    );
}

export default WishlistPage;
