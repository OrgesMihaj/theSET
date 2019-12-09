import React, { Component } from 'react';

import ArticleLoader from './../../atoms/articleLoader';
import ImgLoader from './../../atoms/imgLoader';
import PageHeaderTinyImage from './../../assets/images/headers/book-on-the-glass-tiny.jpg';
import PageHeaderImage from './../../assets/images/headers/book-on-the-glass.jpg';

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
                    <ImgLoader classNames={['header__image']} 
                               alt="Christmas lights" 
                               image={PageHeaderImage}
                               tinyImage={PageHeaderTinyImage} />
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
                        <ArticleLoader loaderRepetition={4} />
                    )}
                    {/* Articles list ends here */}

                </div> 
                {/* Articles container ends here */}

            </section>
        );
    }; /* </render> */
}

export default Articles;