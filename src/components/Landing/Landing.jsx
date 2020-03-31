import React, { Component } from 'react';
import "./styles.scss";
import Header from '../Header/Header'
import LiveGames from '../LiveGames/LiveGames'

class Landing extends Component {
    state = {};

    render() {
        return (
            <>
                <Header />
                <LiveGames />
            </>
        );
    }
}

export default Landing;
