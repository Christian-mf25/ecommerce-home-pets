import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Product from "../Pages/Product";
import Register from "../Pages/Register";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/category"></Route>
      <Route path="/cart"></Route>
      <Route path="/product/:id">
        <Product />
      </Route>
    </Switch>
  );
};

export default Routes;
