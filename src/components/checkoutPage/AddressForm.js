import React from "react";
import Subtotal from "../cartPage/Subtotal";

function AddressForm() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 order-md-2 mb-4">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-muted">Your cart</span>
                            <span className="badge badge-secondary badge-pill">3</span>
                        </h4>
                        <Subtotal />
                    </div>
                    <div className="col-md-8 order-md-1">
                        <h4 className="mb-3">Billing address</h4>
                        <form className="needs-validation" noValidate>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="firstName">First name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="firstName"
                                        placeholder
                                        defaultValue
                                        required
                                    />
                                    <div className="invalid-feedback">Valid first name is required.</div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="lastName">Last name</label>
                                    <input type="text" className="form-control" id="lastName" placeholder defaultValue required />
                                    <div className="invalid-feedback">Valid last name is required.</div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="input-group">
                                    <div className="invalid-feedback" style={{ width: "100%" }}>
                                        Your username is required.
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="invalid-feedback">Please enter a valid email address for shipping updates.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address">Address</label>
                                <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                                <div className="invalid-feedback">Please enter your shipping address.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address2">
                                    Address 2 <span className="text-muted">(Optional)</span>
                                </label>
                                <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                            </div>
                            <div className="row">
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="zip">Zip</label>
                                    <input type="text" className="form-control" id="zip" placeholder required />
                                    <div className="invalid-feedback">Zip code required.</div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddressForm;
