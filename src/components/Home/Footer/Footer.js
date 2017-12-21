import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {
    render () {
        return(
            <div className="footer-container">
                <div className="footer-left">
                    <span>Copyright © 2017 Icon Culinary. All Rights Reserved.</span>
                </div>

                <div className="footer-right">
                    <span>Website by Simply Wright Design</span>
                </div>
            </div>
        )
    }
}