import React from 'react'
import PropTypes from 'prop-types'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const EventMap = withScriptjs(withGoogleMap(props =>
            <GoogleMap
                defaultZoom={props.defaultZoom}
                defaultCenter={props.defaultCenter}
            >
            <Marker position={{lat: props.defaultCenter.lat, lng: props.defaultCenter.lng}} />
            </GoogleMap>
        ))

EventMap.propTypes = {
    googleMapURL: PropTypes.string.isRequired,
    loadingElement: PropTypes.element.isRequired,
    containerElement: PropTypes.element.isRequired,
    mapElement: PropTypes.element.isRequired,
    defaultZoom: PropTypes.number,
    defaultCenter: PropTypes.object.isRequired,
}

EventMap.defaultProps = {
    defaultZoom: 8
}

export default EventMap