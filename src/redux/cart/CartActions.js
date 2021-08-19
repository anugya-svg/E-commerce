import { ADD_CART } from "./CartTypes";
import { REMOVE_CART } from "./CartTypes";

export const addCart = (product) => {
    
    return {
        type: ADD_CART,
        payload: product
    }
}

export const removeCart = (id) => {
    return {
        type: REMOVE_CART,
        payload:id
    }
}