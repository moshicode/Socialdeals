import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment'
import Moment from 'react-moment';


class DealCard extends Component {
    like = async () => {
        console.log(this.props.data.likes)
        console.log(this.props.userAuth.id)
        await axios.post(`/api/deals/like/${this.props.data._id}/${this.props.userAuth.id}`)
        this.props.updateFeed()
    }

    checkLikes = () => {
        console.log('change')
    }

    render() {
        let { title, price, currency, image, url, likes, username, date } = this.props.data
        if (this.props.userAuth.id) {
            console.log(this.props.userAuth.id)
        }
        console.log(likes)
        return (
            <div className="card fade-in">
                <img src={image} alt={title} />
                <div className="info">
                    <div className="title">
                        <h5 >{title}</h5>
                    </div>
                    <div className="meta-info">
                        <div className="publish">{username}</div>
                        <div className="publish-date"><Moment fromNow>{date}</Moment></div>
                        <div className="likes">{likes.length > 1 ? likes.length + ' Likes' : likes.length + ' Like'}</div>
                        <i className={"fas fa-fire icon"} onClick={this.like}></i>
                    </div>
                    <div className="action">
                        <div className="price">{price}<span className="currency">{currency}</span></div>
                        <div className="buy-now"><a href={url} target="_blank" rel="noopener noreferrer">Buy Now</a></div>
                    </div>

                    {/* <p className="username">{username}, </p> */}
                    {/* <p className="likes">{likes.length}</p>
                    <button onClick={this.like}>Like</button> */}
                </div>
            </div>
        );
    }
}

export default DealCard