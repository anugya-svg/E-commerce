//jshint esversion: 9
import React from "react";
import manImg from "./../../assets/person.png";
import womenImg from "./../../assets/women.png";
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
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="mySwiper"
                >
                    <SwiperSlide className="each-slider">
                        <div
                            className="slider-content pt-4"
                            style={{
                                background: "linear-gradient(0deg, rgba(95,158,160,0.945553221288515) 0%, #fff 100%)",
                            }}
                        >
                            <div className="row h-100">
                                <div className="col-6 h-100">
                                    <div className="w-100 h-100 overflow-hidden d-flex justify-content-center">
                                        <img className="img-fluid" src={manImg} height="100%" alt="person" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="d-flex align-items-center flex-wrap w-100 h-100">
                                        <div>
                                            <div className="main-slider-text pb-4">
                                                Only the Best,
                                                <br /> For the Best
                                            </div>
                                            <div className="text-center py-3">
                                                <button className="btn btn-primary bg-main-button fs-6 py-3 px-5 ls-1">
                                                    SHOP NOW
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="each-slider">
                        <div
                            className="slider-content pt-4"
                            style={{
                                background: "linear-gradient(0deg, rgba(255, 31, 32, 0.5) 0%, rgb(255, 255, 255) 100%)",
                            }}
                        >
                            <div className="row h-100">
                                <div className="col-6 h-100">
                                    <div className="d-flex justify-content-end align-items-center flex-wrap w-100 h-100">
                                        <div>
                                            <div className="main-slider-text pb-4">
                                                Only the Best,
                                                <br /> For the Best
                                            </div>
                                            <div className="text-center py-3">
                                                <button className="btn btn-primary bg-main-button fs-6 py-3 px-5 ls-1">
                                                    SHOP NOW
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 overflow-hidden">
                                    <div className="w-100 d-flex justify-content-center">
                                        <img className="img-fluid" src={womenImg} alt="person" />
                                    </div>
                                </div>
                            </div>
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
