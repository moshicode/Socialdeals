import React, { Component } from 'react';
import axios from 'axios';
import NewDealForm from './NewDealForm';

class ScrapeInput extends Component {
    constructor() {
        super()
        this.state = {
            url: '',
            tempScrapeData: ''
        }
    }

    handleChangeInput = (e) => {
        let name = e.target.name
        let value = e.target.value
        this.setState({ [name]: value })
    }

    getScrapeData = async () => {
        let data = await axios.post('http://localhost:3005/scrape/', { url: this.state.url })
        this.setState({
            tempScrapeData: data.data
        })
        console.log(this.state)
    }

    render() {
        if (this.state.tempScrapeData === '') {
            return (
                <div className="">
                    <div className="entry-form">
                        <h2>Share a new deal</h2>
                        <label>
                            <input type="url" className="url-input" name="url" value={this.state.url} onChange={this.handleChangeInput} placeholder="https://" />
                        </label>
                        <button className="btn add-btn" onClick={this.getScrapeData}>Next</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="">
                    <NewDealForm tempScrapeData={this.state.tempScrapeData} />
                </div>
                // {this.state.tempScrapeData === '' ? }
                /* {<div className="popup">
                    <h3>Put the ats Url Deal</h3>
                    <div className="link-section">
                        <label>link
                        <input type="text" name="url" value={this.state.url} onChange={this.handleChangeInput} placeholder="https://" />
                        </label>
                        <button className="btn add-btn" onClick={this.getScrapeData}>Add New Client</button>
                    </div>
                </div> }*/
            );
        }
    }
}

export default ScrapeInput