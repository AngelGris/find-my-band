import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const EventMap = withScriptjs(withGoogleMap(props =>
            <GoogleMap
                defaultZoom={props.defaultZoom}
                defaultCenter={props.defaultCenter}
            >
            <Marker position={{lat: props.defaultCenter.lat, lng: props.defaultCenter.lng}} />
            </GoogleMap>
        ))

export default EventMap