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
        }

        return history
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
        let history = this.state.history
        const band = history[index]

        history = this.addBandToHistory(this.state.band)

        this.setState({
            band: band,
            history: history
        })
    }

    performSearch(query) {
        console.log('inicio')
        this.props.api.searchBand(query, this.props.appId)
            .then(res => {
                // If band found then update history, get events and videos
                console.log('as')
                if (res.data.id !== undefined) {
                    // Update search history
                    if (this.state.band.id !== res.data.id) {
                        let index = this.isBandInHistory(res.data)
                        let history = this.state.history

                        if (index > -1) {
                            history.splice(index, 1)
                        }

                        history = this.addBandToHistory(this.state.band)

                        this.setState({
                            history: history
                        })
                    }

                    res.data.events = []
                    res.data.videos = []
                    console.log('good')
                    this.setState({
                        band: res.data
                    })
                    console.log('band')
                    // Get events for the band
                    this.props.api.searchEvents(query, this.props.appId)
                        .then(res => {
                            let { band } = this.state
                            band.events = res.data
                            this.setState({
                                band: band
                            })
                        })

                    // Get videos for the band
                    this.props.api.searchVideos(res.data.name, this.props.youtubeApiKey)
                        .then(res => {
                            let { band } = this.state
                            band.videos = res.data.items
                            this.setState({
                                band: band
                            })
                        })
                }
                console.log('fin')
            })
    }

    render() {
        return (
            <div className="wrapper">
                <Header
                    band={this.state.band}
                    history={this.state.history}
                    performSearch={(query) => this.performSearch(query)}
                    loadHistory={(index) => this.loadHistory(index)}
                />
                <Body band={this.state.band} />
                <Footer />
            </div>
        )
    }
}

export default App;
