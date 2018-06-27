import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppContext } from './Context/appContext';
import "./App.css";
import ScrollDetector from './Components/Content';
import Layout from './TestLayout';
class App extends Component {
  constructor(props) {
    super(props);
    const clientWidth = document.documentElement.clientWidth || window.innerWidth;
    this.state = {
      isMobile: clientWidth <= 480 ? true : false
    }
  }
  render() {
    return (
      <Router>
        <AppContext.Provider value={this.state}> 
          <Layout >
            <ScrollDetector></ScrollDetector>
          </Layout>
        </AppContext.Provider>
      </Router>
    );
  }
}

export default App;
