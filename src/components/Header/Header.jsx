import React, { Component } from 'react';
import "./styles.scss";
import { connect } from 'react-redux';
import logo from "../../assets/tvaa.png";
import { Link } from "react-router-dom";

function mapStateToProps(state) {
    return { authenticated: state.authenticated }
}
const mapDispatchToProps = dispatch => {
    return {
      authenticate: () => dispatch({ type: 'AUTH' }),
      deauthenticate: () => dispatch({ type: 'DEAUTH' })
    }
  }

class Header extends Component {
    navFunc = () => {
        const el = document.querySelector("nav");
        el.classList.toggle("change");
    };
    signOut = () => {
        this.props.deauthenticate()
        window.location.assign("http://localhost:3000/")
    }
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
                    <Link to="/games" className="nav" id="firstnav">GAMES</Link>
                    <Link to="/teams" className="nav">TEAMS</Link>
                    <button className="nav" onClick={this.signOut}>SIGN OUT</button>
                </div>
                    <div className="hamburger" onClick={this.navFunc}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                <div className="mobileboxes">
                    <Link to="/games" className="mobilenav">GAMES</Link>
                    <Link to="/teams" className="mobilenav">TEAMS</Link>
                    <button className="mobilenav" onClick={this.signOut}>SIGN OUT</button>
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
            <Link to="/games" className="nav" id="firstnav">GAMES</Link>
            <Link to="/teams" className="nav">TEAMS</Link>
            <Link to="/login" className="nav">LOGIN</Link>
        </div>
            <div className="hamburger" onClick={this.navFunc}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
        <div className="mobileboxes">
            <Link to="/games" className="mobilenav">GAMES</Link>
            <Link to="/teams" className="mobilenav">TEAMS</Link>
            <Link to="/login" className="mobilenav">LOGIN</Link>
        </div>
        </nav>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
