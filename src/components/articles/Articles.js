import React, { Component } from 'react';

import Article from './article';

class Articles extends Component {

    constructor () {
        super();

        this.state = {
            isLoading: true,
            isDarkHeader: false,
            articles: []
        }
    }

    componentDidMount () {
        this.getArticles();
    }

    // Retrieve a list of all articles. 
    async getArticles () {
        return await 
            fetch('https://theset.herokuapp.com/api/v1/articles')
                .then(response => response.json()) 
                .then(responseJson => {
                    this.setState({ articles: responseJson.data, isLoading: false });
                })
                .catch(error => this.setState({ error, isLoading: false }));
    }

    render () {
        
        return (
            <section className="articles">
                
                <header className="articles__header">
                    <img className="header__image" alt="Christmas lights" src="img/headers/christmas-lights-header.png" />
                </header>

                {/* Articles container starts here */}
                <div className="articles__container">
                    <div className="articles__headline">
                        <i className="fas fa-book-reader articles__headline__icon"></i> theSET daily
                    </div>

                    <hr className="divider divider--space-3 
                                   divider--short 
                                   divider--color-primary 
                                   divider--width-3" />
                    
                    {/* Articles list starts here */}
                    {!this.state.isLoading ? (
                        this.state.articles.map((article, index) => {
                            return (
                                <Article key={index} article={article} />
                            )
                        })
                    ) : (
                        <h3>Loading...</h3>
                    )}
                    {/* Articles list ends here */}

                </div> 
                {/* Articles container ends here */}

            </section>
        );
    }; /* </render> */
}

export default Articles;