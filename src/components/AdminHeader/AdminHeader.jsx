import React, { Component } from 'react';
import "./styles.scss";
import { connect } from 'react-redux';
import logo from "../../assets/tvaa.png";
import { Link } from "react-router-dom";

function mapStateToProps(state) {
    return { authenticated: state.adminauthenticated }
}
const mapDispatchToProps = dispatch => {
    return {
      authenticate: () => dispatch({ type: 'ADMINAUTH' }),
      deauthenticate: () => dispatch({ type: 'ADMINDEAUTH' })
    }
  }

class AdminHeader extends Component {
    navFunc = () => {
        const el = document.querySelector("nav");
        console.log(el);
        el.classList.toggle("change");
    }
    signOut = () => {
        this.props.deauthenticate()
        window.location.assign("http://localhost:3000/admin")
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
                    <Link to="/games" className="nav" id="firstnav">GAMES PANEL</Link>
                    <Link to="/teams" className="nav">USERS PANEL</Link>
                    <button className="nav" onClick={this.signOut}>SIGN OUT</button>
                </div>
                    <div className="hamburger" onClick={this.navFunc}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                <div className="mobileboxes">
                    <Link to="/games" className="mobilenav">GAMES PANEL</Link>
                    <Link to="/teams" className="mobilenav">USERS PANEL</Link>
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
            <Link to="/admin" className="nav" id="loginbox">LOGIN</Link>
        </div>
            <div className="hamburger" onClick={this.navFunc}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
        <div className="mobileboxes">
            <Link to="/admin" className="mobilenav">LOGIN</Link>
        </div>
        </nav>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminHeader);
