import React, { Component } from 'react'
import {  Navbar, NavbarBrand, Nav, NavItem, Input } from 'reactstrap';
import compass from '../../images/compass.png';
import people from '../../images/people.png';
import heart from '../../images/heart.png';
import logo from '../../images/logo.png';
import logopic from '../../images/logopic.png';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
          collapsed: true
        };
      }
    
      toggleNavbar() {
        this.setState({
          collapsed: !this.state.collapsed
        });
      }
  render() {
    return (
      <div>
        <Navbar color="faded" light expand = "md">
          <NavbarBrand className="mr-auto">
            <span>
            <img src = {logopic} alt = "brand" width = "40px" height = "40px" className = "logo"/>
            <span className="vl"></span>
            <img src={logo} alt="brandname" width = "120px" height = "40px" />
            </span>
          </NavbarBrand>
              <div>
                  <Input type="text" placeholder = "                Search" className = "search" />
              </div>
            <Nav className = "ml-auto" navbar>
              <NavItem>
                  <img src={compass} alt="compass" width= "35px" height = "40px" className = "compass" />
              </NavItem>
              <NavItem>
                  <img src={heart} alt="heart" width= "35px" height = "35px" className = "heart" />
              </NavItem>
              <NavItem>
                  <img src={people} alt="heart" width= "35px" height = "35px" className = "people" />
              </NavItem>
            </Nav>
        </Navbar>
        <hr className = "line"/>
      </div>
    )
  }
}

export default Header;