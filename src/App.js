import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import router from './router.js';

import Home from './components/Home/Home/Home';
import Aquarium from './components/Aquarium/Aquarium';
import Contact from './components/Contact/Contact';
import Thanks from './components/Contact/Thanks';


import './App.css';
import Header from './components/Home/Header/Header';
import Footer from './components/Home/Footer/Footer';


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

