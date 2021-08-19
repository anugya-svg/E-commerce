import { FETCH_PRODUCT } from "./ProductTypes.js";

const product = {}
const ProductReducer = (state = product, action) => {
    switch (action.type) {
        case FETCH_PRODUCT:
            {
                let nstate = { ...state }
                nstate[action.payload.id] = action.payload
                return nstate
            }
        default:
            return state
    }

}

export default ProductReducer