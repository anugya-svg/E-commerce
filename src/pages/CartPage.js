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

                        <tr className={styles.border}>
                            <th scope="row" className="p-4">
                                    <img className={styles.img_cart} src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11166294/2020/3/24/c099ba46-0d43-4684-a909-e8dc5709bb321585041823906-Levis-Men-Shirts-2061585041821702-1.jpg" alt="" />                                                                    
                            </th>
                            <td className="p-4">
                                <h6>Levi's</h6>
                                <p>Men Blue Slim fit solid shirt</p>
                            </td>
                            <td className="p-4">$239</td>
                            <td className="p-4">
                                <div className="d-flex">
                                <span className={styles.qty}>+</span>
                                <span className={styles.qty} style={{backgroundColor:"#e8e8e8"}}>1</span>
                                <span className={styles.qty}>-</span>
                                </div>
                            </td>
                            <td className="p-4">$360</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <div className="col ">
                    <Subtotal/>
                </div>
            </div>
        </div>
    )
}

export default CartPage