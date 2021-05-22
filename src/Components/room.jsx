import React from 'react'
import { connect } from 'react-redux'

import { roomsSelector } from '../Store/roomsSelectors'

import { userProfile,WAITING,ONLINE,ON_COMMUNICATION,OFFLINE } from "../Components/profile"
import { userJoinRoomAction, userLeftRoomAction } from '../Store/roomsActions'

var userInfo = {
    ...userProfile, 
    userSession: {
        ipAddress:"192.168.1.22",
        status:OFFLINE,
        room:undefined
    }
}

function connectUser(roomTitle){
    userInfo["userSession"]={...userInfo.userSession,status:ONLINE,room:roomTitle}
}
function disconnectUser(){
    userInfo["userSession"]={...userInfo.userSession,status:OFFLINE,room:undefined}

}

export function RoomItem({ room, userLeftRoomAction, userJoinRoomAction }) {
    return (
        <div>
            <div>Room {room.title}</div>
            <button onClick={() => { 
                connectUser(room.title)
                userJoinRoomAction(room, userInfo) }} 
                disabled={userInfo.userSession.room!==undefined}>Join</button>
            <button onClick={() => { 
                disconnectUser()
                userLeftRoomAction(room, userInfo) }}
                disabled={userInfo.userSession.room !== room.title}>Leave</button>
        </div>
    )
}
export function RoomsList({ rooms, userLeftRoomAction, userJoinRoomAction }) {

    return (
        <div>
            {rooms.map(room => <RoomItem room={room} userLeftRoomAction={userLeftRoomAction} userJoinRoomAction={userJoinRoomAction} key={room.id} />)}
        </div>
    )

}
export const RoomStore = connect(
    (state) => ({
        rooms: roomsSelector(state)
    }),
    (dispatch) => ({
        userJoinRoomAction: (room, userProfile) => dispatch(userJoinRoomAction(room, userProfile)),
        userLeftRoomAction: (room, userProfile) => dispatch(userLeftRoomAction(room, userProfile))
    })
)(RoomsList)