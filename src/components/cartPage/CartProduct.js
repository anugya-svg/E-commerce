import React,{useState} from 'react'
import styles from "../../pages/Cart.module.css"
import CurrencyFormat from "react-currency-format";
import { useDispatch, useSelector } from 'react-redux';

import { adjustQuantity } from './../../redux/cart/CartActions';
function CartProduct({ product }) {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    // const [counter, setcounter] = useState(initialState)

    const plus = {
        id: product.id,
        qty:1
    }
    const minus = {
        id: product.id,
        qty:-1
    }
    const callPlus = () => {
        dispatch(adjustQuantity(plus))
    }
    const callMinus = () => {
        dispatch(adjustQuantity(minus))
    }
    if(product){
        return (            
            <tr className={styles.border}>
                <th scope="row" className="p-4">
                    <img className={styles.img_cart} src={product.img[0]} alt="" />                                                                    
                </th>
                <td className="p-4">
                    <h6>{product.brand}</h6>
                    <p>{product.name}</p>
                </td>
                <td className="p-4">{product.price}</td>
                <td className="p-4">
                    <div className="d-flex">
                        <span className={`${styles.qty} `} onClick={() => { callPlus() }}>+</span>
                        <span className={styles.qty} style={{ backgroundColor: "#e8e8e8" }}>{product.qty}</span>
                        {(product.qty!==1)?<span className={styles.qty} onClick={() => { callMinus() }}>-</span>:<span className={styles.qty} >-</span>}
                        
                    </div>
                </td>
                <td className="p-4">
                    <CurrencyFormat
                        value={parseInt(product.price) * product.qty}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'₹'}
                        renderText={value => <strong>{value}</strong>}
                        />
                </td>
            </tr>
    )
    }
    else{
        return (
            <div>
                Empty cart
            </div>

        )
    }
}

export default CartProduct
