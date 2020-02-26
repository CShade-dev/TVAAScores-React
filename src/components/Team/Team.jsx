import React, { Component } from 'react';
import "./styles.scss";

class Team extends Component {
    state = {};
    render() {
        const color = this.props.color
        return (
            <div style={{backgroundColor: color}}>
                <h1>
                    {this.props.name}
                </h1>
                <p>{this.props.score}</p>
            </div>
        );
    }
}

export default Team;
