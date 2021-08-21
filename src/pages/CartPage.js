import React from 'react'
import Button from '@material-ui/core/Button';
import styles from "./Cart.module.css"
import Subtotal from '../components/cartPage/Subtotal';
import { useSelector } from 'react-redux';
import CartProduct from '../components/cartPage/CartProduct';
function CartPage() {
    const cart = JSON.parse(localStorage.getItem('cart'))
    const state = useSelector(state => state.cart)
    
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col ">
                    <table className="table table-sm text-center">
                    <thead className={styles.border}>
                        <tr >
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
                    <Subtotal/>
                    <Button />
                </div>
            </div>
        </div>
    )
}

export default CartPage