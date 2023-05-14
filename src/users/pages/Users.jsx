import React from "react";

import UsersList from "../components/UsersList";

/**
 * What we are doing here is we are passing the the props.items to the Userlist, so in the main Users page item, we are calling the Userslist item and passing this in
 * Need to see how we can make use of exceptions to find the case where we cannot find the props.items
 * 
 * @returns 
 */

const Users = () => {
    const USERS = [
        {
            id: 'user1',
            name: 'Akhil',
            image: 'https://i.imgur.com/MXs49wN_d.webp?maxwidth=520&shape=thumb&fidelity=high',
            placeCount: 4
        }
    ];

    return <UsersList items = {USERS}/>
}

export default Users 