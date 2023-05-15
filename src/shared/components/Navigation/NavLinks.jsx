import React from "react";

import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import './NavLinks.css'

const NavLinks = props => {
    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact={true}>List of Users!</NavLink>
            </li>
            <li>
                <NavLink to="/u1/places" exact={true}>My Places</NavLink>
            </li>
            <li>
                <NavLink to="/places/new" exact={true}>Add Places</NavLink>
            </li>
            <li>
                <NavLink to="/auth" exact={true}>Authenticate</NavLink>
            </li>
        </ul>
    )
}

export default NavLinks