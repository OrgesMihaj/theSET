import React, { Component } from 'react';

import Countdown from '../utils/Countdown';
import PromotionImage from '../../assets/images/tournament-promotion-image.jpg';
import TinyPromotionImage from '../../assets/images/tournament-tiny-promotion-image.jpg';

import ImageLoader from '../../atoms/imgLoader';

class Tournament extends Component {

    constructor () {
        super();

        this.state = {
            isLoading: false,
            currentTournament: true
        }
    }

    componentDidMount () {

        // await fetch('https://theset.herokuapp.com/api/v1/articles/1')
        //         .then(response => response.json()) 
        //         .then(data => {
        //             this.setState({ currentTournament: data, isLoading: false });
        //         });
    }

    render () {
        
        return (
            <div className="columns is-gapless">
                <div className="column is-half">
                    
                    {/* Promotion section starts here */}
                    {this.state.isLoading || !this.state.currentTournament ? (
                        <div>Loading...</div>
                    ) : (
                        <div className="promotion">

                            <div className="promotion__header">
                                <span className="promotion__tag">Programming Competition</span>
                                <h3 className="title">theSET: Hello World</h3>
                            </div>
                            
                            <Countdown date={`2020-01-19T18:00:00`} />

                            <p className="promotion__description">
                                You will be given 6 problems and the contest duration will be 2:15 hours. The complexity of the problems will be from all levels, so everyone is welcomed to come, even if you are new to programming, as the main goal is to show everyone how competitive programming works.
                            </p>

                            <div className="promotion__location">
                                <i className="fas fa-map-marker-alt"></i> American University in Bulgaria
                            </div>
                        </div>
                    )}
                    {/* Promotion section ends here */}

                </div>

                <div className="column is-half">   
                    <ImageLoader classNames={['promotion__image']}
                                 alt="Tournament light bulb promotion image." 
                                 image={PromotionImage}
                                 tinyImage={TinyPromotionImage} />
                </div>
            </div>
        );
    }; /* </render> */
}

export default Tournament;