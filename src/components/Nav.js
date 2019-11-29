import React, { Component } from 'react';

class Nav extends Component {
    
    constructor (props) {
        super(props);

        this.state = {
            showLogin: false
        }
    }

    // Show/Hide login form
    toggleLogin () {
        this.setState({
            showLogin: !this.state.showLogin
        })
    }

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

            
        );
    }; /* </render> */
}

export default Nav;