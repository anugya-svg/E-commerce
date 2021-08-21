//jshint esversion: 9
import React from "react";
import tempBack from "./../../assets/tempBack.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "./homepage.css";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

function ImageSlider() {
    return (
        <div className="image-slider">
            <div className="position-relative">
                <Swiper
                    cssMode={true}
                    // pagination={true}
                    navigation={{
                        prevEl: ".slider-nav-buttons .slider-prev",
                        nextEl: ".slider-nav-buttons .slider-next",
                    }}
                    mousewheel={false}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="mySwiper "
                >
                    <SwiperSlide>
                        <div className="slider-content">
                            <img src={tempBack} width="100%" height="100%" alt="temp head" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-content">
                            <img src={tempBack} width="100%" height="100%" alt="temp head" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-content">
                            <img src={tempBack} width="100%" height="100%" alt="temp head" />
                        </div>
                    </SwiperSlide>
                    <div className="slider-nav-buttons position-absolute w-100 top-50 d-flex justify-content-between">
                        <div className="slider-prev d-flex align-items-center justify-content-center">
                            <NavigateBeforeIcon color="inherit" fontSize="inherit" />
                        </div>
                        <div className="slider-next d-flex align-items-center justify-content-center">
                            <NavigateNextIcon color="inherit" fontSize="inherit" />
                        </div>
                    </div>
                </Swiper>
            </div>
        </div>
    );
}

export default ImageSlider;
