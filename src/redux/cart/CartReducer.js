//jshint esversion: 9
import { ADD_CART, TOTAL_ITEM } from "./CartTypes";
import { REMOVE_CART } from "./CartTypes";
import { ADJ_QTY } from "./CartTypes";
import { CLEAR } from "./CartTypes";
const cart = [];

const CartReducer = (state = cart, action) => {
    switch (action.type) {
        case ADD_CART:
            const isItemExists = state.some((product) => product.id === action.payload.id);
            if (isItemExists) {
                const cart = state.map((product) => {
                    if (product.id === action.payload.id) {
                        return { ...product, qty: product.qty + 1 };
                    } else {
                        return product;
                    }
                });
                localStorage.setItem("cart", JSON.stringify(cart));
                return cart;
            } else {
                const cart = [...state, { ...action.payload, qty: 1 }];
                localStorage.setItem("cart", JSON.stringify(cart));
                // localStorage.setItem('name','Rahull')
                return cart;
            }
        case REMOVE_CART:
            state = JSON.parse(localStorage.getItem("cart"));
            const cart = state.filter((product) => action.payload !== product.id);
            localStorage.setItem("cart", JSON.stringify(cart));
            return cart;
        case ADJ_QTY:
            const st = JSON.parse(localStorage.getItem("cart"));
            const new_cart = st.map((item) =>
                item.id === action.payload.id ? { ...item, qty: item.qty + action.payload.qty } : item
            );
            console.log(new_cart);
            localStorage.setItem("cart", JSON.stringify(new_cart));
            return new_cart;
        case CLEAR:
            localStorage.removeItem("cart");
            return [];

        default:
            return state;
    }
};
export default CartReducer;
