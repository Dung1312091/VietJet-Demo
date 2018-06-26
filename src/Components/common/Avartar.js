import React, { Component, PureComponent } from 'react'
import './style.css';
 class Avartar extends PureComponent {
  render() {
    console.log('aa')
    return (
      <div className="avatar icon" onClick={this.props.handleClick}>
        <img src={this.props.src} className="img"></img>
      </div>
    )
  }
}

export default Avartar
