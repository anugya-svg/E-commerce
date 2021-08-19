import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { productClicked } from "../redux"

import { fetchProducts } from '../redux/products/ProductsActions'

const ProductsList = () => {
    const products = useSelector(state => state.products.products)
    console.log(products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    
    // const state = useSelector(state => state.)
    const Part = () => {
        return (
            products.map(product =>
                <div key={product.id}>
                    <Link to={`product/${product.id}`}>
                        <p onClick={() => dispatch(productClicked(product))}> {product.title}</p>
                    </Link>
                </div>
            )
        )
    }
    
        if(products)
        return <Part/>
    else
        return <p>Loadinggggggggg</p>
    
}
export default ProductsList