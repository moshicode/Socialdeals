import React, { Component } from 'react';
import axios from 'axios';
import DealCard from './Feeds/DealCard'
import Loading from './Loading';
// import ScraperInput from './Forms/ScraperInput'

class Feeds extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            showPopup: false,
            isLoading: true
        }
    }

    async getDeals() {
        return await axios.get("http://localhost:3005/api/deals")
    }

    async componentDidMount() {
        const res = await this.getDeals()
        this.setState({ data: res.data, isLoading: false })
    }

    render() {
        if (this.state.isLoading) { return <Loading /> }
        return (
            <div className="cards-container">
                {/* {this.state.showPopup && <ScraperInput showPopup={this.state.showPopup} />} */}
                {this.state.data.map((d, index) => <DealCard key={index} data={d} />)}
            </div>
        );
    }
}

export default Feeds
