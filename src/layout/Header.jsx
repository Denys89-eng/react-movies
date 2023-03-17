import React from "react";

function Header() {

    return(
        <nav className='purple darken-4'>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">React-Movies</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="">Releases</a></li>
                    <li><a href="">Hits</a></li>
                    <li><a href="">Login</a></li>
                </ul>
            </div>
        </nav>
    )
}

export {Header}