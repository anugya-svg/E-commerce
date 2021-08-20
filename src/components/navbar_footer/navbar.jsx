import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

const Navbar=()=>{
return(

<nav className="navbar navbar-expand-md navbar-light mt-1 pb-3 nav  shadow-sm">
    <div className="container">

        <Link className="navbar-brand" to="/">
        <span className="fw-bold h2">
        <span style={{backgroundColor:"#FF2020",color:"white",borderRadius:"50%",padding:"8px"}}><i class="bi bi-shop"></i></span> <span className="display-5 h4">E-Shop</span> 
        </span>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav"
            aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
            <ul className="navbar-nav">
                <li className="nav-item pe-4" >
                        <Link to="/" className="nav-link h4 color" >Home</Link>
                </li>
                <li className="nav-item pe-4" >

                    <Link to="/Contact" className="nav-link h4 color">Contact</Link>
                </li>
                <li className="nav-item pe-4" >

                    <Link to="/about" className="nav-link h4 color" ><i class="bi bi-heart"></i></Link>
                </li>
                <li className="nav-item pe-4">

                    <Link to="/cart" className="nav-link h4 color"><i class="bi bi-cart4"></i></Link>
                </li>
                <li className="nav-item pe-4">
                    <Link to="/cart" className="nav-link h3 color"><i class="bi bi-person"></i></Link>
                </li>   
                


            </ul>
        </div>
    </div>
</nav>
)
}

export default Navbar;