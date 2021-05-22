import { UPDATE_ROOM,DELETE_ROOM } from "./roomsReducer"


export function userJoinRoomAction(room, userProfile) {

    return {
        type: UPDATE_ROOM,
        room_id: room.id,
        payload: {
            usersConnected: [...room.usersConnected, userProfile]
        }
    }
}

export function userLeftRoomAction(room, userProfile) {
    return {
        type: UPDATE_ROOM,
        room_id: room.id,
        payload: {
            usersConnected: room.usersConnected.filter(user => user.id !== userProfile.id)
        }
    }
}

export const deleteRoom = (room) => ({
    type: DELETE_ROOM,
    payload: room.id
})