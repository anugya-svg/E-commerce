//jshint esversion: 9
import React from "react";
import ImageSlider from "../components/homePage/ImageSlider";
import TrendingSection from "../components/homePage/TrendingSection";

function Home() {
    return (
        <div className="homepage">
            <ImageSlider />
            <TrendingSection />
        </div>
    );
}

export default Home;
