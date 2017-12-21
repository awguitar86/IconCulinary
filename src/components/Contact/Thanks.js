import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './contact.css';

export default class Thanks extends Component {
    render () {
        return(
            <div className="contact-body">
                <div className="contact-form">
                    <h1>Thank You!</h1>
                    <button className="submit-button"><Link to="/contact">Return</Link></button>
                </div>
                <div className="contact-footer-container">
                    <div className="contact-footer-left">
                        <span>Copyright © 2017 Icon Culinary. All Rights Reserved.</span>
                    </div>

                    <div className="contact-footer-right">
                        <span>Website by Simply Wright Design</span>
                    </div>
                </div>
            </div>
        )
    }
}