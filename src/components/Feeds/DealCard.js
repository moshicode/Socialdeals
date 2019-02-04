import React, { Component } from 'react';

class DealCard extends Component {
    render() {
        let { title, price, currency, image, url } = this.props.data
        return (
            <div className="card fade-in">
                <img src={image} alt={title} />
                <div className="info">
                    <h5 className="title">{title}</h5>
                    <p className="text"></p>
                    <p className="price">{price}<span className="currency">{currency}</span></p>
                    <a href={url} target="_blank" rel="noopener noreferrer">Buy Now</a>
                </div>
            </div>
        );
    }
}

export default DealCard