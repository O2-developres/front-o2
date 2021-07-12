import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from "@auth0/auth0-react";
import ContactUs from './components/ContactUs';
import CartPage from './components/CartPage';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
class App extends Component {
  render() {
    console.log(this.props.auth0);
    return (
      <>
      <Router>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/ContactUs">
              <ContactUs/>
            </Route>
            <Route path="/CartPage">
              <CartPage/>
            </Route>
            
          </Switch>
      </Router>
    </>
    )
  }
}

export default withAuth0(App) 

