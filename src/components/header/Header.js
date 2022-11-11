// Header.js
import React from 'react';
import { Link } from 'react-scroll'; // react-scroll is a library for scrolling in React

import "./header.css"

const Header = () => {
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }

    }

    return (
        <header>
            <div className="topnav" id="myTopnav">
                <a href="#home" className="active">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <a href="javascript:void(0);" className="icon" onClick={() => myFunction()}>
                    <i className="fa fa-bars">i</i>
                </a>
            </div>
        </header>
    )
}

export default Header;