import React, { Component } from 'react';

class Articles extends Component {

    constructor () {
        super();

        this.state = {
            isLoading: true,
            isDarkHeader: false,
        }
    }

    render () {
        
        return (
            <section className="articles">
                
                <header className="articles__header">
                    <img className="header__image" alt="Christmas lights" src="img/headers/christmas-lights-header.png" />
                </header>

                <div className="container">
                    <div className="articles__headline">theSET</div>
                </div> {/* </container> */}

            </section>
        );
    }; /* </render> */
}

export default Articles;