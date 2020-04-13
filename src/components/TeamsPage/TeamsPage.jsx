import React, { Component } from 'react';
import Header from "../Header";
import TeamsList from "../TeamsList";
import "./styles.scss";

class TeamsPage extends Component {
    state = {};

    render() {
        return (
            <>
            <Header/>
            <TeamsList />
            </>
        );
    }
}

export default TeamsPage;
