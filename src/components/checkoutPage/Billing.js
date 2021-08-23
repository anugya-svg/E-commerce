import React, { useState } from "react";
import Bill from "../../assets/Billing.svg";
import styles from "./Billing.module.css";

function Billing() {
    // const [cdNum, setCdNumber] = useState("");
    // const [value,setState]
    // function handleChange(e) {
    //     const re = /^[0-9\b]+$/;
    //     if (e.target.value === "" || re.test(e.target.value)) {
    //         setCdNumber(e.target.value);
    //     }
    // }
    const Name = () => {
        return (
            <div>
                <label htmlFor="cc-name">Name on card</label>
                <input type="text" className="form-control" id="cc-name" placeholder="Name" required />
                <small className="text-muted">Full name as displayed on card</small>
                <div className="invalid-feedback">Name on card is required</div>
            </div>
        );
    };
    const CardDetails = () => {
        return (
            <div>
                <div>
                    <label htmlFor="cc-number">Credit card number</label>
                    <input
                        type="text"
                        // onChange={handleChange}
                        // value={cdNum}
                        maxlength="16"
                        className="form-control"
                        id="cc-number"
                        placeholder="card number"
                        required
                    />
                    <div className="invalid-feedback">Credit card number is required</div>
                </div>
                <div>
                    <label htmlFor="cc-expiration">Expiration</label>
                    <input
                        type="date"
                        className="form-control"
                        id="cc-expiration"
                        min={new Date().toISOString().split("T")[0]}
                        placeholder
                        required
                    />
                    <div className="invalid-feedback">Expiration date required</div>
                </div>
                <div className="col-md-3 mb-3">
                    <label htmlFor="cc-cvv">CVV</label>
                    <input maxlength="3" type="password" className="form-control" id="cc-cvv" placeholder required />
                    <div className="invalid-feedback">Security code required</div>
                </div>
            </div>
        );
    };
    return (
        <div style={{ lineHeight: "1.8", fontSize: "15px" }}>
            <div className="d-flex align-items-center my-3">
                <div className="row">
                    <div className="col-md-8">
                        <Name />
                        <CardDetails />
                    </div>
                    <div className="col-md-4">
                        <img src={Bill} alt="not found" className={styles.billImage} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Billing;
