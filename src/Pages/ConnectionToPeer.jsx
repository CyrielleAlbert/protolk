import React from 'react'
import "./../Components/animation.css"
import { Header2 } from "./../Components/headers/header2"

//TODO: Implement logic (WEBRTC connection init)

class ConnectionToPeer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            room_id: ""
        }
    }
    componentDidMount() {
        this.setState({ room_id: this.props.match.params.room_id })
    }
    render() {
        return (
            <div style={{ backgroundColor: "#2E294E",height:window.innerHeight }}>
                <Header2 />
                <div style={{
                    fontFamily: 'Poppins',
                    fontSize: '2rem',
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    marginTop:200,
                }}>
                    <div className="lds-circle"><div></div></div>
                    <div>
                        Connecting to a peer from {this.state.room_id}
                    </div>
                </div>
            </div>
        );
    }
}

export default ConnectionToPeer;