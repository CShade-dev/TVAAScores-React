import React, { Component } from 'react';
import "./styles.scss";
import logo from "../../assets/tvaa.png";

class Header extends Component {
    state = {};

    render() {
        myFunction = () => {
            this.classList.toggle("change");
          }
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
                    <a id="nav" href="#games">GAMES</a>
                    <a id="nav" href="#teams">TEAMS</a>
                    <a id="nav" href="#login">LOG IN</a>
                </div>
                    <div class="hamburger" onclick={this.myFunction}>
                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>
                    </div>
                </nav>
        );
    }
}

export default Header;
