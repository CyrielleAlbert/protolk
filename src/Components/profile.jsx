import React from 'react'

var id = 0;
export const ONLINE = "ONLINE"
export const ON_COMMUNICATION = "ON_COMMUNICATION"
export const WAITING = "WAITING"
export const OFFLINE = "OFFLINE"

export const userProfile = 
    {
        "id":++id, 
        "name":"Cyrielle", //Str
        "surname":"Albert", //Str
        "jobTitle":"Software Engineer",
        "lastConnection":"22-05-21", //Date
    }

export function userProfileComponent(userProfile){
    return (
        <div>
            <div>
                Name: {userProfile.name}
            </div>
            <div>
                Surname: {userProfile.surname}
            </div>
            <div>
                Job Title: {userProfile.jobTitle}
            </div>
        </div>
    )
}

