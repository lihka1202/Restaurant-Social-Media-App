import React from "react";

import UsersItems from "./UsersItem";

import "./UsersList.css"

/**
 * This usually renders the list of users as such, there are some issues, if the object is empty, nothing really happens, as the array isnt counted to be empty
 * For this, needa write a lambda function to go through all the objects and see if they arae empty or not
 * 
 * @param {*} props 
 * @returns A component to show the list of users
 */
const UsersList = props => {
    if(props.items.length ==0) {
        return (
            <div className="center">
                <h2>No Users in the list</h2>
            </div>
        )
    }

    else {
        return (
            <ul className="users-list">
                {props.items.map(user => {
                    return <UsersItems key={user.id} id={user.id} name={user.name} placeCount={user.placeCount} image={user.image} />
                })}
            </ul>
        )
    }
}

export default UsersList