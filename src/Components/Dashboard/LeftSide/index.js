import React, { Component } from "react";
import "./style.css";
import { Icon } from "react-fa";
import { NavLink } from "react-router-dom";
import Ink from "react-ink";

class LeftSide extends Component {
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }
  handleResize = () => {
    console.log('aaa',document.documentElement.clientWidth);
  }
  getLeftSideConfig = () => {
    return [
      {
        group: "REPORT",
        items: [
          { name: "Flight Report", link: "/booking", icon: "clock-o" },
          { name: "Ground Performance", link: "/nurse", icon: "list-alt" },
          { name: "EFP Bin", link: "/general-list", icon: "male" }
        ]
      },
      {
        group: "MANAGEMENT",
        items: [
          { name: "VIP Management", link: "/order-package", icon: "clone" },
          { name: "NTL Management", link: "/insurance", icon: "clone" },
          {
            name: "Airport Management",
            link: "/diagnosis",
            icon: "stethoscope"
          },
          { name: "Aircraft Management", link: "/reports", icon: "bar-chart" },
          { name: "Groups & Sites", link: "/notification", icon: "bell-o" },
          { name: "Account Management", link: "/promotion", icon: "money" }
        ]
      },
      {
        group: "UTILITIES",
        items: [
          { name: "MCC Schedule", link: "/myinfo", icon: "user" }
          // { name: "Aircraft Assignment", link: "/setting", icon: "cog" }
        ]
      }
    ];
  };
  toggleActive = e => {
    if (this.props.isExpand) {
      e.preventDefault();
    }
    const target = e.currentTarget;
    if (this.props.isExpand && target.parentElement) {
      target.parentElement.classList.toggle("active");
    }
  };
  clickToggle = () => {
    this.props.clickToggle()
  }
  menu = () => {
    return (
      <ul >
        <li>
          <NavLink to="" activeClassName="active">
            <span>
              <img
              onClick={this.clickToggle}
                className="userAvatar"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpP-x9SeyDNFwxTIGqEYHBAuKs8YMz-gvkGvVI0r1CQgUFrQbc1Q"
              />
            </span>
            <span className="navLabel">Hello Ngọc Trinh</span>
            <Ink style={{ color: "black" }} />
          </NavLink>
        </li>
        <li>
          <NavLink to="" activeClassName="active">
            <Icon className="navIcon" name="clone" />
            <span className="navLabel">Dashboard</span>
            <Ink style={{ color: "black" }} />
          </NavLink>
        </li>
        {this.getLeftSideConfig().map((gr, ind) => {
          return (
            <li className="menuGroup">
             {this.props.isExpand ?  <div className="navLabel">{gr.group}</div> :  <div className="navLabel"></div>}
              {this.renderMenu(gr.items)}
            </li>
          );
        })}
      </ul>
    );
  };
  renderMenu = menus => {
    return menus.map((item, i) => {
      return (
        <li>
          <NavLink to={item.link} activeClassName="active">
            <Icon className="icon" name={item.icon} />
            <span className="navLabel">{item.name}</span>
            <Ink style={{ color: "black" }} />
          </NavLink>
        </li>
      );
    });
  };

  render() {
    return (
      <div
        className={`leftSide slimScroll${
          this.props.isExpand ? " expanded animated animation-1  slideInLeft" : " minimized  animated animation-1 slideOutLeft"
        }`}
      >
        <nav className="leftNav scrollable bigNav ">{this.menu()}</nav>
      </div>
    );
  }
}
export default LeftSide;
