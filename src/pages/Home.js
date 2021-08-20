//jshint esversion: 9
import React from "react";
import CategoryBanner from "../components/homePage/CategoryBanner";
import ImageSlider from "../components/homePage/ImageSlider";
import TrendingSection from "../components/homePage/TrendingSection";

function Home() {
    return (
        <div className="homepage">
            <ImageSlider />
            <div className="container">
                <CategoryBanner />
                <TrendingSection />
            </div>
        </div>
    );
}

export default Home;
