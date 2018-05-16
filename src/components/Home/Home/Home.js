import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../../../App.css';

import Hero from '../Hero/Hero';
import Companies from '../Companies/Companies';
import Welcome from '../Welcome/Welcome';
import About from '../About/About';

export default class Home extends Component {
    render () {
        return(
            <div className='home-body'>
                <Hero />
                <Companies />
                <Welcome />
                <About />
            </div>
        )
    }
}