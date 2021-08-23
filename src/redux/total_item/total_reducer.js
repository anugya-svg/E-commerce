//jshint esversion: 9
import { TOTAL_ITEM } from "./total_types";
const len = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).length : 0;
const totalReducer = (state = len, action) => {
    if (action.type === TOTAL_ITEM) {
        const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
        return cart.length;
    }
    return state;
};
export default totalReducer;
