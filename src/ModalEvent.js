import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'react-bootstrap'
import Moment from 'moment'

import './ModalEvent.css'
import EventMap from './EventMap'

class ModalEvent extends Component {
    renderLineUp(band) {
        return <li key={band}>{band}</li>
    }

    render () {
        const { event, showModal, handleClose } = this.props

        if (event.id === undefined) {
            return null
        }

        const defaultCenter = {
            lat: parseFloat(event.venue.latitude),
            lng: parseFloat(event.venue.longitude)
        }

        return (
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{event.venue.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="col-sm-6">
                        <h2>{Moment(event.datetime).format('DD-MM-YYYY @ h:mma')}</h2>
                        <p>{event.location}</p>
                        <ul>{event.lineup.map((band) => this.renderLineUp(band))}</ul>
                    </div>
                    <EventMap
                        googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyAm3KarFLFFjlDCuVDIcixLRhQ-ANyGwAc'
                        loadingElement={<div className="col-sm-6"></div>}
                        containerElement={<div className="col-sm-6 no-padding"></div>}
                        mapElement={<div id="map"></div>}
                        defaultZoom={14}
                        defaultCenter={defaultCenter}
                    />
                </Modal.Body>
                <Modal.Footer>
                    {event.tickets !== '' && <a href={event.tickets} className="btn btn-primary" target="_blank">Buy tickets</a>}
                </Modal.Footer>
            </Modal>
        )
    }
}

ModalEvent.propTypes = {
    event: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired,
    showModal: PropTypes.bool.isRequired,
}

export default ModalEvent