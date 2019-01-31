import React, { Component } from 'react';

class FeedsGrid extends Component {
    render() {
        let { title, price, currency, image, url } = this.props.data
        console.log(this.props.data)
        return (
            <div className="feed">
                <div className="entry-image">
                    <img src={image} alt={title} />
                </div>
                <div className="entry-title">
                    <h3>{title}</h3>
                </div>
                <div className="entry-action">
                    <div className="entry-price">
                        {price} {currency}
                    </div>
                    <div className="entry-buy">
                        <a href={url}>Buy Now</a>
                    </div>
                </div>
            </div>
        );
    }
}


export default FeedsGrid