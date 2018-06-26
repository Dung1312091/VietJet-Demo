import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import ScrollDetector from './Components/Content';
import Dashboard from "./Components/Dashboard";
class App extends Component {
  render() {
    return (
      <Router>
        <Dashboard >
          <ScrollDetector></ScrollDetector>
        </Dashboard>
      </Router>
    );
  }
}

export default App;
