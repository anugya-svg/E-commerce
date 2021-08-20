//jshint esversion: 9
import React from "react";
import CategoryBanner from "../components/homePage/CategoryBanner";
import ImageSlider from "../components/homePage/ImageSlider";
import TrendingSection from "../components/homePage/TrendingSection";
import YouMayLike from "../components/homePage/YouMayLike";

function Home() {
    return (
        <div className="homepage">
            <ImageSlider />
            <div className="container">
                <CategoryBanner />
                <TrendingSection />
                <YouMayLike />
            </div>
        </div>
    );
}

export default Home;
