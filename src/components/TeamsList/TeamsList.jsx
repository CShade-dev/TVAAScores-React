import React, { Component } from 'react';
import SVG from "react-inlinesvg";
import teams from "../../assets/team.svg";
import "./styles.scss";

class TeamsList extends Component {
    state = {};

    render() {
        return (
            <div className="teamscontainer">
                <div className="teamsheader">
                    <div className="teamicon">
                        <SVG src={teams} />
                    </div>
                    <p className="teamtitle">TEAMS</p>    
                </div>
            </div>
        );
    }
}

export default TeamsList;
