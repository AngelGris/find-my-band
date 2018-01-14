import React from 'react'
import EventMap, { EventMapWithoutDOMInstances } from './EventMap'

import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('<EventMap />', () => {
    const defaultCenter = {lat: -23.258, lng: 122.05}
    const defaultZoom = 14
    const wrapper = shallow(<EventMapWithoutDOMInstances
                        defaultZoom={defaultZoom}
                        defaultCenter={defaultCenter}
                    />)

    it('renders without crashing', () => {
        expect(wrapper.length).toBe(1)
    })

    it('renders GoogleMap', () => {
        expect(wrapper.find('GoogleMap').length).toBe(1)
    })

    it('GoogleMap props', () => {
        const props = wrapper.find('GoogleMap').props()
        expect(props.defaultCenter).toBe(defaultCenter)
        expect(props.defaultZoom).toBe(defaultZoom)
    })

    it('renders Marker', () => {
        expect(wrapper.find('Marker'). length).toBe(1)
    })

    it('Marker props', () => {
        const props = wrapper.find('Marker').props()
        expect(props.position).toBe(defaultCenter)
    })

    it('renders with DOM instances', () => {
        const wrapper = shallow(<EventMap
            googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyAm3KarFLFFjlDCuVDIcixLRhQ-ANyGwAc'
            loadingElement={<div className="col-sm-6"></div>}
            containerElement={<div className="col-sm-6 no-padding"></div>}
            mapElement={<div id="map"></div>}
            defaultZoom={defaultZoom}
            defaultCenter={defaultCenter}
        />)
        expect(wrapper.length).toBe(1)
    })
})