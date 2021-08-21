import { TOTAL_ITEM } from "./total_types";
const len=JSON.parse(localStorage.getItem('cart')).length;
const totalReducer=(state=len,action)=>{
    if(action.type===TOTAL_ITEM){
            const st=JSON.parse(localStorage.getItem('cart'))
            console.log(`length${st.length}`)
            return  (st.length)
    }
    return state
}
export default totalReducer;
