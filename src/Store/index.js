import { createStore, combineReducers } from "redux"
import { loadState, saveState } from "../tools/loadState"
import {profileReducer} from './profileReducer'
import { roomsReducer } from "./roomsReducer"

const preloadedState = loadState()

const Store = createStore(
    combineReducers({
        rooms: roomsReducer,
        profile: profileReducer,
    }),
    preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

Store.subscribe(()=>{
    saveState({
        profile: Store.getState().profile
      });
})

export default Store;