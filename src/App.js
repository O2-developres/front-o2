import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUs from './components/ContactUs';
import CartPage from './components/CartPage';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Profile from './components/Profile';
class App extends Component {
  render() {
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
            <Route path="/Profile">
              <Profile/>
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

export default App

