import React, { Component } from "react";
import CreateMoviePage from "./CreateMoviePage";
import Login from "./auth/login";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Redirect,
  } from "react-router-dom";
  
  export default class HomePage extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return <Router>
          <Routes>
          <Route path="/" element={<p>This is the homePage</p>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/create" element={<CreateMoviePage/>}></Route>
          </Routes>
      </Router>
    }
  }