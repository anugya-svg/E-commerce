//jshint esversion: 9
import React from "react";
import Button from "@material-ui/core/Button";
import styles from "./Cart.module.css";
import Subtotal from "../components/cartPage/Subtotal";
import { useSelector } from "react-redux";
import CartProduct from "../components/cartPage/CartProduct";

function CartPage() {
    const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
    console.log(cart.length);
    const state = useSelector((state) => state.cart);

    return cart.length === 0 ? (
        <div class="container mt-2">
            <div class="row">
                <div class="col-12">
                    <div class="col-sm-12 text-center">
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
            <div className="row">
                <div className="col ">
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
                            {
                                cart.map((product) => (
                                    <CartProduct product={product} key={product.id}/>
                                )) 
                            }
                    </tbody>
                </table>
                </div>
                <div className="col ">
                    <Subtotal />
                    <Button />
                </div>
            </div>
        </div>
    );
}

export default CartPage;
