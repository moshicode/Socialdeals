import React, { Component } from 'react';
import axios from 'axios';
import DealForm from './Forms/DealForm';
import Loading from '../Loading';
import DealScrapeInput from './Forms/DealScrapeInput'

class AddNewDeal extends Component {
    constructor() {
        super()
        this.state = {
            url: '',
            tempScrapeData: '',
            isLoading: true
        }
    }

    handleChangeInput = (e) => {
        let name = e.target.name
        let value = e.target.value
        this.setState({ [name]: value })
    }

    getScrapeData = async () => {
        let data = await axios.post('/api/scrape/', { url: this.state.url })
        this.setState({
            tempScrapeData: data.data,
            isLoading: false
        })
    }

    render() {
        if (this.state.tempScrapeData === '') {
            return (
                <div className="add-form">
                    <h1>Share a new deal</h1>
                    <form>
                        <div className="field">
                            <label>URL</label>
                            <input type="url" name="url" placeholder="https://" value={this.state.url} onChange={this.handleChangeInput} required />
                        </div>
                        <div className="action-btn" onClick={this.getScrapeData}>Submit</div>
                    </form>
                </div>
            )
        } else {
            if (this.state.isLoading) { return <Loading /> }
            return (
                <div className="form">
                    <DealForm tempScrapeData={this.state.tempScrapeData} userAuth={this.props.userAuth} />
                </div>
            );
        }
    }
}

export default AddNewDeal