import { FETCH_PRODUCTS_REQUEST } from "./ProductsTypes"
import { FETCH_PRODUCTS_FAILURE } from "./ProductsTypes"
import { FETCH_PRODUCTS_SUCCESS } from "./ProductsTypes"
const initialState = {
    loading: false,
    products: [],
    error:''
}

const ProductsReducer = (state = initialState, action) => {
    switch (action.type)
    {
        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_PRODUCTS_SUCCESS:
            
            const x= {
                loading: false,
                products: action.payload,
                error:''
            }
            localStorage.setItem('products',JSON.stringify(x))
            return x

        case FETCH_PRODUCTS_FAILURE:
            return {
                loading: false,
                products: [],
                error:action.payload
            }
        default:
            return state
    }
}

export default ProductsReducer