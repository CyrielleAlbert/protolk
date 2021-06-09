
export const SET_USER = "SET_USER"

export const DELETE_USER = "DELETE_USER"

export const UPDATE_USER = "UPDATE_USER"

const initialState = {
    firstName:"",
    lastName:"",
    jobTitle:""
}

export function profileReducer(state = initialState, action) {
    console.log(state)
    switch (action.type) {
        case SET_USER:
            return {...state, ...action.payload }

        case DELETE_USER:
            return {...initialState}

        default:
            return state
    }
}
