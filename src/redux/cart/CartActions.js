import { ADD_CART } from "./CartTypes";
import { REMOVE_CART } from "./CartTypes";
import { ADJ_QTY } from "./CartTypes";
import {CLEAR} from "./CartTypes"
import { ToastContainer, toast } from 'react-toastify';

export const addCart = (product) => {

   toast.success("Added to cart")
    
    return {
        type: ADD_CART,
        payload: product
    }
}

export const removeCart = (id) => {
    toast.error("Removed from cart")
    return {
        type: REMOVE_CART,
        payload:id
    }
}

export const adjustQuantity = (prop) => {
    return {
        type: ADJ_QTY,
        payload:prop
    }
}
export const clear=()=>{
    return{
        type:CLEAR
    }
}