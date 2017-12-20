import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Hero from './Hero';
import Companies from './Companies';
import Welcome from './Welcome';
import About from './About';
import Footer from './Footer';

export default class Home extends Component {
    render () {
        return(
            <div>
                <Hero />
                <Companies />
                <Welcome />
                <About /> 
                <Footer />
            </div>
        )
    }
}