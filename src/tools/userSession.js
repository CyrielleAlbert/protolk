import Peer from 'simple-peer'

export default class UserSession {
    peer = null 
    init = (stream, initiator) => {
        this.peer = new Peer({
            initiator: initiator,
            stream: stream,
            trickle: false,
            reconnectTimer: 1000,
            iceTransportPolicy: 'relay',
            config: {
                iceServers: [
                    { urls: 'stun:stun1.l.google.com:19302'},
                    {
                        urls: "turn:numb.viagenie.ca",
                        username: 'webrtc@live.com',
                        credential: 'muazkh'
                    },
                ]
            }
        })
        return this.peer
    }
    connect = (otherId) => {
        this.peer.signal(otherId)
    }  
} 