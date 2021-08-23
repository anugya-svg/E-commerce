//jshint esversion: 9
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../productPage/ProductCard";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import { fetchProducts } from "./../../redux/products/ProductsActions";
import { Link } from "react-router-dom";

SwiperCore.use([Pagination]);

function TrendingSection() {
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);

    const products = useSelector((state) => state.products.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

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
        <div className="trending-section my-5">
            <div className="fw-bold fs-2 pt-2 ls-1">
                Trending Now
                <Link to={`/viewall`}>
                <div className="view_all" style={{color:"#FF2020"}}>
                    View all
                </div>
                </Link>
            </div>
            
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
                    {products.map((product) => (
                        <SwiperSlide>
                            <ProductCard key={product.id} data={product} imgURL={product.img[0]} id={product.id} name={product.name} price={product.price}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default TrendingSection;
