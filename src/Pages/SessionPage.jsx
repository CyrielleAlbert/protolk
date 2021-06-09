import React from 'react'
import { Component } from 'react';
import { Provider } from 'react-redux';
import Store from '../Store';
import { ProfileInfo } from '../Components/profile'
import VideoSession from '../Components/videoSession';

class SessionPage extends Component {
    constructor() {
        super()
        this.profileInfo = Store.getState().profile
    }

    render() {
        return (
            <div>
                {this.profileInfo.firstName != "" &&
                    <div>
                        <VideoSession />
                    </div>}
                {this.profileInfo.firstName == "" &&
                    <div>
                        <VideoSession />
                    </div>}
            </div>
        )
    }
}
export default SessionPage;