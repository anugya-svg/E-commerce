import "./nav.css";

const Footer = () => {
    return (
        <div class="footer pb-0 mb-0 justify-content-center text-light ">
            <footer className="container">
                <div class="row my-5 justify-content-center py-5">
                    <div class="col-11">
                        <div class="row ">
                            <div class="col-xl-8 col-md-4 col-sm-4 col-12 mx-auto a">
                                <h3 class="text-muted mb-md-0 mb-5">
                                    <i class="bi bi-shop"></i> <span className="random">E-Shop By Skyliners</span>{" "}
                                </h3>
                            </div>
                            <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                                <h6 class="mb-3 mb-lg-4 text-muted ">
                                    <b>MENU</b>
                                </h6>
                                <ul class="list-unstyled">
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Blog</li>
                                    <li>Portfolio</li>
                                </ul>
                            </div>
                            <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                                <h6 class="mb-3 mb-lg-4 text-muted mt-sm-0 mt-5">
                                    <b>ADDRESS</b>
                                </h6>
                                <p class="mb-1">605, RATAN ICON BUILDING</p>
                                <p>SEAWOODS SECTOR</p>
                            </div>
                        </div>
                        <div class="row ">
                            <div class="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                                <p class="social mb-0 pb-0 text-muted">
                                    {" "}
                                    <span class="mx-2">
                                        <i class="bi bi-facebook"></i>
                                    </span>{" "}
                                    <span class="mx-2">
                                        <i class="bi bi-linkedin"></i>
                                    </span>{" "}
                                    <span class="mx-2">
                                        <i class="bi bi-twitter"></i>
                                    </span>{" "}
                                    <span class="mx-2">
                                        <i class="bi bi-instagram"></i>
                                    </span>{" "}
                                </p>
                                <small class="rights">
                                    <span>&#174;</span> Skyliners Team All Rights Reserved.
                                </small>
                            </div>
                            <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                                <h6 class="mt-55 mt-2 text-muted">
                                    <b>Skyliners Team</b>
                                </h6>
                                <small>
                                    {" "}
                                    <span>
                                        <i class="fa fa-envelope" aria-hidden="true"></i>
                                    </span>{" "}
                                    skylinersTeam@gmail.com
                                </small>
                            </div>
                            <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                                <h6 class="text-muted">
                                    <b>Co-ordinator</b>
                                </h6>
                                <small>
                                    <span>
                                        <i class="fa fa-envelope" aria-hidden="true"></i>
                                    </span>{" "}
                                    abcdef@gmail.com
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
export default Footer;
