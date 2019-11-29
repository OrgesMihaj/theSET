import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Nav extends Component {
    
    constructor (props) {
        super(props);

        this.state = {
            showLogin: false,
            showNavMobile: false,
        }
    }

    // Show/Hide login form
    toggleLogin () {
        this.setState({
            showLogin: !this.state.showLogin
        })
    }

    // Show/Hide navigation on mobile devices 
    toggleNavMobile = (event) => {
        event.preventDefault();

        this.setState({
            showNavMobile: !this.state.showNavMobile
        })
    }

    render () {
        return (
            
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">

                    {/* Brand logo */}
                    <a className="navbar-item" href="/">
                        theSET
                    </a>

                    {/* Burger icon visible only on mobiles */}
                    <a onClick={this.toggleNavMobile} role="button" className="navbar-burger burger" href="/"
                       aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>


                {/* <Navbar-menu starts here> */}
                <div className={(this.state.showNavMobile) ? "navbar-menu is-active" : "navbar-menu"}>
                    <div className="navbar-end">
                    
                        <li className="navbar-item">
                            <Link className="navbar-item-link is-active" to='/now'>Now</Link>
                        </li>
                         
                        <li className="navbar-item">
                            <a href="/" className="navbar-item">Tournaments</a>
                        </li>

                        <li className="navbar-item">
                            <a href="/" className="navbar-item">Articles</a>
                        </li>
                        
                        <li className="navbar-item">
                            <Link className="navbar-item" to='/about'>Who?</Link>
                        </li>

                        <li className="navbar-item">
                            <a href="/" className="navbar-item" onClick={this.toggleLogin.bind(this)} ref="login">Login</a>
                        </li>
                    </div>
                </div>
                {/* </Navbar-menu ends here> */}

                <div className={this.state.showLogin ? 'modal is-active' : 'modal'}>
                    <div className="modal-background" onClick={this.toggleLogin.bind(this)}></div>

                    <div className="modal-content">
                        <p className="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="" />
                        </p>
                    </div>

                    <button className="modal-close is-large" onClick={this.toggleLogin.bind(this)} aria-label="close"></button>
                </div>
                
            </nav>
            
        ); /* </return> */
    }; /* </render> */
}

export default Nav;