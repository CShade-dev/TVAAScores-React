import React, { Component } from 'react';
import "./styles.scss";
import live from "../../assets/live.svg"
import SVG from "react-inlinesvg";

class LiveGames extends Component {
    state = {};

    render() {
        return (
            <div className="livegames">
                <div className="liveheader">
                    <div className="liveicon">
                    <SVG src={live} /> 
                    </div>
                    <p id="livegamestext">LIVE GAMES</p>
                </div>
                <div className="games">

                </div>
            </div>
        );
    }
}

export default LiveGames;
