import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import router from './router.js';

import Home from './components/Home/Home';
import Aquarium from './components/Aquarium/Aquarium.js';
import Contact from './components/Contact/Contact.js';
import Thanks from './components/Contact/Thanks.js';


import './App.css';
import Header from './components/Home/Header';
import Footer from './components/Home/Footer';


export default class App extends Component {
  render() {
    return (
      <div className="body">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/aquarium" component={Aquarium} />
        <Route path="/contact" component={Contact} />
        <Route path="/thanks" component={Thanks} />
      </div>
    );
  }
}

