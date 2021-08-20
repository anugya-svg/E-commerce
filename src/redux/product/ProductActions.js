import { FETCH_PRODUCT } from "./ProductTypes.js";
import { getProductByID } from "../../data.js";

export const fetchProduct = (id) => {
    return (dispatch) => {
        getProductByID(id).then(response => {
            console.log('single', response)
            const product = response.data
            dispatch({ type: FETCH_PRODUCT, payload: product })
        })

    }
}