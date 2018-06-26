import React, { Component } from "react";
import "./style.css";
import { Icon } from "react-fa";
import { Link } from "react-router-dom";

class Header extends Component {
  toggleActive = e => {
    e.preventDefault();
    this.props.clickToggle();
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row header">
          <div>
          <Icon name="align-justify" />
          </div>
          <div>AAAAAAAAAAAAAAAA</div>
          <div className="headerRight">
            <h4>12:30</h4>
            <div style={{marginLeft:30}}>
            <p>14 Apr</p>
            <p>2018</p>
            </div>
            <div>
              <h4>VietJetAir.com.</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
