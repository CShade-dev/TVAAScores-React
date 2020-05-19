import React, { Component } from 'react';
import SVG from "react-inlinesvg";
import teams from "../../assets/team.svg";
import "./styles.scss";

class TeamsList extends Component {
    state = {
        listOfTeams: [],
    };
    componentWillMount() {
        fetch("http://localhost:9000/teams", {method: 'GET'})
        .then(result => result.json()
         .then(data => this.setState((state, props) => ({ listOfTeams: data }))))
    }

    render() {
        const teamlist = this.state.listOfTeams;
        const teamdivs = teamlist.map((teamkey, index) => 
        <div key={teamkey.pk} id={teamkey.id} style={{backgroundColor: teamkey.color}}>
            <img src={require(`${teamkey.image}`)} alt={teamkey.name} id={teamkey.id + "img"}/>
        </div>
        )
        return (
            <div className="teamscontainer">
                <div className="teamsheader">
                    <div className="teamicon">
                        <SVG src={teams} />
                    </div>
                    <p className="teamtitle">TEAMS</p>
                </div>
                {teamdivs}
            </div>
        );
    }
}

export default TeamsList;
