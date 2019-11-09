import React, { Component } from 'react';

class Nav extends Component {

    render () {
        return (
            <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">

                    {/* Brand logo */}
                    <a className="navbar-item" href="/">
                        theSET
                    </a>

                    {/* Burger icon visible only on mobiles */}
                    <a role="button" className="navbar-burger burger" href="/"
                    aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                {/* <Navbar-menu starts here> */}
                <div className="navbar-menu">
                    <div className="navbar-end">
                        <li className="navbar-item">
                            <a className="navbar-item-link is-active" href="/">Now</a>
                        </li>

                        <li className="navbar-item">
                            <a href="/" className="navbar-item">Tournaments</a>
                        </li>

                        <li className="navbar-item">
                            <a href="/" className="navbar-item">Articles</a>
                        </li>
                        
                        <li className="navbar-item">
                            <a href="/" className="navbar-item">Who?</a>
                        </li>

                        <li className="navbar-item">
                            <a href="/" className="navbar-item">Login</a>
                        </li>
                    </div>
                </div>
                {/* </Navbar-menu ends here> */}
            </nav>
        );
    }; /* </render> */
}

export default Nav;