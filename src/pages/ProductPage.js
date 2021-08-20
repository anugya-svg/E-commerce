import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { fetchProduct } from '../redux'
import { addCart } from '../redux/cart/CartActions'
import { removeCart } from '../redux/cart/CartActions'

function ProductPage() {
    const { id } = useParams()
    const dispatch = useDispatch()
    let product = useSelector(state => state.product)
    if (product && product[id]) {
        product = product[id]
        return (
            <div>
                <h3>{product.title}</h3>
                <h3>pr page</h3>
                <img src={product.image} alt="not found" />
                <button onClick={() => dispatch(addCart(product))}>Add  to cart</button>
                <button onClick={() => dispatch(removeCart(product.id))}>delete from cart</button>
            </div>
        )
    }
    else {
        dispatch(fetchProduct(id))
        return (
            <h1>LOADING......</h1>
        )
    }
}

export default ProductPage
