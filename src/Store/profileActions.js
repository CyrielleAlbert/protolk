import { DELETE_USER, SET_USER, UPDATE_USER } from "./profileReducer";

export function connectUser(userInfo) {
    return {
        type: SET_USER,
        payload: {
            ...userInfo
        }
    }
}

export function disconnectUser(){
    return {
        type: DELETE_USER,
        payload:{}
    }
}

export function modifyUser(userInfo){
    return {
        type:UPDATE_USER,
        payload: {...userInfo}
    }
}