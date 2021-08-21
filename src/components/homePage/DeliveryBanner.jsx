//jshint esversion: 8
import React from "react";
import shippingTruckLightIcon from "./../../assets/shippingtrucklight.png";
import securePayIconLight from "./../../assets/securepaylight.png";
import moneyBackIconLight from "./../../assets/moneybacklight.png";
import serviceIconLight from "./../../assets/servicelight.png";

function DeliveryBanner() {
    return (
        <div className="delivery-banner py-5">
            <div className="container px-md-5 w-100">
                <div className="row">
                    <div className="col-6 col-sm-6 col-lg-3 py-4 py-lg-0">
                        <div className="del-banner-each-item px-3">
                            <div className="del-banner-icon w-50">
                                <img
                                    className="light-icon"
                                    src={shippingTruckLightIcon}
                                    alt="shipping truck"
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                            <div className="del-banner-content-box color-secondary">
                                <div className="del-banner-content-head py-2 fs-5 fw-bold">Fast & Free Delivery</div>
                                <div className="del-banner-content fs-6">Free delivery on all orders</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-lg-3 py-4 py-lg-0">
                        <div className="del-banner-each-item px-3">
                            <div className="del-banner-icon w-50">
                                <img
                                    className="light-icon "
                                    src={securePayIconLight}
                                    alt="shipping truck"
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                            <div className="del-banner-content-box color-secondary">
                                <div className="del-banner-content-head py-2 fs-5 fw-bold">Secure Payments</div>
                                <div className="del-banner-content fs-6">Free delivery on all orders</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-lg-3 py-4  py-md-3 py-lg-0">
                        <div className="del-banner-each-item px-3">
                            <div className="del-banner-icon px-3 my-0 my-sm-3 my-xl-3 w-50">
                                <img
                                    className="light-icon"
                                    src={moneyBackIconLight}
                                    alt="shipping truck"
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                            <div className="del-banner-content-box color-secondary px-2">
                                <div className="del-banner-content-head py-2 fs-5 fw-bold">Money Back Guarantee</div>
                                <div className="del-banner-content fs-6">Free delivery on all orders</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-lg-3 py-4 py-lg-0">
                        <div className="del-banner-each-item px-3">
                            <div className="del-banner-icon w-50">
                                <img
                                    className="light-icon"
                                    src={serviceIconLight}
                                    alt="shipping truck"
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                            <div className="del-banner-content-box color-secondary">
                                <div className="del-banner-content-head py-2 fs-5 fw-bold">Online Support</div>
                                <div className="del-banner-content fs-6">Free delivery on all orders</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeliveryBanner;
