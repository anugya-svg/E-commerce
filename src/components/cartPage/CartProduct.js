import React from 'react'
import styles from "../../pages/Cart.module.css"
import CurrencyFormat from "react-currency-format";
import { useDispatch, useSelector } from 'react-redux';
import UseCurrency from "../../util/useCurrency"
import { removeCart } from '../../redux'
import { adjustQuantity } from '../../redux';
import Button from '@material-ui/core/Button';
import { totalItem } from '../../redux/total_item/total_action'

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
        // console.log('plus ran')
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
                    <Button onClick={() => {dispatch(removeCart(product.id))
                                            dispatch(totalItem())
                    }} size="medium" variant="outlined" color="secondary" >
                        Remove
                    </Button>
                </th>
                <td className="p-4">
                    <h6>{product.brand}</h6>
                    <p>{product.name}</p>
                </td>
                <td className="p-4">
                    <CurrencyFormat
                        value={product.price}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'Rs.'}
                        renderText={value => <div>{value}</div>}
                    /></td>
                <td className="p-4">
                    <div className="d-flex">
                        <span className={`${styles.qty} `} onClick={() => { callPlus() }}>+</span>
                        <span className={styles.qty} style={{ backgroundColor: "#e8e8e8" }}>{product.qty}</span>
                        {(product.qty!==1)?<span className={styles.qty} onClick={() => { callMinus() }}>-</span>:<span className={styles.qty} >-</span>}
                        
                    </div>
                </td>
                <td className="p-4">

                    <UseCurrency value={parseInt(product.price) * product.qty}/>
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
