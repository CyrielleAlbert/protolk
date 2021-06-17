import React from "react"
import { Header2 } from './../Components/headers/header2.jsx'
import Store from '../Store';
import './Rooms-styles.css'
import { Room } from './../Components/room_small.jsx'
import { NavLink } from "react-router-dom";

class Rooms extends React.Component {
    constructor() {
        super()
        this.profileInfo = Store.getState().profile
        this.rooms = Store.getState().rooms
        console.log(this.rooms)
    }

    render() {
        return (
            <div>
                <Header2 />
                <div className="title-a">Welcome back!</div>
                <div className="content-rooms">
                    <div>
                        All rooms:
                        <NavLink to={{
                            pathname: "/app/rooms/" + "Main",
                        }}>
                            <Room icon="🤙" name="Main" />
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}
export default Rooms;