import React, { Component } from 'react'

import './Band.css'
import ModalYoutube from './ModalYoutube'

class Band extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showYoutubeModal: false,
        }

        this.handleOpenModalYoutube = this.handleOpenModalYoutube.bind(this)
        this.handleCloseModalYoutube = this.handleCloseModalYoutube.bind(this)
    }

    handleOpenModalYoutube() {
        this.setState({
            showYoutubeModal: true,
        })
    }

    handleCloseModalYoutube() {
        this.setState({
            showYoutubeModal: false,
        })
    }

    render() {
        const { band } = this.props
        const { showYoutubeModal } = this.state

        if (band.id === undefined) {
            return (
                <div className="col-sm-12 text-center">
                    <h3 className="title-slider small uppercased mb20 color-main">follow your favorite artists around the globe</h3>,
                    <h2 className="title-slider large uppercased mb40 word-wrap">search your fav artists<br />go to their next show</h2>
                </div>
            )
        }

        return (
            <div className="col-sm-12 text-center">
                <img className="imgBand" src={band.thumb_url} alt={band.name} />
                <h2 className="title-slider large uppercased mb40 word-wrap">{band.name}</h2>
                <h3>
                    {band.facebook_page_url !== '' && <a href={band.facebook_page_url} target="_blank"><span className="fa fa-facebook-square social-network"></span></a>}
                    {band.videos.length > 0 && <span className="fa fa-youtube social-network" onClick={this.handleOpenModalYoutube}></span>}
                </h3>
                {band.videos.length > 0 && <ModalYoutube showModal={showYoutubeModal} band={band} handleClose={this.handleCloseModalYoutube} />}
            </div>
        )
    }
}

export default Band