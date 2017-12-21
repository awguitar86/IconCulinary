import React, { Component } from 'react';
import './about.css';
import salmon from '../../../images/salmon.jpg';
import foodPlatters from '../../../images/food-platters.jpg';

export default class About extends Component {
    render () {
        return(
            <div className="about-container">

                <div className="about">
                    <h1>ABOUT US</h1>
                    <p>
                    Dreamcatcher succulents fanny pack forage locavore taiyaki. Dreamcatcher hashtag vaporware copper mug 
                    raclette. Hella kitsch kickstarter, tofu sustainable letterpress poutine gentrify adaptogen actually 
                    butcher mixtape. Small batch actually af chillwave tumblr affogato synth poutine viral lyft church-key 
                    cloud bread swag. Pop-up VHS migas raw denim, kale chips iceland asymmetrical bicycle rights deep v synth. 
                    Bushwick roof party thundercats shaman truffaut bespoke schlitz plaid forage seitan vape marfa 90's banh mi.
                    Lo-fi pour-over brooklyn venmo disrupt poutine, gluten-free bushwick listicle thundercats iceland blog 
                    gastropub tousled craft beer. Affogato 90's semiotics small batch gochujang migas taxidermy adaptogen 
                    dreamcatcher tousled. Sartorial beard aesthetic bushwick enamel pin shaman wayfarers listicle tumblr +1 wolf. 
                    </p>
                </div>

                <div className="about-img">
                    <img src={salmon} alt="Salmon" className="salmon"/>
                </div>

                <div className="about-img-two">
                    <img src={foodPlatters} alt="Food Platter" className="food-platter"/>
                </div>
                
            </div>
        )
    }
}