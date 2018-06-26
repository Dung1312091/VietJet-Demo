import React, { Component } from 'react';
import './style.css';
import Header from './Header';
import LeftSide from './LeftSide';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      isExpand: false
    };
  }
  toggleLeftSide = () => {;
    this.setState({
      isExpand: !this.state.isExpand
    });
  }
  render() {
    return (
     <div className="dashboard">
       <div className="left">
          <LeftSide isExpand={this.state.isExpand}  clickToggle={this.toggleLeftSide} />
       </div>
       {this.state.isExpand && <div className="overlay" onClick={this.toggleLeftSide}></div>}
       <div className="right">
         <Header isExpand={this.state.isExpand} clickToggle={this.toggleLeftSide} />
         {this.props.children}
       </div>
       
     </div>
    );
  }
}

export default Dashboard;
