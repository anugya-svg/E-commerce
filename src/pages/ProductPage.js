import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { fetchProduct } from '../redux'
import { addCart } from '../redux/cart/CartActions'
import { removeCart } from '../redux/cart/CartActions'
import Button from '@material-ui/core/Button';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import ProgressBar from 'react-bootstrap/ProgressBar'
import StarIcon from '@material-ui/icons/Star';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import Comments from '../components/ProductCard/comments';
import '../components/ProductCard/productPage.css'
import {useState} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import CurrencyFormat from 'react-currency-format'

import { Link } from 'react-router-dom';
function ProductPage() {
    const [imageNumber, setImageNumber] = useState(0);
    const { id } = useParams()
    const dispatch = useDispatch()
    let product = useSelector(state => state.product)
    if (product && product[id]) {
        product = product[id]
        return (
            <div>
                <>
        {/* <Navbar/> */}
        <div className="conatiner">
            <div className="row">
                <div className="col-md-2">

                    {
                        product.img.map((image,index)=>{
                            return <img src={image} className="more_img" alt=" " onClick={()=>setImageNumber(index)}/>
                        })
                    }
                
                </div>
                <div className="col-md-4 left" >
               {/* <CardImage url={product.img[imageNumber]} className="card_image"/> */}
                <img src={product.img[imageNumber]} className="main_img" alt="not found" />
                   
                </div>
                <div className="col-md-5 right" >
                    <h3>{product.name}</h3>
                    <h4>{product.detail}</h4>
                    <div className="span">{product.rating} <StarIcon  style={{ color:"orange" }} className="stars"/>  | 6,000 Ratings</div>
                        <hr />
                                
                    <CurrencyFormat
                        value={product.price}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'₹'}
                        renderText={value => <h3>{value}</h3>}
                    />
                    <h3>{product.price}</h3>
                    <span>Actual price </span>
                    <span>discount</span>
                    <p>inclusive of all taxes</p>
                    <p>FREE delivery: Tuesday, August 24</p>
                    
                    <div className="col"></div>
                    <h5>Select size</h5>
                    <br/>
                    <div className="">
                        <span className="size">5</span>
                        <span className="size">6</span>
                        <span className="size">7</span>
                        <span className="size">8</span>
                        <span className="size">9</span>
                    </div>
                   <br/>
                    <Button className="buy_now" style={{background:"orange"}} onClick={() => dispatch(addCart(product))}><LocalGroceryStoreIcon className="icon"/> Add  to cart</Button>
                    <Button className="add_cart" style={{background:"orange"}} onClick={() => dispatch(removeCart(product.id))}><DeleteIcon className="icon"/>Delete from cart</Button>
                    <div>
  
                </div>
                <div className="ratings">
                <h4>Ratings<ThumbsUpDownIcon className="icon"/></h4>
                <hr/>
                <div className="number">
                <p>{product.rating}<StarIcon style={{ color:"orange",width:"35px" ,height:"35px"}}/></p>
                </div>

                <div className="progress_div">
                <ProgressBar className="progress" variant="success" now={90} />
                <ProgressBar className="progress" variant="success" now={60} />
                <ProgressBar className="progress" variant="warning" now={70} />
                <ProgressBar className="progress" variant="warning" now={30} />
                <ProgressBar className="progress" variant="danger" now={15} />
                </div>

                <h4>Comments</h4>
                <hr/>
                <Comments name="James Companela" comment="Amazing Product!" date="16/07/2021" stars=""/>
                <Comments name="Albert" comment="Very good quality" date="17/08/2020" stars=""/>
                <Comments name="Professor" comment="" date="29/04/2020" stars=""/>
                </div>
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
        {/* <Footer/> */}
        </>   
            </div>
        )
    }
    else {
        dispatch(fetchProduct(id))
        return (
            <h1>LOADING......</h1>
        )
    }
}

export default ProductPage
