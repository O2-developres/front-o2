import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUs from './components/ContactUs';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
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
          </Switch>
      </Router>
    </>
    )
  }
}

export default App

