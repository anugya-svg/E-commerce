//jshint esversion: 9
import React from "react";
import menFashion from "./../../assets/menfashion.webp";
import childFashion from "./../../assets/childfashion.webp";
import womenFashion from "./../../assets/womenfashion.webp";

function CategoryBanner() {
    return (
        <div className="category-banner-home my-5 pb-5">
            <div className="row">
                <div className="offset-1 offset-md-0 col-10 col-md-4">
                    <div className="each-section position-relative m-2">
                        <div className="img-contianer overflow-hidden">
                            <img className="img-fluid" src={menFashion} alt="temp" />
                        </div>
                        <div className="position-absolute top-0 w-100">
                            <div className="position-absolute bottom-0 w-100 py-4">
                                <div className="text-center color-white fw-bold fs-5">Men's Fashion</div>
                                <div className="shopnow-button text-center pt-3 cursor-pointer fs-6 fw-bold">Shop Now</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="offset-1 offset-md-0 col-10 col-md-4">
                    <div className="each-section position-relative m-2">
                        <div className="img-contianer overflow-hidden">
                            <img className="img-fluid" src={womenFashion} alt="temp" />
                        </div>
                        <div className="position-absolute top-0 w-100">
                            <div className="position-absolute bottom-0 w-100 py-4">
                                <div className="text-center color-white fw-bold fs-5">Women's Fashion</div>
                                <div className="shopnow-button text-center pt-3 cursor-pointer fs-6 fw-bold">Shop Now</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="offset-1 offset-md-0 col-10 col-md-4">
                    <div className="each-section position-relative m-2">
                        <div className="img-contianer overflow-hidden">
                            <img className="img-fluid" src={childFashion} alt="temp" />
                        </div>
                        <div className="position-absolute top-0 w-100">
                            <div className="position-absolute bottom-0 w-100 py-4">
                                <div className="text-center color-white fw-bold fs-5">Child's Fashion</div>
                                <div className="shopnow-button text-center pt-3 cursor-pointer fs-6 fw-bold">Shop Now</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoryBanner;
