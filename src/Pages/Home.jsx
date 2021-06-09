import React from 'react'
import { Component } from 'react';
import { Provider } from 'react-redux';
import Store from '../Store';
import { ProfileInfo } from '../Components/profile'
import { NavLink } from 'react-router-dom'
import { Header1 } from '../Components/headers/header1';
import "./Home-styles.css"
import ConnectionImage from "./../assets/connection.svg"
//TODO: Add navlink on button press
class Home extends Component {
    constructor() {
        super()
        localStorage.clear()
        this.profileInfo = Store.getState().profile
    }

    render() {
        return (
            <div>
                <Header1 />
                <div className="hello">
                    <div className="text-a">
                        <div className="title-a">
                            Where professional networking has no border.
                        </div>
                        <div className="presentation-a">
                            <p>Networking offers so many opportunities but we all know it can be time-consuming.</p>
                            <p>With Protolk you will be able to meet other professionals from all around the world without fearing long and boring meetings.</p>
                            <p>Protolk is an online speed meeting application. It is a safe place to extend our professional network.</p>
                        </div>

                    </div>
                    <div className="button-cta">
                        <button className="button">
                            Start networking
                        </button>
                    </div>
                    <div className="connection-illus-b">
                        <img src={ConnectionImage} className="SVGimg" />
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;