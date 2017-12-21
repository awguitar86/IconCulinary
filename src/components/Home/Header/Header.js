import React, { Component } from 'react';
import './header.css';
import icon from '../../../images/IconCulinary-KnifeLogoWhite.png';
import { Link } from 'react-router-dom';
import { getUid } from '../../../utilities/uid';

import aquarium from '../../../images/AquariumLogo-white.png'
import reef from '../../../images/ReefCafe.png';
import bistro from '../../../images/Bistro72Logo.png';
import hamburgerMenu from '../../../images/hamburgerMenu.png';
import MagicDropdown from '../../MagicDropdown';
import HamDropdown from '../../HamDropdown';


export default class Header extends Component {
    constructor() {
        super()
    }

    render () {
        return(
            <div className="header-container">
                <div className="logo-container">
                    <Link to='/' className="icon-logo"><img src={icon}/></Link>
                </div>
                <div className="nav-container">
                    <nav className="nav">
                        <Link to='/' className="home">HOME</Link>
                        <MagicDropdown key="dropdown" className="venues" text="VENUES" options={[
                            {img: aquarium, to:'/aquarium'},
                        ]}/>
                        <Link to='/contact' className="contact">CONTACT</Link>
                        <HamDropdown key="dropdown-ham-menu" className="ham-menu" img={hamburgerMenu} options={[
                            {text: "HOME", to:'/'},
                            {img: aquarium, to:'/aquarium'},
                            {text: "CONTACT", to:'/contact'},
                        ]}/>
                    </nav>
                </div>
            </div>
        )
    }
}