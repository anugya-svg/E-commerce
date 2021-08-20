//jshint esversion: 9
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core";

function TrendingSection() {
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);

    function changeSlideCount() {
        if (window.innerWidth <= 576) {
            return 1;
        } else if (window.innerWidth > 576 && window.innerWidth <= 995) {
            return 2;
        } else if (window.innerWidth > 996 && window.innerWidth <= 1200) {
            return 3;
        } else {
            return 4;
        }
    }

    return (
        <div className="trending-section">
            <div>
                <Swiper
                    slidesPerView={changeSlideCount()}
                    spaceBetween={100}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="">
                            <img src={ } alt="tempImage" width="100%" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default TrendingSection;
