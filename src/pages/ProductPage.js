//jshint esversion: 9
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchProduct } from "../redux";
import { addCart } from "../redux/cart/CartActions";
import { removeCart } from "../redux/cart/CartActions";
import Button from "@material-ui/core/Button";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import ProgressBar from "react-bootstrap/ProgressBar";
import StarIcon from "@material-ui/icons/Star";
import ThumbsUpDownIcon from "@material-ui/icons/ThumbsUpDown";
import Comments from "../components/ProductCard/comments";
import { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import "../components/ProductCard/productPage.css";
import { totalItem } from "../redux/total_item/total_action";
import { Link } from "react-router-dom";
import { scryRenderedDOMComponentsWithClass } from "react-dom/cjs/react-dom-test-utils.production.min";
function ProductPage() {
    const [imageNumber, setImageNumber] = useState(0);
    const { id } = useParams();
    const dispatch = useDispatch();
    var x = 5 * (Math.floor(Math.random() * 6) + 1);
    var y = Math.floor(Math.random() * 10) + 1;
    let product = useSelector((state) => state.product);
    if (product && product[id]) {
        product = product[id];
        return (
            <div className="conatiner">
                <div className="row">
                    <div className="col-2 image_div">
                        {product.img.map((image, index) => {
                            return (
                                <img src={image} key={index} className="more_img" alt=" " onClick={() => setImageNumber(index)} />
                            );
                        })}
                    </div>
                    <div className="col-4 left">
                        <img src={product.img[imageNumber]} className="main_img" alt="not found" />
                    </div>
                    <div className="col-md-5 right">
                        <h3 style={{ fontWeight: "bolder" }}>{product.name}</h3>
                        <h4>{product.detail}</h4>
                        <div className="span">
                            {product.rating} <StarIcon style={{ color: "orange" }} className="stars" /> | 6,000 Ratings
                        </div>
                        <hr />
                        <h3 style={{ fontWeight: "bolder" }}>Rs. {Math.floor(((100 - x) / 100) * product.price)}</h3>
                        <span style={{ textDecoration: "line-through", margin: "10px", fontSize: "3vmin" }}>
                            Rs. {product.price}{" "}
                        </span>
                        <span style={{ color: "#FF2020" }}> {x}% off</span>
                        <p style={{ margin: "3px", fontFamily: "serif" }}>inclusive of all taxes</p>
                        <p style={{ color: "green", fontWeight: "bold", margin: "3px", fontFamily: "serif" }}>
                            Hurry Up! Only {y} left!
                        </p>
                        <p style={{ margin: "10px 2px" }}>
                            FREE delivery:<b> Tuesday, August 24</b>
                        </p>

                        <div className="col"></div>
                        <h5>Select size</h5>
                        <br />
                        <div className="">
                            <span className="size">5</span>
                            <span className="size">6</span>
                            <span className="size">7</span>
                            <span className="size">8</span>
                            <span className="size">9</span>
                        </div>
                        <br />
                        <h6 style={{ fontWeight: "bolder", marginTop: "20px" }}>Product detail</h6>
                        <p>{product.details}</p>
                        <a>
                            <Button
                                className="but"
                                onClick={() => {
                                    dispatch(addCart(product));
                                    dispatch(totalItem());
                                }}
                                size="medium"
                                variant="outlined"
                                style={{ margin: "10px" }}
                            >
                                <LocalGroceryStoreIcon className="icon" />
                                Add To cart
                            </Button>
                        </a>
                        <Button
                            onClick={() => {
                                dispatch(removeCart(product.id));
                                dispatch(totalItem());
                            }}
                            size="medium"
                            variant="outlined"
                            style={{ border: "1px solid #FF2020", color: "#FF2020", margin: "10px", fontWeight: "bold" }}
                        >
                            <DeleteIcon className="icon" />
                            Remove from cart
                        </Button>
                        <div></div>
                        <div className="ratings">
                            <h4>
                                Ratings
                                <ThumbsUpDownIcon className="icon" />
                            </h4>
                            <hr />
                            <div className="number">
                                <p>
                                    {product.rating}
                                    <StarIcon style={{ color: "orange", width: "35px", height: "35px" }} />
                                </p>
                            </div>

                            <div className="progress_div">
                                <ProgressBar className="progress" variant="success" now={90} />
                                <ProgressBar className="progress" variant="success" now={60} />
                                <ProgressBar className="progress" variant="warning" now={70} />
                                <ProgressBar className="progress" variant="warning" now={30} />
                                <ProgressBar className="progress" variant="danger" now={15} />
                            </div>

                            <h4>Comments</h4>
                            <hr />
                            <Comments name="James Companela" comment="Amazing Product!" date="16/07/2021" stars="" />
                            <Comments name="Albert" comment="Very good quality" date="17/08/2020" stars="" />
                            <Comments name="Professor" comment="" date="29/04/2020" stars="" />
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        );
    } else {
        dispatch(fetchProduct(id));
        return <h1>LOADING......</h1>;
    }
}

export default ProductPage;
