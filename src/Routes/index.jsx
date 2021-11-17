import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
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
      <Route exact path="/departments/:pet">
        <PetDepartment />
      </Route>
      <Route path="/cart"></Route>
    </Switch>
  );
};

export default Routes;
