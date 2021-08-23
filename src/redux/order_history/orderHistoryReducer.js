import { ORDER_HISTORY } from "./orderHistoryTypes";
const orderHistoryReducer=(state={},action)=>{
    console.log(state)
    if(action.type===ORDER_HISTORY)
    {
        const order = localStorage.getItem("order") ? JSON.parse(localStorage.getItem("order")) : [];
        const cart= localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
        const st=[...order,...cart] 
        localStorage.setItem('order',JSON.stringify(st));
        return st;
       
    }
    return state;

}
export default orderHistoryReducer;