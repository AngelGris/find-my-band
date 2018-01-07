import React, { Component } from 'react'
import { Modal, Tooltip, OverlayTrigger } from 'react-bootstrap'

import './ModalYoutube.css'

class ModalYoutube extends Component {
    constructor(props) {
        super(props)

        this.state = {
            videoInPlayer: '',
            listingLeft: 0,
            tooltipContainer: this
        }

        this.handleLoadVideo = this.handleLoadVideo.bind(this)
        this.handleScrollLeft = this.handleScrollLeft.bind(this)
        this.handleScrollRight = this.handleScrollRight.bind(this)
        this.renderVideoThumb = this.renderVideoThumb.bind(this)
    }

    componentDidMount() {
        this.setState({
            tooltipContainer: this.refs.modalBody
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            videoInPlayer: 'https://www.youtube.com/embed/' + nextProps.band.videos[0].id.videoId + '?enablejsapi=1&rel=01'
        })
    }

    handleLoadVideo(videoId) {
        this.setState({
            videoInPlayer: 'https://www.youtube.com/embed/' + videoId + '?autoplay=true&enablejsapi=1&rel=0'
        })
    }

    handleScrollLeft() {
        const left = this.state.listingLeft + this.refs.videosWrapper.offsetWidth
        this.setState({
            listingLeft: Math.min(0, left)
        })
    }

    handleScrollRight() {
        const left = this.state.listingLeft - this.refs.videosWrapper.offsetWidth
        this.setState({
            listingLeft: Math.max(-(this.refs.videosListing.offsetWidth - this.refs.videosWrapper.offsetWidth), left)
        })
    }

    renderVideoThumb(video) {
        const tooltip = <Tooltip id={'tooltip-' + video.id.videoId}>{video.snippet.title}</Tooltip>

        return (
            <OverlayTrigger placement="top" overlay={tooltip} key={video.id.videoId} container={this.state.tooltipContainer}>
                <div className="videos-play" onClick={() => this.handleLoadVideo(video.id.videoId)}>
                    <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} style={{width: "120px"}} />
                </div>
            </OverlayTrigger>
        )
    }

    render () {
        const { showModal, band, handleClose } = this.props
        const { listingLeft } = this.state

        if (band.videos.length === 0) {
            return null
        }

        return (
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{band.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body ref="modalBody">
                    <iframe src={this.state.videoInPlayer} frameBorder="0" allowFullScreen title="YouTube player" ></iframe>
                    <div id="videos-wrapper" ref="videosWrapper">
                        <div id="videos-left" onClick={this.handleScrollLeft}><span className="fa fa-angle-left"></span></div>
                        <div id="videos-listing" ref="videosListing" style={{left: listingLeft + 'px', width: (band.videos.length * 130) + "px"}}>
                        {band.videos.map((video) => this.renderVideoThumb(video))}
                        </div>
                        <div id="videos-right" onClick={this.handleScrollRight}><span className="fa fa-angle-right"></span></div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default ModalYoutube