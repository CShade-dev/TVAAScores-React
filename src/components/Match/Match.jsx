import React, { Component } from 'react';
import "./styles.scss";
import Team from "../Team/Team";

class Match extends Component {
    
    state = {
        loading: true,
        game: {
            home: {
                name: "Upper Dauphin",
                score: 31,
                logo: null,
                color: "orange"
            },
            away: {
                name: "Millersburg",
                score: 3,
                logo: null,
                color: "maroon"
            }
        }
    };
    componentDidMount () {

    }
    render() {
        
        var quarter = this.props.quarter;
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
            <div className="matchDiv">
                <div className="quarter">
                    <h1 id="quarterheader">{quarter}</h1>
                </div>
                <div className="teams__match">
                    <Team name={this.state.game.home.name} 
                    score={this.state.game.home.score} 
                    color={this.state.game.home.color} />
                    <Team name={this.state.game.away.name} 
                    score={this.state.game.away.score} 
                    color={this.state.game.away.color} />
                </div>
            </div>
        );
    }
}

export default Match;
