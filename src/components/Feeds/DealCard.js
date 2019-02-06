import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment'
import Moment from 'react-moment';


class DealCard extends Component {
    like = async () => {
        console.log(this.props.data._id)
        console.log(this.props.userAuth.id)
        await axios.post(`http://localhost:3005/api/deals/like/${this.props.data._id}/${this.props.userAuth.id}`)
        this.props.updateFeed()
    }

    render() {
        let { title, price, currency, image, url, likes, username, date } = this.props.data
        return (
            <div className="card fade-in">
                <img src={image} alt={title} />
                <div className="info">
                    <h5 className="title">{title}</h5>
                    <div className="meta-info">
                        <div>Publish By <span className="publish-by">{username}</span></div>
                        <p><Moment fromNow>{date}</Moment></p>
                    </div>
                    {/* <p className="username">{username}, </p> */}
                    <p className="price">{price}<span className="currency">{currency}</span></p>
                    <p className="likes">{likes.length}</p>
                    <button onClick={this.like}>Like</button>
                    <a href={url} target="_blank" rel="noopener noreferrer">Buy Now</a>
                </div>
            </div>
        );
    }
}

export default DealCard