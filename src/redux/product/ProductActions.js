import { FETCH_PRODUCT } from "./ProductTypes.js";
import axios from "axios";
import { getProductByID } from "../../data.js";

export const fetchProduct = (id) => {
    return (dispatch) => {
        // axios.get(`https://fakestoreapi.com/products/${id}`)
        //     .then(response => {
        //         const product = response.data
        //         dispatch({ type: FETCH_PRODUCT, payload: product })
        //     })
        // .catch(error => {
        //     const errorMsg = error.message
        //     dispatch(fetchProductsFailure(errorMsg))
        // })
        getProductByID(id).then(response => {
            console.log('single', response)
            const product = response.data
            dispatch({ type: FETCH_PRODUCT, payload: product })
        })

    }
}