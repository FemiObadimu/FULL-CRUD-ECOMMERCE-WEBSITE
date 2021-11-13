import "./App.css";
import Navs from "./components/Navs";
import "react-bootstrap";
import LandingPage from "./components/home/LandingPage";
import Shop from "./components/products/Shop";
import Cart from "./components/cart/Cart";
import Checkout from "./components/payment/Checkout";
import Categories from "./components/products/Categories";
import Login from "./components/auth/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductState from "./context/products/ProductState";

function App() {
  return (
    <ProductState>
      <Router>
        <div className="App">
          <div className="container">
            <Navs />
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/shop" component={Shop} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/categories" component={Categories} />
              <Route exact path="/checkout" component={Checkout} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </div>
        </div>
      </Router>
    </ProductState>
  );
}

export default App;
