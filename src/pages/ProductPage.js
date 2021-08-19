import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../redux/cart/CartActions'
import {removeCart} from '../redux/cart/CartActions'
function ProductPage() {
    const product = useSelector(state => {if (state.product)
        return state.product
    })
    const dispatch = useDispatch()
    
    if(product)
    return (
        <div>
            <h3>{product.title}</h3>
            <h3>pr page</h3>
            <img src={product.image} alt="not found" />
            
            <button onClick={() =>dispatch(addCart(product))}>Add  to cart</button>
            <button onClick={() =>dispatch(removeCart(product.id))}>delete from cart</button>
            
        </div>
        )
    else
        return (
            <div>nulll hai abi to</div>
        )
}

export default ProductPage
