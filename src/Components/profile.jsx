import { connect,useDispatch } from 'react-redux'

import { profileSelector } from '../Store/profileSelectors'

import { disconnectUser, connectUser, modifyUser } from "../Store/profileActions"
import { useRef } from 'react'


export function ProfileInfo() {
    const firstName = useRef(null)
    const lastName = useRef(null)
    const jobTitle = useRef(null)

    const dispatch = useDispatch()

    const handleSubmit = event => {
        event.preventDefault()
        dispatch(connectUser({ 
            firstName: firstName.current.value, 
            lastName: lastName.current.value, 
            jobTitle: jobTitle.current.value
        }))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    First name:
                <input type="text" placeHolder='First name' ref={firstName} />
                </label>
                <label>
                    Last name:
                <input type="text" placeHolder='Last name' ref={lastName} />
                </label>
                <label>
                    Job title:
                <input type="text" placeHolder='Job Title' ref={jobTitle} />
                </label>
                <button>Connect!</button>
            </form>
        </div>
    )

}
export const ProfileStore = connect(
    (state) => ({
        profile: profileSelector(state)
    }),
    (dispatch) => ({
        connectUser: (userInfo) => dispatch(connectUser(userInfo)),
        disconnectUser: () => dispatch(disconnectUser())
    })
)(ProfileInfo)
