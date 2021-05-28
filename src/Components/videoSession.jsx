import React from 'react';
import UserSession from '../tools/userSession';
import io from 'socket.io-client';
import "./styles.css"
import "./animation.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone, faMicrophoneSlash, faVideo, faVideoSlash, faDesktop, faShare } from '@fortawesome/free-solid-svg-icons'
import uuid from 'react-uuid'

//TODO: leave room when peer disconnected
//TODO: handle errors

class VideoSession extends React.Component {
    constructor() {
        super();
        this.userId= uuid()
        this.state = {
            localStream: {},
            remoteStreamUrl: '',
            streamUrl: '',
            initiator: false,
            peer: {},
            full: false,
            connecting: false,
            waiting: true,
            micState: false,
            camState: true,
            ready: false,
            remoteVideo: {}
        };
        this.state.remoteVideo.srcObject = undefined
        this.userInfo = {}
        //TODO: use redux for userInfo
        this.userInfo[this.userId]={
            name:"Cyrielle",
            surname:"Albert",
            jobTitle:"Software engineer"
        }
    }
    userSession = new UserSession();

    componentDidMount() {
        console.log(this.userInfo)
        const socket = io("https://8d258679911a.eu.ngrok.io", {query:{
            userId: this.userId,
            name: this.userInfo[this.userId].name,
            surname: this.userInfo[this.userId].surname,
            jobTitle:this.userInfo[this.userId].jobTitle,
        }});
        const component = this;
        this.setState({ socket });
        this.getUserMedia().then(() => {
            socket.emit('join', { roomId: "test000" }); //TODO: Change roomId
        });

        socket.on('init', () => {
            component.setState({ initiator: true });
        });
        socket.on('ready', () => {
            component.enter("test000");// TODO: Change roomId
        });
        socket.on('desc', data => {
            if (data.type === 'offer' && component.state.initiator) return;
            if (data.type === 'answer' && !component.state.initiator) return;
            console.log("data", data)
            component.call(data);
        });
        socket.on('disconnected', () => {
            component.setState({ initiator: true, ready:false,connecting:false,waiting:true });
        });
        socket.on('full', () => {
            component.setState({ full: true });
        });
    }
    getDisplayStream = async () => {
        return navigator.mediaDevices.getDisplayMedia();
    }

    getUserMedia(cb) {
        return new Promise((resolve, reject) => {
            navigator.getUserMedia = navigator.getUserMedia =
                navigator.getUserMedia ||
                navigator.webkitGetUserMedia ||
                navigator.mozGetUserMedia;
            const op = {
                video: {
                    width: { min: 160, ideal: 640, max: 1280 },
                    height: { min: 120, ideal: 360, max: 720 }
                },
                audio: true
            };
            navigator.getUserMedia(
                op,
                stream => {
                    this.setState({ streamUrl: stream, localStream: stream });
                    this.localVideo.srcObject = stream;
                    resolve();
                },
                () => { }
            );
        });
    }

    setAudioLocal() {
        if (this.state.localStream.getAudioTracks().length > 0) {
            this.state.localStream.getAudioTracks().forEach(track => {
                track.enabled = !track.enabled;
            });
        }
        this.setState({
            micState: !this.state.micState
        })
    }

    setVideoLocal() {
        if (this.state.localStream.getVideoTracks().length > 0) {
            this.state.localStream.getVideoTracks().forEach(track => {
                track.enabled = !track.enabled;
            });
        }
        this.setState({
            camState: !this.state.camState
        })
    }

    getDisplay() {
        this.getDisplayStream().then(stream => {
            stream.oninactive = () => {
                this.state.peer.removeStream(this.state.localStream);
                this.getUserMedia().then(() => {
                    this.state.peer.addStream(this.state.localStream);
                });
            };
            this.setState({ streamUrl: stream, localStream: stream });
            this.localVideo.srcObject = stream;
            this.state.peer.addStream(stream);
        });
    }

    enter = roomId => {
        this.setState({ connecting: true });
        const peer = this.userSession.init(
            this.state.localStream,
            this.state.initiator
        );
        this.setState({ peer });

        peer.on('signal', data => {
            const signal = {
                room: roomId,
                desc: data
            };
            this.state.socket.emit('signal', signal);
        });
        peer.on('stream', stream => {
            this.state.remoteVideo.srcObject = stream;
            this.setState({ connecting: false, waiting: false });
        });
        peer.on('error', err => {
            console.log(err);
            this.setState({ connecting: false, waiting: true });
        });
    };

    call = otherId => {
        this.userSession.connect(otherId);
    };

    renderFull = () => {
        if (this.state.full) {
            return 'The room is full';
        }
    };

    render() {
        return (

            <div >
                <div className="videos">
                    <div>
                        <video
                            className="localVideo"
                            autoPlay
                            id='localVideo'
                            muted
                            ref={video => (this.localVideo = video)}
                        />
                    </div>

                    <div className="remoteVideo">
                        <video
                            autoPlay
                            id='remoteVideo'
                            ref={video => (this.state.remoteVideo = video)}
                        />
                    </div>
                    {this.state.remoteVideo.srcObject == undefined &&
                        <div className="connection-text">
                            <div >
                                {this.state.waiting && !this.state.connecting && <div>Waiting for a peer...</div>}
                                {this.state.connecting && <div>Establishing connection...</div>}
                                <div className="lds-circle"><div></div></div>
                            </div>
                        </div>
                    }
                </div>


                <div className="callActions">
                    <button
                        className="callButtons"
                        onClick={() => {
                            this.getDisplay();
                        }}
                        disabled={!this.state.ready}
                    >
                        <FontAwesomeIcon icon={faDesktop} />
                    </button>


                    <button
                        className="callButtons"
                        onClick={() => {
                            this.setAudioLocal();
                        }}
                    >
                        {
                            this.state.micState ?
                                <FontAwesomeIcon icon={faMicrophone} />
                                :
                                <FontAwesomeIcon icon={faMicrophoneSlash} />

                        }
                    </button>

                    <button
                        className="callButtons"
                        onClick={() => {
                            this.setVideoLocal();
                        }}
                    >
                        {
                            this.state.camState ? (
                                <FontAwesomeIcon icon={faVideo} />
                            ) : (
                                <FontAwesomeIcon icon={faVideoSlash} />
                            )
                        }
                    </button>
                </div>
                { this.renderFull()}
            </div >
        );
    }
}

export default VideoSession;