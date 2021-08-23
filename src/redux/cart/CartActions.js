import { ADD_CART } from "./CartTypes";
import { REMOVE_CART } from "./CartTypes";
import { ADJ_QTY } from "./CartTypes";
<<<<<<< HEAD
import { ToastContainer, toast } from 'react-toastify';
=======
import {CLEAR} from "./CartTypes"
>>>>>>> 185e4b5c3de937c974ae4cd21623f011edf0ec73

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
