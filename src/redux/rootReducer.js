import { combineReducers } from "redux"
import ProductReducer from "./product/ProductReducer"
import ProductsReducer from "./products/ProductsReducer"
import CartReducer from "./cart/CartReducer"
import totalReducer from "./total_item/total_reducer"
const rootReducer = combineReducers({
    product: ProductReducer,
    products: ProductsReducer,
    cart:CartReducer,
    total:totalReducer
    
})

export default rootReducer
