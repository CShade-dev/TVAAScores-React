import React, { Component } from 'react';
import "./styles.scss";
import Team from "../Team/Team";

class Match extends Component {
    state = {};

    render() {
        return (
            <div>
                <h1></h1>
                <Team name="Upper Dauphin" score="31" color="orange"/>
                <Team name="Millersburg" score="3" color="maroon" />
            </div>
        );
    }
}

export default Match;