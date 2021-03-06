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
                {
                    //<div className="article__categories">
                   // {this.props.article.categories.map((category, index) => {
                     //   return (<div className="tag is-primart category" key={index}>{category.name}</div>)
                   // })}
                //</div>
                }
                
                <div className="article__information">
                    <h3 className="article__title">{this.props.article.title}</h3>
                    <div className="article__author"><i className="fas fa-user-edit fa-xs"></i> {this.props.article.author}</div>
                </div>
                
                <p className="article__description">
                    {
                        (this.props.article.description.length > 250) ?
                            (this.props.article.description.substring(0, 250) + "...")
                        : (this.props.article.description)
                    }
                </p>
            </article>
        );
    }; /* </render> */
}

export default Article;