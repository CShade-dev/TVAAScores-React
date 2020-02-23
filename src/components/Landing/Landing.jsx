import React, { Component } from 'react';
import "./styles.scss";
import Header from '../Header/Header'
import LiveGames from '../LiveGames/LiveGames'
import AllGames from '../AllGames/AllGames'

class Landing extends Component {
    state = {};

    render() {
        return (
            <>
                <Header />
                <LiveGames />
                {/* <AllGames /> */}
            </>
        );
    }
}

export default Landing;
