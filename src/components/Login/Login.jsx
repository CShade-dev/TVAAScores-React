import React, { Component } from 'react';
import "./styles.scss";
import LoginForm from '../LoginForm/LoginForm';
import Header from '../Header/Header';

class Login extends Component {
    state = {};

    render() {
        return (
            <>
            <Header />
            <LoginForm />
            </>
        );
    }
}

export default Login;
