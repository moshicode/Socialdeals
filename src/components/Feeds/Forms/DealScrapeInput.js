import React, { Component } from 'react';
import axios from 'axios';
// import DealForm from './Forms/DealForm';

class DealScrapeInput extends Component {
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
    }

    render() {
        return (
            <div className="form">
                <h2>Share a new deal</h2>
                <div className="field">
                    <label>URL</label>
                    <input type="url" name="url" placeholder="https://" value={this.state.url} onChange={this.handleChangeInput} />
                </div>
                <div className="submit" onClick={this.getScrapeData}>Submit</div>
            </div>
        )
    }
}

export default DealScrapeInput