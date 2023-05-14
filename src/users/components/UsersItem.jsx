import React from "react";

import Avatar from "../../shared/components/UIElements/Avatar";

import { Link } from "react-router-dom/cjs/react-router-dom.min";

import Card from "../../shared/components/UIElements/Card";

import "./UsersItem.css"
/**
 * This is basically where the data is passed into the UsersItem component and we pass this to the userslist where all of this is expressed really well.
 * This greatly allows us to understand how the structure of a react program can be further simplified and make sure that we have a proper undestanding
 * of passage via props
 * 
 * We use the Avatar tag instead of the image in order to make sure that the image is better positioned
 * 
 * At the same time, we would be making use of the Link tag instead of the A tag in order to ensure that the router dom can reload the page better befor the
 * page is reloaded and resources are wasted
 * 
 * Making use of `` allows us to inject text using the $() feature
 * 
 * Card allows the usage of rounded corners and some nice DropShadow
 * 
 * 
 * @param {*} props 
 */

const UsersItem = props => {
    return (
        <li className="user-item">
                <Card className="user-item__content">
                    <Link to={`/$(props.id)/places`}>
                        <div className="user-item__image">
                            <Avatar image={props.image} alt={props.name}/>
                        </div>
                        <div className="user-item__info">
                            <h2>{props.name}</h2>
                            <h3>
                                {props.placeCount} {props.placeCount == 1 ? 'Place' : 'Places'}
                            </h3>
                        </div>
                    </Link>
                </Card>
        </li>
    )
}

export default UsersItem