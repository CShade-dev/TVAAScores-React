import React, { Component } from 'react';
import "./styles.scss";

class Team extends Component {
    render() {
        const { color, name, score } = this.props;
        return (
            <div className="team" style={{backgroundColor: color}}>
                <h1 className="teamname">
                    {name}
                </h1>
                <p className="score">
                    {score}
                </p>
            </div>
        );
    }
}

export default Team;
