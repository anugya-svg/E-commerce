import React from "react";
import styles from "./subtotal.module.css";
import { useSelector } from "react-redux";
import UseCurrency from "./../../util/useCurrency";
import CurrencyFormat from "react-currency-format";
function Subtotal() {
  const count = useSelector((state) => state.total);
  const cart = JSON.parse(localStorage.getItem("cart"));
  if (count) {
    const prize = cart.map((item) => item.price * item.qty);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    const total = prize.reduce(reducer);
    console.log(total);

    return (
      <div className={`${styles.subtotal} mb-3`}>
        <div className="row my-3">
          <h5>CartTotal</h5>
        </div>
        <div className="row">
          <div className="d-flex justify-content-between ">
            <p>Items</p>
            <p>{count}</p>
          </div>
        </div>
        <div className="row ">
          <div className="d-flex justify-content-between ">
            <p> Amount</p>
            <p>
              <CurrencyFormat
                value={total}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"Rs."}
                renderText={(value) => <div>{value}</div>}
              />
            </p>
          </div>
        </div>
        <div className="row mb-3">
          <div className="d-flex justify-content-between ">
            <p>Convenience Fee</p>
            <p>
              <del>$ 20</del>
              <span className="text-success small">
                <em>Free</em>
              </span>
            </p>
          </div>
        </div>
        <div className="border-top"></div>
        <div className="row mb-3 ">
          <div className="d-flex justify-content-between ">
            <p className="fw-bold">Total Amount</p>
            <p className="fw-bold">
              <UseCurrency value={total} />
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Empty cart</div>;
  }
}

export default Subtotal;
