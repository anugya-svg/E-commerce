import React from 'react'
import Button from '@material-ui/core/Button';
import styles from "./Cart.module.css"
import Subtotal from '../components/cartPage/Subtotal';
function CartPage() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-sm-12">
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
                        
                        <tr className={styles.border}>
                            <th scope="row" className="p-4">
                                    <img className={styles.img_cart} src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/1965579/2017/6/16/11497597399593-Puma-Men-Black-Smash-Colourblocked-Leather-Sneakers-9641497597399402-1.jpg" alt="" />                                                                    
                            </th>
                            <td className="p-4">
                                <h6>Puma</h6>
                                <p>Men Leather Sneaker's</p>
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
            <div className="col-md-4  col-sm-12">
                    <Subtotal/>

            </div>
        </div>
    </div>
    )
}

export default CartPage