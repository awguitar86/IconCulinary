import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Hero from '../Hero/Hero';
import Companies from '../Companies/Companies';
import Welcome from '../Welcome/Welcome';
import About from '../About/About';
import Footer from '../Footer/Footer';

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