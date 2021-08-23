//jshint esversion: 9
import React from "react";
import Card from "../components/wishlistPage/Card";
import "./../components/wishlistPage/wishlist.css";
import { useSelector } from "react-redux";

function WishlistPage() {
    const wishlistItems = useSelector((store) => store.wishlist);

    return (
        <div className="wishlist-page">
            <div className="container">
                <div className="page-head fs-4 pt-5 fw-bold">Wishlist</div>
                <div className="wishlist-items px-5 mx-5 m-auto">
                    {wishlistItems && wishlistItems.length !== 0 ? (
                        wishlistItems.map((item) => {
                            return <Card data={item} key={item.id} />;
                        })
                    ) : (
                        <div className="py-5">No. Items in Wishlist</div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default WishlistPage;
