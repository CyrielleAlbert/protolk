import { createStore, combineReducers } from "redux"
import { roomsReducer } from "./roomsReducer"

export default createStore(
    combineReducers({
        rooms: roomsReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

