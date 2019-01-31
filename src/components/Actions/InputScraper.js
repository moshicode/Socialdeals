import React, { Component } from 'react';
import axios from 'axios';

class InputScraper extends Component {
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
        return (
            < React.Fragment >
                <h3>Put the ats Url Deal</h3>
                <div className="link-section">
                    <label>link
                    <input type="text" name="url" value={this.state.url} onChange={this.handleChangeInput} placeholder="https://" />
                    </label>
                    <button className="btn add-btn" onClick={this.getScrapeData}>Add New Client</button>
                </div>
            </React.Fragment >
        )
    }
}

export default InputScraper