import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from './Store';
import { RoomStore } from './Components/room'
import adapter from 'webrtc-adapter';
import VideoSession from './Components/videoSession'


class App extends Component {
  constructor() {
    super()
  }


  render() {
    return (
      <div style={{ backgroundColor: "#2E294E", height: window.innerHeight }}>
        <div style={{display:'flex',justifyContent:'center',width:'100%',marginBottom:50}}>
          <img src="/Protolk-logo-name.png" style={{ width: 150, height: "auto" }} />
        </div>
        <Provider store={Store} >
          <div>
            <VideoSession />
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
