import React from "react";
import logo from "../images/react-icon-small.png"

export default function Header(){
    return (
            <nav className="nav">
                <img src={logo} className="nav--logo" alt="react logo" />
                <h3 className="nav--logo-text">ReactFacts</h3>
                <h4 className="nav--title">React Course - Project 1</h4>
            </nav>
    )
}