import React, { Component } from "react";
import { Icon } from "react-fa";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Ink from "react-ink";
import Avartar from '../Components/common/Avartar';
import ScrollDetector from "../Components/Content";
import "./style.css";
const listMenu = [
  {
    group: 'REPORT',
    menuItem: [
      {
        name: 'Filight Report',
        linkTo: 'abx',
        icon: 'fighter-jet'
      },
      {
        name: 'Ground Performantce',
        linkTo: 'abx',
        icon: 'fighter-jet'
      },
      {
        name: 'EFB Bin',
        linkTo: 'abx',
        icon: 'fighter-jet'
      }
    ]
  }, {
    group: 'MANAGEMENT',
    menuItem: [
      {
        name: 'VIP Management',
        linkTo: 'abx',
        icon: 'fighter-jet'
      },
      {
        name: 'NTL Management',
        linkTo: 'abx',
        icon: 'fighter-jet'
      },
      {
        name: 'Airport Management',
        linkTo: 'abx',
        icon: 'fighter-jet'
      },
      {
        name: 'Aircraft Management',
        linkTo: 'abx',
        icon: 'fighter-jet'
      },
      {
        name: 'Groups & Sites',
        linkTo: 'abx',
        icon: 'fighter-jet'
      },
      {
        name: 'Account Management',
        linkTo: 'abx',
        icon: 'fighter-jet'
      }
    ]
  },
  {
    group: 'UTILITIES',
    menuItem: [
      {
        name: 'MCC schedule',
        linkTo: 'abx',
        icon: 'fighter-jet'
      },
      {
        name: 'Aircraft Assiignment',
        linkTo: 'abx',
        icon: 'fighter-jet'
      }
    ]
  }
]
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapse: false,
      isAnimation: false,
      src: 'https://vegiagoc.com/Upload/images/Vietjets_cabin_crew_on_duty.jpg'
    };
  }
  handleCollapse = () => {
    this.setState(pre => ({
      isCollapse: !pre.isCollapse,
      isAnimation: true
    }));
  };
  handleClose = () => {
    this.setState({
      isCollapse: false
    })
  }
  renderGroupMenu = () => {
    return listMenu.map((gr, i) => {
      return (
        <React.Fragment>
          <li className="groupMenu">
            <span className="groupMenuText menuText">{gr.group}</span>
          </li>
          {this.renderMenu(gr.menuItem)}
        </React.Fragment>
      )
    })
  }
  renderMenu = (menuList, i) => {
    return menuList.map((e, i) => {
      return (
        <li>
          <NavLink
            to={e.linkTo}
            activeClassName="active"
            className="routerLink"
          >
            <Icon name={e.icon} className="icon" />
            <span className="menuText">{e.name}</span>
            {/* <Ink style={{ color: "black" }} /> */}
          </NavLink>
        </li>
      )
    })
  }
  render() {
    const { isCollapse, isAnimation } = this.state;
    return (
      <Router>
        <div className="wrapper ">
          <div
            className={`leftSideBar ${
              isCollapse
                ? "animated animation-1 slideInLeft collapse"
                : !isCollapse && isAnimation ? "animated animation-1 slideOutLeft" : ''
              }`}
          >
            <ul>
              <li style={{ marginBottom: 50 }} className="profile">
                <div>
                  <Avartar src={this.state.src} handleClick={this.handleCollapse} />
                  <div className="profileInfo">
                    <p className="menuText">Hello, Ngoc Trinh</p>
                    <p className="textProfile">Setting</p>
                  </div>
                </div>
              </li>
              <li className="dashBoard">
                <li>
                  <div
                    className="routerLink"
                  >
                    <Icon name="slack" className="icon" />
                    <span className="menuText">Dashboard</span>
                    {/* <Ink style={{ color: "black" }} /> */}
                  </div>
                </li>
              </li>
              {this.renderGroupMenu()}
            </ul>
          </div>
          <div className="rightCnt ">
            <div className={`${this.state.isCollapse ? 'overlay animated animation-1 slideInTop' : null}`} onClick={this.handleCollapse} />
            <div>
              <button onClick={this.handleCollapse} style={{ marginLeft: 300, zIndex: 3000, position: 'absolute' }}>
                Click
              </button>
              <ScrollDetector />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default Layout;
