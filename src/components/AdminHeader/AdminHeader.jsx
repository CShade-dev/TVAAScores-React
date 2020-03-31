import React, { Component } from 'react';
import "./styles.scss";
import { connect } from 'react-redux';
import logo from "../../assets/tvaa.png";
import { Link } from "react-router-dom";

function mapStateToProps(state) {
    return { authenticated: state.adminauthenticated }
}

class AdminHeader extends Component {
    navFunc = () => {
        const el = document.querySelector("nav");
        console.log(el);
        el.classList.toggle("change");
    };
    render() {
        return this.props.authenticated ? (
                <nav>
                    <div className="logo">
                    <Link to="/">
                    <img 
                    src={logo} 
                    id="logo"
                    alt="Tri Valley Athletic Association" />
                    </Link>
                </div>
                <div className="boxes">
                    <Link to="/games" className="nav">GAMES PANEL</Link>
                    <Link to="/teams" className="nav">USERS PANEL</Link>
                    <Link to="/login" className="nav">SIGN OUT</Link>
                </div>
                    <div className="hamburger" onClick={this.navFunc}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                <div className="mobileboxes">
                    <Link to="/games" className="mobilenav">GAMES PANEL</Link>
                    <Link to="/teams" className="mobilenav">USERS PANEL</Link>
                    <Link to="/login" className="mobilenav">SIGN OUT</Link>
                </div>
                </nav>
        ) : (
        <nav>
        <div className="logo">
            <Link to="/">
            <img 
            src={logo} 
            id="logo"
            alt="Tri Valley Athletic Association" />
            </Link>
        </div>
        <div className="boxes">
            <Link to="/login" className="nav">LOGIN</Link>
        </div>
            <div className="hamburger" onClick={this.navFunc}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
        <div className="mobileboxes">
            <Link to="/login" className="mobilenav">LOGIN</Link>
        </div>
        </nav>
        );
    }
}

export default connect(mapStateToProps)(AdminHeader);
