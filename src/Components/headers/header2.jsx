import "./style.css"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
export function Header2() {
    return (
        <div className="header2" >
            <div className="logo-left">
                <img src="/Protolk-logo-name.png" className="logo" />
            </div>
            <div className="rooms">
                Rooms
            </div>
            <div className="network">
                My Network
            </div>
            <div className="profile">
                My profile
                <FontAwesomeIcon icon={faUserCircle} style={{margin:10,fontSize:24}} />
            </div>
        </div>
    )
}

