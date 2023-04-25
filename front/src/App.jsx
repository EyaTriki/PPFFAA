import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { useDispatch } from "react-redux";
import { logout } from "./redux/userRedux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import Logout from "./components/Logout";
import { FileUploader } from "./components/FileUploader";

const App = () => {
 
  
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/index">
          <FileUploader />
        </Route>
        <Route path="/logout"><Logout/></Route>
        <Route path="/login"> <Login /></Route>
        <Route path="/register">
         <Register />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;