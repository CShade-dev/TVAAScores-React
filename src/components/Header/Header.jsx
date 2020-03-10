import React, { Component } from 'react';
import "./styles.scss";
import logo from "../../assets/tvaa.png";
import hamburger from "../../assets/hamburger.svg";

class Header extends Component {
    state = {};

    render() {
        return (
                <nav>
                    <div className="logo">
                <a 
                href="#home">
                    <img 
                    src={logo} 
                    id="logo" />
                </a>
                </div>
                <div className="boxes">
                    <a id="nav" href="#games">GAMES</a>
                    <a id="nav" href="#teams">TEAMS</a>
                    <a id="nav" href="#login">LOG IN</a>
                </div>
                <img 
                src={hamburger}
                id="hamburger" />
                </nav>
        );
    }
}

export default Header;
