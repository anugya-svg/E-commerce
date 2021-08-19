import { ADD_CART } from "./CartTypes";
import { REMOVE_CART } from "./CartTypes";

const cart = []

const CartReducer = (state = cart, action)=>{
    switch (action.type)
    {
        case ADD_CART:
            const isItemExists = state.some((product) => product.id === action.payload.id)
            if (isItemExists) {
                return state.map((product) => {
                    if (product.id === action.payload.id) {
                        return {...product, qty: product.qty + 1 }
                    }
                    else {
                        return product
                    }
                })
            }
            else
            return [ ...state, {...action.payload,qty:1} ]
        case REMOVE_CART:
            return state.filter((product)=>action.payload!==product.id)
            
        default:
            return state
    }
}
export default CartReducer