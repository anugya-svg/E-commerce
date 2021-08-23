//jshint esversion: 9
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import logo from "./../../assets/logo.png";
const Navbar = () => {
    const len = useSelector((state) => state.total);
    const wishlen = useSelector((state) => state.wishlist.length);

    return (
        <nav className="navbar navbar-expand-md navbar-light nav shadow-sm">
            <div className="container py-3">
                <Link className="navbar-brand" to="/">
                    <span className="fw-bold h3 d-flex align-items-center">
                        {/* <span className="rounded-circle" style={{ backgroundColor: "#FF2020", color: "white", padding: "10px" }}>
                            <i class="bi bi-shop"></i>
                        </span>{" "} */}
                        <img className="img-fluid" src={logo} alt="logo" />
                        <span className="fs-4 fw-bold ps-2">E-Shop</span>
                    </span>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#main-nav"
                    aria-controls="main-nav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
                    <ul className="navbar-nav">
                        <li className="nav-item pe-4">
                            <Link to="/" className="nav-link fs-5 fw-bold color">
                                <i class="bi bi-house-door"></i>
                            </Link>
                        </li>
                        <li className="nav-item pe-4">
                            <Link to="/history" className="nav-link h4 color">
                                <i class="bi bi-clock-history"></i>
                            </Link>
                        </li>
                        <li className="nav-item pe-4">
                            <Link to="/wishlist" className="nav-link fs-5 fw-bold color">
                                <i class="bi bi-heart"></i>
                                <sup class="fs-6" style={{ color: "#FF2020" }}>
                                    {wishlen}
                                </sup>
                            </Link>
                        </li>
                        <li className="nav-item pe-4">
                            <Link to="/cart" className="nav-link fs-5 fw-bold color">
                                <i class="bi bi-cart4"></i>
                                <sup class="fs-6" style={{ color: "#FF2020" }}>
                                    {len}
                                </sup>
                            </Link>
                        </li>
                        {/* <li className="nav-item pe-4">
                            <Link to="/cart" className="nav-link fs-4 fw-bold color">
                                <i class="bi bi-person"></i>
                            </Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
