import React, { Component } from 'react';
import "./styles.scss";
import Team from "../Team/Team";

class Match extends Component {
    
    state = {
        loading: true,
        game: null,
    };
    componentDidMount () {

    }
    render() {
        
        var quarter = this.state.game.quarter;
        if (quarter === "1q") {
            quarter = "1st Quarter";
        } else if (quarter === "2q") {
            quarter = "2nd Quarter";
        } else if (quarter === "1h") {
            quarter = "1st Half";
        } else if (quarter === "3q") {
            quarter = "3rd Quarter";
        } else if (quarter === "4q") {
            quarter = "4th Quarter";
        } else if (quarter === "2h") {
            quarter = "2nd Half";
        } else if (quarter === "f") {
            quarter = "Final";
        }

        return (
            <div>
                <h1>{quarter}</h1>
                <Team name="Upper Dauphin" score={31} color="orange"/>
                <Team name="Millersburg" score={3} color="maroon" />
            </div>
        );
    }
}

export default Match;
