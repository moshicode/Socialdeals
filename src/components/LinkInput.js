import React, { Component } from 'react';
import axios from 'axios';

class LinkInput extends Component {
    constructor() {
        super()
        this.state = {
            url: '',
            tempScrapeData: ''
        }
    }


    // getScrapeData = async () => {
    //     console.log('its working')
    // }


    // onSend = async () => {
    //     if (this.state._id && this.state.emailType) {
    //         await axios.put('http://localhost:8000/updateclient/' + this.state._id,
    //             {
    //                 emailType: this.state.emailType
    //             })
    //     }
    // }

    getScrapeData = async () => {
        let data = await axios.post('http://localhost:3005/scrape/', { url: this.state.url })
        this.setState({
            tempScrapeData: data.data
        })
        console.log(this.state.tempScrapeData)
    }

    handleChangeInput = (e) => {
        let name = e.target.name
        let value = e.target.value
        this.setState({ [name]: value })
    }

    render() {
        console.log(this.tempScrapeData)
        return (
            <React.Fragment>
                <h3>Put the following Url Deal</h3>
                <div className="link-section">
                    <label>link
                    <input type="text" name="url" value={this.state.url} onChange={this.handleChangeInput} placeholder="https://" />
                    </label>
                    <button className="btn add-btn" onClick={this.getScrapeData}>Add New Client</button>
                </div>
            </React.Fragment>
        );
    }
}

export default LinkInput;