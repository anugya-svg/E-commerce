import './App.css';
import ProductPage from './pages/ProductPage';
import ProductsList from './pages/ProductList';
import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <ProductsList />
          </Route>
          <Route exact path="/:id">
            <ProductPage />
          </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
