import React from "react"
import {NavLink} from "react-router-dom";


export const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="naming">
                    Github
                </div>
                <ul className="navlinks">
                    <li>
                        <div className="links"><NavLink to="/">Home</NavLink></div>
                    </li>
                    <li>
                        <div className="linksu"><NavLink to="/about">About</NavLink></div>
                    </li>
                    <li>
                        <div className="links"><NavLink to="/users">Users</NavLink></div>
                    </li>
                    <li>
                        <div className="links"><NavLink to="/help">Help</NavLink></div>
                    </li>
                </ul>
            </div>
        </>
    )
}