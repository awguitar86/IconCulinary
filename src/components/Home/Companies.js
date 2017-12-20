import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../CSS/companies.css';
import aquarium from '../../images/AquariumLogo-white-2.png';
import reefcafe from '../../images/ReefCafe.png';
import bistro72 from '../../images/Bistro72Logo.png';

export default class Venues extends Component {
    render () {
        return(
            <div className="companies-container">
                <div className="companies">
                    <Link to='/aquarium'> <img src={aquarium} alt="aquarium logo" className="aquarium-logo"/> </Link>
                    <img src={reefcafe} alt="reef cafe logo" className="reef-cafe-logo"/>
                    <img src={bistro72} ale="bistro72 logo" className="bistro-logo"/>
                </div>
            </div>
        )
    }
}