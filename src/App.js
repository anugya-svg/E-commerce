//jshint esversion: 9
import "./App.css";
import ProductPage from "./pages/ProductPage";
import ProductsList from "./pages/ProductList";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <ProductsList />
                </Route>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route exact path="/product/:id">
                    <ProductPage />
                </Route>
                <Route exact path="/cart">
                    <CartPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
