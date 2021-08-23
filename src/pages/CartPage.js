//jshint esversion: 9
import React from "react";
import Button from "@material-ui/core/Button";
import styles from "./Cart.module.css";
import Subtotal from "../components/cartPage/Subtotal";
import { useDispatch, useSelector } from "react-redux";
import CartProduct from "../components/cartPage/CartProduct";
import { Link } from "react-router-dom";

function CartPage() {
    const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
    console.log(cart.length);
    const state = useSelector((state) => state.cart);
 

    return cart.length === 0 ? (
        <div class="container mt-2">
            <div class="row">
                <div class="col-12">
                    <div class="col-sm-12 py-5 my-5 text-center">
                        {" "}
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7JvnTo6mlFRbaA6AAcKSt58aEH34hSe1sjK3OHCT5Hcuxx1QdEUZ9LXpfSINhRMDHrI4&usqp=CAU"
                            width="130"
                            height="130"
                            class="img-fluid"
                            alt="not found"
                        />
                        <h3>
                            <strong>Your Cart is Empty</strong>
                        </h3>
                        <h4>Add something to make me happy :)</h4>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className="container mt-5">
            <div className="d-flex">
                <div className="me-3" style={{ width: "75%" }}>
                    <table className="table table-sm text-center">
                        <thead className={styles.border}>
                            <tr>
                                <th scope="col">Product</th>
                                <th scope="col"></th>
                                <th scope="col">Price</th>
                                <th scope="col">Qty</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((product) => (
                                <CartProduct product={product} key={product.id} />
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="" style={{ width: "30%" }}>
                    <Subtotal />
                    <Link to="/checkout" style={{ textDecoration: "none" }}>
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
                            Proceed to Checkout
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CartPage;
