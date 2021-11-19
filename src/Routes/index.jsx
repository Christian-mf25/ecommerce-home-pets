import { Switch, Route } from "react-router-dom";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Product from "../Pages/Product";
import Register from "../Pages/Register";
import PetDepartment from "../Pages/PetDepartment";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/departments/:category">
        <PetDepartment />
      </Route>
      <Route path="/cart"></Route>
      <Route path="/product/:id">
        <Product />
      </Route>
    </Switch>
  );
};

export default Routes;
