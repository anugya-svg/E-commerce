import { PRODUCT_CLICKED } from "./ProductTypes.js";

const product = null
const ProductReducer = (state = product, action) => {
    switch (action.type)
    {
        case PRODUCT_CLICKED:
            localStorage.setItem('product',JSON.stringify(action.payload))
            return action.payload
            
        default:
            return state
    }
    
}

export default ProductReducer