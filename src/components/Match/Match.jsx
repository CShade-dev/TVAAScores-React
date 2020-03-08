import React, { Component } from 'react';
import "./styles.scss";
import Team from "../Team/Team";
import hometeam from  "../../assets/logos/upperdauphin.png";
import awayteam from "../../assets/logos/millersburg.png";

class Match extends Component {
    
    state = {
        loading: true,
        game: {
            home: {
                name: "Upper Dauphin",
                score: 31,
                logo: hometeam,
                color: "orange"
            },
            away: {
                name: "Millersburg",
                score: 3,
                logo: awayteam,
                color: "maroon"
            }
        }
    };
    componentDidMount () {

    }
    render() {

        let quarter = this.props.matchquarter;
        return (
            <div className="matchDiv">
                <div className="quarter">
                    <h1 id="quarterheader">{quarter}</h1>
                </div>
                <div className="teams__match">
                    <Team name={this.state.game.home.name} 
                    score={this.state.game.home.score} 
                    color={this.state.game.home.color}
                    logo={this.state.game.home.logo} />
                    <Team name={this.state.game.away.name} 
                    score={this.state.game.away.score} 
                    color={this.state.game.away.color}
                    logo={this.state.game.away.logo} />
                </div>
            </div>
        );
    }
}

export default Match;
