import { FETCH_PRODUCTS_REQUEST } from "./ProductsTypes"
import { FETCH_PRODUCTS_FAILURE } from "./ProductsTypes"
import { FETCH_PRODUCTS_SUCCESS } from "./ProductsTypes"
import { getProducts } from "../../data"
export const fetchProductsRequest = () => {
    return {
        type: FETCH_PRODUCTS_REQUEST
    }
}

export const fetchProductsSuccess = (products) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    }

}


export const fetchProductsFailure = (error) => {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: error
    }

}

export const fetchProducts = () => {
    return (dispatch) => {
        // axios.get("https://fakestoreapi.com/products")
        //     .then(response => {
        //         const products = response.data
        //         dispatch(fetchProductsSuccess(products))
        //     })
        //     .catch(error => {
        //         const errorMsg = error.message
        //         dispatch(fetchProductsFailure(errorMsg))
        // })
        getProducts().then(response => {
            const products = response.data
            dispatch(fetchProductsSuccess(products))
        })
    }
}