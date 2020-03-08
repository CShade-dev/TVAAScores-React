import React, { Component } from 'react';
import "./styles.scss";
import live from "../../assets/live.svg"
import SVG from "react-inlinesvg";
import Match from '../Match/Match';
import quarters from '../quarters';

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
                    <Match matchquarter={quarters.QUARTER_ONE} />
                    <Match matchquarter={quarters.QUARTER_ONE} />
                    <Match matchquarter={quarters.QUARTER_ONE} />
                    <Match matchquarter={quarters.QUARTER_ONE} />
                    <Match matchquarter={quarters.QUARTER_ONE} />
                    <Match matchquarter={quarters.QUARTER_ONE} />
                    <Match matchquarter={quarters.QUARTER_ONE} />
                </div>
            </div>
        );
    }
}

export default LiveGames;
