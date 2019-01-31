import React, { Component } from 'react';
import InputScraper from './Actions/InputScraper'
import AddNewDeal from './Actions/AddNewDeal'
import axios from 'axios';

class AddNew extends Component {
    constructor() {
        super()
        this.state = {
            url: '',
            tempScrapeData: ''
        }
    }

    getScrapeData = async () => {
        let data = await axios.post('http://localhost:3005/scrape/', { url: this.state.url })
        this.setState({
            tempScrapeData: data.data
        })
    }

    handleChangeInput = (e) => {
        let name = e.target.name
        let value = e.target.value
        this.setState({ [name]: value })
    }

    render() {
        console.log(this.tempScrapeData)
        return (
            < React.Fragment >
                {this.state.tempScrapeData === '' ? <InputScraper /> : <AddNewDeal />}
                {/* <h3>Put the following Url Deal</h3>
            <div className="link-section">
                <label>link
                    <input type="text" name="url" value={this.state.url} onChange={this.handleChangeInput} placeholder="https://" />
                </label>
                <button className="btn add-btn" onClick={this.getScrapeData}>Add New Client</button>
            </div> */}
            </React.Fragment >
        );
    }
}

export default AddNew;