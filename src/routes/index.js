import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Homepage from "../pages/home.page";
import CartPage from "../pages/cart.page";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/cart" component={CartPage} />
      </Switch>
    </Router>
  )
}

export default Routes;