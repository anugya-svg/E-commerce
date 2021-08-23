//jshint esversion: 9
import React from "react";
import CurrencyFormat from "react-currency-format";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { removeFromWishlist, addCart } from "./../../redux";

function Card(props) {
    const dispatch = useDispatch();

    return (
        <div className="wishlist-card py-3">
            <div className="row">
                <div className="offset-2 col-2">
                    <div className="product-image p-4">
                        <img className="img-fluid" src={props.data.img[0]} alt="product" />
                    </div>
                </div>
                <div className="col-2 d-flex justify-content-center align-items-center">
                    <div className="product-details">
                        <h6>{props.data.brand}</h6>
                        <p>{props.data.name}</p>
                    </div>
                </div>
                <div className="col-1 d-flex align-items-center">
                    <div className="Price">
                        <CurrencyFormat
                            value={props.data.price}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"Rs."}
                            renderText={(value) => <div>{value}</div>}
                        />
                    </div>
                </div>
                <div className="col-4 d-flex justify-content-center align-items-center">
                    <div className="">
                        <Button
                            size="medium"
                            variant="outlined"
                            color="secondary"
                            onClick={() => dispatch(removeFromWishlist(props.data.id))}
                        >
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
                            onClick={() => dispatch(addCart(props.data))}
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
