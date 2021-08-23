import React from 'react'
import Comp from "../../assets/comp.gif"
import styles from "./Comp.module.css"
function Completed() {
    return (
        <div className={styles.comp}>

        <div className={styles.ImageContainer}>
            <img src={Comp} alt="not found" className={styles.compImg} />
                <div className={styles.text}>

        <h4>Your order has been placed!! It will be delivered in next 4-5 working days</h4>
                </div>
            </div>
        </div>
    )
}

export default Completed
