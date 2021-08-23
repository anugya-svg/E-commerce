import { combineReducers } from "redux"
import ProductReducer from "./product/ProductReducer"
import ProductsReducer from "./products/ProductsReducer"
import CartReducer from "./cart/CartReducer"
import totalReducer from "./total_item/total_reducer"
import orderHistoryReducer from "./order_history/orderHistoryReducer"
const rootReducer = combineReducers({
    product: ProductReducer,
    products: ProductsReducer,
    cart:CartReducer,
    total:totalReducer,
    history:orderHistoryReducer
    
})

export default rootReducer
