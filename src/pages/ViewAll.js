import React, { useEffect } from "react";
import {useDispatch,useSelector} from "react-redux";
import ProductCard from "../components/productPage/ProductCard"
import { fetchProducts } from "../redux";

const ViewAll = () => {
    const products = useSelector((state) => state.products.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    return ( 
       <div className="container">
           <div className="row">
               
               
               {products.map((product) => {
                   return (
                       
                       <div className="col-md-4">
                            <ProductCard key={product.id} data={product} imgURL={product.img[0]} id={product.id} name={product.name} price={product.price}/>
                        </div>
                    
                )})
                   }
                  
           </div>
       </div>
     );
}
 
export default ViewAll;