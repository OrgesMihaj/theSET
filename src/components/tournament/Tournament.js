import React, { Component } from 'react';

import Countdown from '../utils/Countdown';

class Tournament extends Component {

    componentDidMount () {

        // 1. Transform the data into json
        fetch('https://theset.herokuapp.com/api/v1/tournaments')
                .then((response) => response.json()) /* [1] */
                .then((data) => {
                    console.log(data);
                });
    }

    render () {
        
        return (
            <div className="columns is-gapless">
                <div className="column is-half">
                    
                    {/* Promotion section starts here */}
                    <div className="promotion">

                        <div className="promotion__header">
                            <span className="promotion__tag">Programming Competition</span>
                            <h3 className="title">theSET Hello World</h3>
                        </div>
                        
                        <Countdown date={`2019-11-19T18:00:00`} />

                        <p className="promotion__description">
                            You will be given 6 problems and the contest duration will be 2:15 hours. The complexity of the problems will be from all levels, so everyone is welcomed to come, even if you are new to programming, as the main goal is to show everyone how competitive programming works.
                        </p>

                        <div className="promotion__location">
                            <i className="fas fa-map-marker-alt"></i> American University in Bulgaria
                        </div>
                    </div>
                    {/* Promotion section ends here */}

                </div>

                <div className="column is-half">
                    <img className="promotion__image" alt="Tournament" src="img/tournament.jpg" />
                </div>
            </div>
        );
    }; /* </render> */
}

export default Tournament;