import React from 'react'
import ModalEvent from './ModalEvent'

import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('<ModalEvent />', () => {
    const event = {
        id: "20309449",
        artist_id: "315",
        url: "https://www.bandsintown.com/e/20309",
        datetime: "2018-05-04T20:00:00",
        venue: {
            name: "Wells Fargo Center",
            latitude: "39.905201",
            longitude: "-75.173363",
            city: "Philadelphia",
            region: "PA",
            country: "United States"
        },
        offers: [
            {
                type: "Tickets",
                url: "https://www.bandsintown.com/t/20570",
                status: "available"
            }
        ],
        lineup: ["Band"],
        tickets: "https://www.bandsintown.com/t/20309"
    }
    const handleClose = jest.fn()

    describe('renders with no event', () => {
        const wrapper = shallow(<ModalEvent event={{}} handleClose={handleClose} showModal={false} />)

        it('renders without crashing', () => {
            expect(wrapper.length).toBe(1)
        })

        it('renders nothing', () => {
            expect(wrapper.find('Modal').length).toBe(0)
        })
    })

    describe('renders with event', () => {
        const wrapper = shallow(<ModalEvent event={event} handleClose={handleClose} showModal={false} />)

        it('renders withour crashing', () => {
            expect(wrapper.length).toBe(1)
        })

        it('renders Modal', () => {
            expect(wrapper.find('Modal').length).toBe(1)
        })
    })
})