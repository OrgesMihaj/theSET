import React, { Component } from 'react';

class Tournament extends Component {

    render () {
        return (
            <section className="promotion">
            
                <div className="columns is-gapless">
                    <div className="column is-half">
                        
                        <div className="promotion__text">
                            <span className="tag is-primary">Programming Competition</span>
                            <h3 className="title">theSET OpenChallenge</h3>
                        </div>

                    </div>

                    <div className="column is-half">
                        <img className="promotion__image" alt="Tournament" src="img/tournament.jpg" />
                    </div>
                </div>
            
            </section>
        );
    }; /* </render> */
}

export default Tournament;