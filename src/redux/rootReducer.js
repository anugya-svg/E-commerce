import { combineReducers } from "redux"
import ProductReducer from "./product/ProductReducer"
import ProductsReducer from "./products/ProductsReducer"
import CartReducer from "./cart/CartReducer"
const rootReducer = combineReducers({
    product: ProductReducer,
    products: ProductsReducer,
    cart:CartReducer
    
})

export default rootReducer
