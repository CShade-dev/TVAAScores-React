import React, { Component } from 'react';
import "./styles.scss";
import logo from "../../assets/tvaa.png";
import { Link } from "react-router-dom";

class Header extends Component {
    state = {
        authenticated: false
    };
    navFunc = () => {
        const el = document.querySelector("nav");
        console.log(el);
        el.classList.toggle("change");
    };
    render() {
        return (
                <nav>
                    <div className="logo">
                <a 
                href="#home">
                    <img 
                    src={logo} 
                    id="logo"
                    alt="Tri Valley Athletic Association" />
                </a>
                </div>
                <div className="boxes">
                    <Link to="/games" id="nav">GAMES</Link>
                    <Link to="/teams" id="nav">TEAMS</Link>
                    <Link to="/login" id="nav">LOG IN</Link>
                </div>
                    <div className="hamburger" onClick={this.navFunc}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                <div className="mobileboxes">
                    <Link to="/games" id="mobilenav">GAMES</Link>
                    <Link to="/teams" id="mobilenav">TEAMS</Link>
                    <Link to="/login" id="mobilenav">LOG IN</Link>
                </div>
                </nav>
        );
    }
}

export default Header;
