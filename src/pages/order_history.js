import { useSelector } from "react-redux";
import CartProduct from "../components/cartPage/CartProduct";
function OrderHistory(){
    const history=useSelector((state)=>state.history)
    
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col ">
                    <table className="table table-sm text-center">
                        <thead >
                            <tr>
                                <th scope="col">Product</th>
                                <th scope="col"></th>
                                <th scope="col">Price</th>
                                <th scope="col">Qty</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {history.map((product) => (
                                <CartProduct product={product} key={product.id} />
                            ))}
                        </tbody>
                    </table>
                </div>
               
            </div>
        </div>
        
    )
}
export default OrderHistory