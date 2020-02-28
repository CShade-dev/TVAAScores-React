import React, { Component } from 'react';
import "./styles.scss";

class Team extends Component {
    state = {
        loading: true,
        game: null,
    };
    componentDidMount (){};
    render() {
        const color = this.state.game.color
        return (
            <div className="team" style={{backgroundColor: color}}>
                <h1>
                    {this.state.game.name}
                </h1>
                <p>{this.state.game.score}</p>
            </div>
        );
    }
}

export default Team;
