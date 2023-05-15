import React from "react";

import MainHeader from "./MainHeader";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import NavLinks from "./NavLinks";

import './MainNavigation.css';


/**
 * Anything that is inbetween the MainHeader props gets passed to MainHeader as props and this allows for greater flexibility
 * @param {*} props 
 * @returns 
 */
const MainNavigation = props => {
    return (
        <MainHeader>
            <button className="main-navigation__menu-btn">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <h1 className="main-navigation__title">
                <Link to="/">Restaurants you Visited!</Link>
            </h1>
            <nav>
                <NavLinks></NavLinks>
            </nav>
        </MainHeader>
    );
}

export default MainNavigation;