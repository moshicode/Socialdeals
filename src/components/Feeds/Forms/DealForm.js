import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';


class DealForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.tempScrapeData.name,
            price: props.tempScrapeData.price,
            image: props.tempScrapeData.image,
            url: props.tempScrapeData.url,
            currency: props.tempScrapeData.currency,
            toFeeds: false
        }
    }

    handleChangeInput = (e) => {
        let name = e.target.name
        let value = e.target.value
        this.setState({ [name]: value })
    }

    setRedirect = () => {
        console.log('redirect')
        this.setState({
            toFeeds: true
        })
    }

    addDealDB = async () => {
        await axios.post('http://localhost:3005/api/deals',
            {
                title: this.state.name,
                image: this.state.image,
                price: this.state.price,
                currency: this.state.currency,
                url: this.state.url
            })
    }

    onClickUpdateData = async (e) => {
        await this.addDealDB();
        await this.setRedirect();
    }



    render() {
        if (this.state.toFeeds === true) {
            return <Redirect to='/feeds' />
        }
        return (
            <div className="add-single-deal">
                <div className="deal-image">
                    <img src={this.state.image} alt={this.state.name} className="responsive-img" />
                </div>
                <div className="add-deal-form">
                    <label>
                        <input type="url" placeholder="Product URL..." className="decor-input" name="name" value={this.state.name} onChange={this.handleChangeInput} />
                    </label>
                    <label>
                        <input type="number" className="decor-input" name="price" value={this.state.price} onChange={this.handleChangeInput} />
                    </label>
                    <label>
                        <input type="text" className="decor-input" name="currency" value={this.state.currency} onChange={this.handleChangeInput} />
                    </label>
                    <button className="btn add-btn" onClick={this.onClickUpdateData}>Post New Deal</button>
                </div>
            </div>
        );
    }
}

export default DealForm