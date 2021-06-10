import React from 'react'
import { Header1 } from './../Components/headers/header1.jsx'
import Store from '../Store';
import "./Login-styles.css";
import LoginIllustration from "./../assets/login.svg"

class Login extends React.Component {
    constructor() {
        super()
        localStorage.clear()
        this.profileInfo = Store.getState().profile
    }

    render() {
        return (
            <div className="page" style={{ height: window.innerHeight }}>
                <Header1 />
                <div className="content-grid">
                    <div className="left-a">
                        <div className="welcome-a">
                            Welcome on Protolk.
                        </div>
                        <div className="linkedIn-a">
                            <img src="/linkedin/Sign-in-Large---Default.png" className="linkedInImage" />
                        </div>
                        <div className="explanation-a">
                            <p style={{ fontWeight: "bolder" }}>Why do you have to connect?</p>
                            <p>Protolk is a professional network. We believe that using LinkedIn® profiles will deter inappropriate behaviors. </p>
                            <p>In addition to it, to facilitate networking, your LinkedIn® profile will be shared with the professionals you will meet.</p>
                        </div>
                    </div>
                    <div className="login-illus-b">
                        <div>
                            <img src={LoginIllustration} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;