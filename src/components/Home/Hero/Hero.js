import React, { Component } from 'react';

import './hero.css';

export default class Hero extends Component {
    render () {
        return(
            <div className="hero">
                <div className="layer"></div>
                <h1 className="icon-text">ICON CULINARY</h1>
                <h2 className="icon-subtext">YOUR CATERING TEAM FOR ALL OCCASIONS!</h2>
                
            </div>
        )
    }
}