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
            isLoading: true,
            numCards: 8
        }
    }

    async getDeals() {
        return await axios.get("http://localhost:3005/api/deals")
    }

    async componentDidMount() {
        const res = await this.getDeals()
        this.setState({ data: res.data, isLoading: false })
    }

    loadMore = () => {


        this.setState({
            numCards: this.state.numCards + 8
        })
    }

    render() {
        if (this.state.isLoading) { return <Loading /> }
        return (
            <React.Fragment>
                <div className="cards-container">
                    {/* {this.state.showPopup && <ScraperInput showPopup={this.state.showPopup} />} */}
                    {/* {this.state.data.map((d, index) => <DealCard key={index} data={d} />)} */}
                    {this.state.data.slice(0, this.state.numCards).map((cardData, index) => <DealCard key={index} data={cardData} />)}
                </div>
                <div className="pagination">
                    {this.state.numCards < this.state.data.length &&
                        <button onClick={this.loadMore} type="button" className="load-more">Load more</button>
                    }
                </div>
            </React.Fragment>
        );
    }
}

export default Feeds
