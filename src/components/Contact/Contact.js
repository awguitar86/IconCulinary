import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './contact.css';

export default class Contact extends Component {
    render () {
        return(
            <div className="contact-body">
                <div className="contact-form">
                    <h1>Get In Touch</h1>
                    <p>Please fill out this simple form with any questions or concerns <br/>and we will be in touch with you soon.</p>

                    <input placeholder="Name" className="name-input"></input>
                    <input placeholder="Email" className="email-input"></input>
                    <textarea placeholder="Message" className="message"></textarea>
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