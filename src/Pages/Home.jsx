import React from 'react'
import { Component } from 'react';
import { Provider } from 'react-redux';
import Store from '../Store';
import { ProfileInfo } from '../Components/profile'
import { NavLink } from 'react-router-dom'


class Home extends Component {
    constructor() {
        super()
        localStorage.clear()
        this.profileInfo = Store.getState().profile
    }
    
    render() {
        return (
            <div>
                {this.profileInfo.firstName == "" &&
                    <ProfileInfo />}

                <NavLink to="/Session" style={{ color: "white" }}>Continue to call!</NavLink>
            </div>
        )
    }
}
export default Home;