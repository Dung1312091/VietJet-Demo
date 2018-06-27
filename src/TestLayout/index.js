import React, { Component } from "react";
import { Icon } from "react-fa";
import { NavLink} from "react-router-dom";
import {AppContext} from '../Context/appContext';
import Header from '../Components/Header';
import Ink from "react-ink";

import Avartar from '../Components/common/Avartar';

import "./style.css";
const listMenu = [
  {
    group: 'REPORT',
    menuItem: [
      {
        name: 'Filight Report',
        linkTo: '/a',
        icon: 'fighter-jet'
      },
      {
        name: 'Ground Performantce',
        linkTo: '/ab',
        icon: 'fighter-jet'
      },
      {
        name: 'EFB Bin',
        linkTo: '/abc',
        icon: 'fighter-jet'
      }
    ]
  }, {
    group: 'MANAGEMENT',
    menuItem: [
      {
        name: 'VIP Management',
        linkTo: '/abcd',
        icon: 'fighter-jet'
      },
      {
        name: 'NTL Management',
        linkTo: '/abcde',
        icon: 'fighter-jet'
      },
      {
        name: 'Airport Management',
        linkTo: '/abcdef',
        icon: 'fighter-jet'
      },
      {
        name: 'Aircraft Management',
        linkTo: '/abcdefg',
        icon: 'fighter-jet'
      },
      {
        name: 'Groups & Sites',
        linkTo: '/abcdefgh',
        icon: 'fighter-jet'
      },
      {
        name: 'Account Management',
        linkTo: '/abcdefghj',
        icon: 'fighter-jet'
      }
    ]
  },
  {
    group: 'UTILITIES',
    menuItem: [
      {
        name: 'MCC schedule',
        linkTo: '/abcdefghjk',
        icon: 'fighter-jet'
      },
      {
        name: 'Aircraft Assiignment',
        linkTo: '/abcdefghjkm',
        icon: 'fighter-jet'
      }
    ]
  }
]
class Layout extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      isCollapse: false,
      isAnimation: false,
      src: 'https://vegiagoc.com/Upload/images/Vietjets_cabin_crew_on_duty.jpg',
      isMobile: false
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
        <React.Fragment key={i}>
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
        <li key={i}>
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
      <AppContext.Consumer>
      {context => (
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
                     
                        <div
                          className="routerLink"
                        >
                          <Icon name="slack" className="icon" />
                          <span className="menuText">Dashboard</span>
                          {/* <Ink style={{ color: "black" }} /> */}
                        </div>
                     
                    </li>
                    {this.renderGroupMenu()}
                  </ul>
                </div>
                <div className="rightCnt ">
                  <div className={`${this.state.isCollapse ? 'overlay animated animation-1 slideInTop' : null}`} onClick={this.handleCollapse} />
                  <Header handleCollapse={this.handleCollapse}/>
                  {this.props.children}
                </div>
              </div>
      )}
      </AppContext.Consumer>
    );
  }
}

export default Layout;


 

