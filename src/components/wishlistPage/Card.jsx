//jshint esversion: 9
import React from "react";
import tempProduct from "./../../assets/tempProduct.jfif";
import CurrencyFormat from "react-currency-format";
import Button from "@material-ui/core/Button";

function Card() {
    return (
        <div className="wishlist-card py-3">
            <div className="row">
                <div className="offset-2 col-2">
                    <div className="product-image p-4">
                        <img className="img-fluid" src={tempProduct} alt="product" />
                    </div>
                </div>
                <div className="col-2 d-flex justify-content-center align-items-center">
                    <div className="product-details">
                        <h6>Product-name</h6>
                        <p>Product name</p>
                    </div>
                </div>
                <div className="col-1 d-flex align-items-center">
                    <div className="Price">
                        <CurrencyFormat
                            value="5000"
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"Rs."}
                            renderText={(value) => <div>{value}</div>}
                        />
                    </div>
                </div>
                <div className="col-4 d-flex justify-content-center align-items-center">
                    <div className="">
                        <Button size="medium" variant="outlined" color="secondary">
                            Remove
                        </Button>
                        <Button
                            size="medium"
                            variant="contained"
                            style={{
                                backgroundColor: "#242B2E",
                                border: "1px solid #242B2E",
                                color: "#fff",
                                margin: "10px",
                                fontWeight: "bold",
                            }}
                        >
                            Add to Cart
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
