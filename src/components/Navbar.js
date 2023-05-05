import React, { Component } from 'react';
import "./Navbar.css";
import logo from "../images/logo2.png";



class Navbar extends Component {
    state = {clicked: false}; 
    handleClick = () =>{ this.setState({clicked: !this.state.clicked})}
    render(){
  return (
    <>
        <nav className="navbar">
            <div>
            <img alt="" src={logo} width={150} height={150} />
            </div>
            <div>
                <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                    <li><a className="active" href="/">Home</a></li>
                    <li><a href='flavours'>Flavours</a></li>
                    <li><a href='locations'>Locations</a></li>
                    <li><a href='about'>About</a></li>
                </ul>
            </div>
            <div id='mobile' onClick={this.handleClick}>
                <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
       

        </nav>
    </>
  );
}
}

export default Navbar;