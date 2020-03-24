import React, { Component } from 'react';
import "./styles.scss";

class Team extends Component {
    render() {
        const { color, name, score, logo, side } = this.props;

        return (
            <div className="teamdiv">
                <div className="teamnamediv">
                    <h1 className="teamname">
                        {name}
                    </h1>
                </div>
                <div className="team" style={{backgroundColor: color}}>
                    <img src={logo} alt={name} className="teamlogo" />
                    <p className="side">
                        {side}
                    </p>
                    <p className="score">
                        {score}
                    </p>
                </div>
            </div>
        );
    }
}

export default Team;
