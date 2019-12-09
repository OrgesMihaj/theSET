import React, { Component } from 'react';

class ArticleLoader extends Component {

    constructor (props) {
        super(props);

        this.state = {
        }
    }

    componentDidMount () {
        console.log(this.props.loaderRepetition);
    }

    render () {
            
        return (
            <div className="o-article-loader">
                <div className="o-article-loader__title"></div>
                <div className="o-article-loader__content"></div>
                
                <div className="o-article-loader__content"></div>
                <div className="o-article-loader__content"></div>
            </div>
        );
    
    }; /* </render> */
}

export default ArticleLoader;