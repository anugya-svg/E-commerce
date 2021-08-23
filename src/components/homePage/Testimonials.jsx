//jshint esversion: 9
import React from "react";
import userImg from "./../../assets/tempuser.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

function Testimonials() {
    return (
        <div className="testimonials my-5 pt-5">
            <div className="container">
                <div className="fw-bold text-center fs-2 pt-2 ls-1">Customer Testimonials</div>
                <div className="my-4">
                    <Swiper
                        cssMode={true}
                        // pagination={true}
                        navigation={{
                            prevEl: ".slider-nav-buttons .slider-prev",
                            nextEl: ".slider-nav-buttons .slider-next",
                        }}
                        mousewheel={false}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="slider-content d-flex">
                                <div className="m-auto align-self-center">
                                    <div className="testimonial-content fs-5 text-center">
                                        Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt
                                        laboriosam volpyas iure, delectus dignissimos facilis neque nulla earum.
                                    </div>
                                    <div className="testimonial-user-details my-4">
                                        <div className="d-flex justify-content-center">
                                            <div className="user-img rounded-circle me-2">
                                                <img src={userImg} alt="customer" />
                                            </div>
                                            <div className="align-self-center ms-2">
                                                <div className="user-name fw-bolder fs-7 py-1 ls-1">Petey Crusier</div>
                                                <div className="user-designation fw-bold ls-1">Student at KIET</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-content d-flex">
                                <div className="m-auto align-self-center">
                                    <div className="testimonial-content fs-5 text-center">
                                        Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt
                                        laboriosam volpyas iure, delectus dignissimos facilis neque nulla earum.
                                    </div>
                                    <div className="testimonial-user-details my-4">
                                        <div className="d-flex justify-content-center">
                                            <div className="user-img rounded-circle me-2">
                                                <img src={userImg} alt="customer" />
                                            </div>
                                            <div className="align-self-center ms-2">
                                                <div className="user-name fw-bolder fs-7 py-1 ls-1">Petey Crusier</div>
                                                <div className="user-designation fw-bold ls-1">Student at KIET</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-content d-flex">
                                <div className="m-auto align-self-center">
                                    <div className="testimonial-content fs-5 text-center">
                                        Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt
                                        laboriosam volpyas iure, delectus dignissimos facilis neque nulla earum.
                                    </div>
                                    <div className="testimonial-user-details my-4">
                                        <div className="d-flex justify-content-center">
                                            <div className="user-img rounded-circle me-2">
                                                <img src={userImg} alt="customer" />
                                            </div>
                                            <div className="align-self-center ms-2">
                                                <div className="user-name fw-bolder fs-7 py-1 ls-1">Petey Crusier</div>
                                                <div className="user-designation fw-bold ls-1">Student at KIET</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-content d-flex">
                                <div className="m-auto align-self-center">
                                    <div className="testimonial-content fs-5 text-center">
                                        Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt
                                        laboriosam volpyas iure, delectus dignissimos facilis neque nulla earum.
                                    </div>
                                    <div className="testimonial-user-details my-4">
                                        <div className="d-flex justify-content-center">
                                            <div className="user-img rounded-circle me-2">
                                                <img src={userImg} alt="customer" />
                                            </div>
                                            <div className="align-self-center ms-2">
                                                <div className="user-name fw-bolder fs-7 py-1 ls-1">Petey Crusier</div>
                                                <div className="user-designation fw-bold ls-1">Student at KIET</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-content d-flex">
                                <div className="m-auto align-self-center">
                                    <div className="testimonial-content fs-5 text-center">
                                        Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt
                                        laboriosam volpyas iure, delectus dignissimos facilis neque nulla earum.
                                    </div>
                                    <div className="testimonial-user-details my-4">
                                        <div className="d-flex justify-content-center">
                                            <div className="user-img rounded-circle me-2">
                                                <img src={userImg} alt="customer" />
                                            </div>
                                            <div className="align-self-center ms-2">
                                                <div className="user-name fw-bolder fs-7 py-1 ls-1">Petey Crusier</div>
                                                <div className="user-designation fw-bold ls-1">Student at KIET</div>
                                            </div>
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
        </div>
    );
}

export default Testimonials;
