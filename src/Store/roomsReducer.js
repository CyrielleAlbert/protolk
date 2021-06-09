
var id = 1
const initialState = [
    {
        id: 1,
        title: "Main",
        usersConnected: []
    },
]

export const ADD_ROOM = "ADD_ROOM"

export const DELETE_ROOM = "DELETE_ROOM"

export const UPDATE_ROOM = "UPDATE_ROOM"

export function roomsReducer(state = initialState, action) {
    console.log(state)
    switch (action.type) {
        case ADD_ROOM:
            return [...state, { id: ++id, ...action.payload }]

        case UPDATE_ROOM:
            return state.map(room => {
                if (room.id == action.room_id) {
                    console.log({...action.payload})
                    return {...room, ...action.payload}
                } else {
                    return room
                }
            })

        case DELETE_ROOM:
            return state.filter(room => room.id != action.payload)

        default:
            return state
    }
}
