import React, { Component } from 'react'

//import styles from './styles.css'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            band: {},
            history: []
        }

        this.addBandToHistory = this.addBandToHistory.bind(this)
        this.isBandInHistory = this.isBandInHistory.bind(this)
        this.loadHistory = this.loadHistory.bind(this)
        this.performSearch = this.performSearch.bind(this)
    }

    addBandToHistory(band) {
        let history = this.state.history

        if (band.id !== undefined && this.isBandInHistory(band) === -1) {
            history.unshift(band)
            history = history.slice(0, 5)

            this.setState({
                history: history
            })
        }
    }

    isBandInHistory(band) {
        let index = -1

        this.state.history.forEach((b, i) => {
            if(b.id === band.id) {
                index = i
            }
        })

        return index
    }

    loadHistory(index) {
        const band = this.state.history[index]

        this.addBandToHistory(this.state.band)

        this.setState({
            band: band
        })
    }

    performSearch(query) {
        this.props.api.searchBand(query, this.props.appId, res => {
            // If band found then update history, get events and videos
            if (res.id !== undefined) {
                // Update search history
                if (this.state.band.id !== res.id) {
                    let index = this.isBandInHistory(res)
                    let history = this.state.history

                    if (index > -1) {
                        history.splice(index, 1)
                    }

                    this.addBandToHistory(this.state.band)
                }

                res.events = []
                res.videos = []
                this.setState({
                    band: res
                })
                // Get events for the band
                this.props.api.searchEvents(query, this.props.appId, res => {
                    let { band } = this.state
                    band.events = res
                    this.setState({
                        band: band
                    })
                })

                // Get videos for the band
                this.props.api.searchVideos(res.name, this.props.youtubeApiKey, res => {
                    let { band } = this.state
                    band.videos = res.items
                    this.setState({
                        band: band
                    })
                })
            }
        })
    }

    render() {
        return (
            <div className="wrapper">
                <Header
                    band={this.state.band}
                    history={this.state.history}
                    performSearch={this.performSearch}
                    loadHistory={this.loadHistory}
                />
                <Body band={this.state.band} />
                <Footer />
            </div>
        )
    }
}

export default App;
