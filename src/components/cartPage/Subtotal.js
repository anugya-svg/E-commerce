import React from 'react'
import styles from "./subtotal.module.css"
import Divider from '@material-ui/core/Divider';
function Subtotal() {
    return (
        <div className={styles.subtotal}>
            <div className="row ">
                <h5>CartTotal</h5>
            </div>
            <div className="row">
                <div className="d-flex justify-content-between ">
                <p>Items</p>
                <p>6</p>
                </div>
            </div>
            <div className="row ">
                <div className="d-flex justify-content-between ">

                <p> Amount</p>
                <p>$ 566</p>
                </div>
            </div>
            <div className="row mb-3">
                <div className="d-flex justify-content-between ">

                <p>Convenience Fee</p>
                <p ><del>$ 20</del><span className="text-success small"><em>Free</em></span></p>
                </div>
            </div>
            <div className="border-top"></div>
            <div className="row mb-3 ">
                <div className="d-flex justify-content-between ">
                <p className="fw-bold">Total Amount</p>
                <p className="fw-bold">$ 566</p>
                </div>
            </div>
            
        </div>
    )
}

export default Subtotal
