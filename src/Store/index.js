import { createStore, combineReducers } from "redux"
import {profileReducer} from './profileReducer'
import { roomsReducer } from "./roomsReducer"

export default createStore(
    combineReducers({
        rooms: roomsReducer,
        profile: profileReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

