import React, { Component } from 'react';
import './header.css';
import icon from '../../../images/IconCulinary-KnifeLogoWhite.png';
import { Link } from 'react-router-dom';
import { getUid } from '../../../utilities/uid';

import aquarium from '../../../images/AquariumLogo-white.png'
import reef from '../../../images/ReefCafe.png';
import bistro from '../../../images/Bistro72Logo.png';
import hamburgerMenu from '../../../images/hamburgerMenu.png';
import HamDropdown from '../../HamDropdown';
import facebook from '../../../images/FacebookLogo.svg';
import instagram from '../../../images/InstagramLogo.svg';


export default class Header extends Component {
    constructor() {
        super()
    }

    render () {
        return(
            <div className="header-container">
                <div className='fillin-div'>
                    <div className='header-social'>
                        <img src={facebook} alt='facebook logo'/>
                        <img src={instagram} alt='instagram logo'/>
                    </div>
                </div>
                <div className="logo-container">
                    <Link to='/' className="icon-logo"><img src={icon} alt='icon culinary logo'/></Link>
                </div>
                <div className="nav-container">
                    <nav className="nav">
                        <Link to='/' className="home">HOME</Link>
                        <Link to='/menu' className="home">MENU</Link>
                        <Link to='/contact' className="contact">CONTACT</Link>
                    </nav>
                </div>
            </div>
        )
    }
}