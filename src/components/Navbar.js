import React from "react"

export const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="naming">
                    Github
                </div>
                <ul className="navlinks">
                    <li>
                        <div className="links"><a href="/">Home</a></div>
                    </li>
                    <li>
                        <div className="links"><a href="/about">About</a></div>
                    </li>
                    <li>
                        <div className="links"><a href="/users">Users</a></div>
                    </li>
                    <li>
                        <div className="links"><a href="/help">Help</a></div>
                    </li>
                </ul>
            </div>
        </>
    )
}