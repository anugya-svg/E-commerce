//jshint esversion: 9
import "./App.css";
import ProductPage from "./pages/ProductPage";
import ProductsList from "./pages/ProductList";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";
import OrderHistory from "./pages/order_history";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar_footer/navbar";
import Footer from "./components/navbar_footer/footer";
import Checkout from './pages/Checkout';
import ScrollToTop from "./util/ScrollToTop";


function App() {
    
    return (
        <Router>
            <ScrollToTop/>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/home">
                    <ProductsList />
                </Route>
                <Route exact path="/product/:id">
                    <ProductPage />
                </Route>
                <Route exact path="/cart">
                    <CartPage />
                </Route>
                <Route exact path="/checkout">
                    <Checkout />
                </Route>
                <Route exact path="/history">
                    <OrderHistory />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
