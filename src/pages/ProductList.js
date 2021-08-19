import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { productClicked } from "../redux"

import { fetchProducts } from '../redux/products/ProductsActions'
import ProductCard from '../components/productPage/ProductCard'

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
            <div className="container">
                <div className="row">
                    {
                        products.map(product =>
                            <ProductCard key={product.id} imgURL={product.image} id={product.id} />
                        )
                    }
                </div>
            </div>

        )
    }

    if (products)
        return <Part />
    else
        return <p>Loadinggggggggg</p>

}
export default ProductsList