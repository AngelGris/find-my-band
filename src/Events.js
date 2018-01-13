import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Moment from 'moment'

import './Events.css';
import ModalEvent from './ModalEvent'

class Events extends Component {
    constructor(props) {
        super(props)

        this.state = {
            eventInModal: {},
            showEventModal: false
        }

        this.handleOpenModalEvent = this.handleOpenModalEvent.bind(this)
        this.handleCloseModalEvent = this.handleCloseModalEvent.bind(this)
        this.renderEvent = this.renderEvent.bind(this)
    }

    eventLocation(event) {
        let location = event.venue.city + ', '
        if (event.venue.region !== '' && isNaN(event.venue.region)) {
            location += event.venue.region + ', '
        }
        location += event.venue.country

        return location
    }

    handleCloseModalEvent() {
        this.setState({
            showEventModal: false
        })
    }

    handleOpenModalEvent(event) {
        event.tickets = this.ticketsUrl(event.offers)
        event.location = this.eventLocation(event)

        this.setState({
            eventInModal: event,
            showEventModal: true
        })
    }

    renderEvent(event) {
        event.tickets = this.ticketsUrl(event.offers)
        event.location = this.eventLocation(event)

        return (
            <div className="col-md-4 event" key={event.id}>
                <div className="br-bottom mt40 mb0"></div>
                <div className="show-event" onClick={() => this.handleOpenModalEvent(event)}>
                    <div>
                        <h3 className="title-small">
                            {Moment(event.datetime).format('DD-MM-YYYY @ hh:mma')} {event.tickets !== '' && <span className="fa fa-ticket"></span>}
                        </h3>
                        <p>{event.venue.name.toUpperCase()}</p>
                        <p>{event.location}</p>
                    </div>
                </div>
            </div>)
    }

    ticketsUrl(offers) {
        let url = ''

        offers.forEach((offer) => {
            if (offer.type === 'Tickets' && offer.status === 'available') {
                url = offer.url
            }
        })

        return url
    }

    render() {
        const { events } = this.props
        const { eventInModal, showEventModal } = this.state

        return (
            <section className="section-bg section-gray section-large">
                <div className="container">
                    <div className="row col-p30">
                        <div className="col-sm-12 sm-box3">
                            <div className="mb20"></div>
                            <h3 className="title-uppercased large color-main mb30">upcoming events</h3>
                        </div>
                        {events.length === 0 &&
                        <div className="col-sm-12">
                            <div className="br-bottom mt40 mb0"></div>
                            <h3>NO UPCOMING EVENTS</h3>
                        </div>}
                        {events.length > 0 && events.map(this.renderEvent)}
                        <ModalEvent showModal={showEventModal} event={eventInModal} handleClose={this.handleCloseModalEvent} />
                    </div>
                </div>
            </section>
        )
    }
}

Events.propTypes = {
    event: PropTypes.array,
}

Events.defaultProps = {
    event: [],
}

export default Events