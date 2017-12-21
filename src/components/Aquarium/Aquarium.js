import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import aquarium from '../../images/AquariumLogo-white.png';
import './aquarium.css';
import Footer from '../Home/Footer/Footer';
import Menu from'./iconCulinaryAquaMenu.pdf'

export default class Aquarium extends Component {
    render () {
        return(
            <div className="aqua-body">
                <div className="aqua-hero">
                    <div className="aqua-hero-layer">
                        <img src={aquarium} className="aqua-hero-img"/>
                        <h1>A BEAUTIFUL PLACE FOR YOUR EVENTS!</h1>
                        <button className="aqua-hero-menu-button"><a href={Menu} download="Icon Culinary-Aquarium Menu">CATERING MENU</a></button>
                    </div>
                </div>

                <div className="aqua-about">
                    <h3>Icon Culinary at the Loveland Living Planet Aquarium</h3>
                    
                </div>

                <div className="aqua-footer-container">
                    <div className="aqua-footer-left">
                        <span>Copyright © 2017 Icon Culinary. All Rights Reserved.</span>
                    </div>

                    <div className="aqua-footer-right">
                        <span>Website by Simply Wright Design</span>
                    </div>
                </div>
            </div>
        )
    }
}