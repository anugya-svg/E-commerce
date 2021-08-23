

import { ORDER_HISTORY } from "./orderHistoryTypes";
const orderHistoryReducer = (state = [], action) => {
    if (action.type === ORDER_HISTORY) {
        const order = localStorage.getItem("order") ? JSON.parse(localStorage.getItem("order")) : [];
        const orderedItems = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
        const currentOrderDetails = {
            dayOfOrder: new Date().toDateString(),
            orderItems: orderedItems
        }
        const allOrders = [...order, currentOrderDetails]
        localStorage.setItem('order', JSON.stringify(allOrders));
        // console.log(allOrders);
        return allOrders;
    }
    return state;
}
export default orderHistoryReducer;