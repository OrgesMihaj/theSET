import React, { Component } from 'react';

class Nav extends Component {

    render () {
        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                
                {/* Container section starts here */}
                <div className="container-fluid">
                    <div className="navbar-brand">

                        {/* Brand logo */}
                        <a className="navbar-item" href="https://bulma.io">
                            <img src="https://bulma.io/images/bulma-logo.png" alt="theSET" width="112" height="28" />
                        </a>

                        {/* Burger icon visible only on mobiles */}
                        <a role="button" className="navbar-burger burger" href="/"
                        aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>

                    </div>
                </div> 
                {/* Container section ends here */}

            </nav>
        );
    }; /* </render> */
}

export default Nav;