import React, { Component } from 'react';
import '../../CSS/welcome.css';
import foodPlatter from '../../images/food-platters.jpg';
import burger from '../../images/burger.jpg';
import pizza from '../../images/pizza.jpg';
import steakPotatoes from '../../images/steak-potatoes.jpg';
import strawberries from '../../images/strawberries.jpg';

export default class Welcome extends Component {
    render () {
        return(
            <div className="welcome-container">

                <div className="welcome">
                    <h1>WELCOME TO ICON CULINARY!</h1>
                </div>

                <div className="images">
                    <div className="food"> <img src={foodPlatter} alt="food platter"/> </div>
                    <div className="burger"> <img src={burger} alt="burger"/> </div>
                    <div className="pizza"> <img src={pizza} alt="pizza"/> </div>
                    <div className="steak"> <img src={steakPotatoes} alt="steak and potatoes"/> </div>
                    <div className="strawberries"> <img src={strawberries} alt="strawberries"/> </div>
                </div>

                <div className="welcome-para">
                    <p>
                    Tacos put a bird on it synth truffaut intelligentsia asymmetrical williamsburg pour-over 
                    snackwave bicycle rights portland shoreditch glossier. Retro ugh franzen humblebrag YOLO 
                    before they sold out. Tote bag locavore post-ironic venmo art party. Wayfarers meggings 
                    enamel pin occupy prism craft beer. Narwhal tofu hashtag listicle cardigan blog asymmetrical 
                    post-ironic stumptown 3 wolf moon raw denim organic lo-fi put a bird on it.
                    </p>
                </div>
            </div>
        )
    }
}