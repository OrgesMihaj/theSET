import React, { Component } from 'react';

class Article extends Component {

    constructor (props) {
        super(props);

        this.state = {
        }
    }

    componentDidMount () {
    }

    render () {
        
        return (
            <article className="article">
                {this.props.article.categories.map((category, index) => {
                    return (<div key={index}>{category.name}</div>)
                })}

                <h3 className="article__title">{this.props.article.title}</h3>
                                        
                <p className="article__description">
                    {this.props.article.description}
                </p>
            </article>
        );
    }; /* </render> */
}

export default Article;