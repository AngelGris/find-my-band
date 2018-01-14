import React from 'react'
import Events from './Events'

import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('<Events />', () => {
    const events = [{
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
        },
        {
            id: "20309450",
            artist_id: "315",
            url: "https://www.bandsintown.com/e/20309",
            datetime: "2018-05-04T20:00:00",
            venue: {
                name: "Wells Fargo Center",
                latitude: "39.905201",
                longitude: "-75.173363",
                city: "Philadelphia",
                region: "3",
                country: "United States"
            },
            offers: [
                {
                    type: "Tickets",
                    url: "https://www.bandsintown.com/t/20570",
                    status: "sold out"
                }
            ],
            lineup: ["Band"],
            tickets: "https://www.bandsintown.com/t/20309"
        }
        ]

    describe('render with no evets', () => {
        const wrapper = shallow(<Events events={[]} />)

        it('render without crashing', () => {
            expect(wrapper.length).toBe(1)
        })

        it('render "NO UPCOMING EVENTS" message', () => {
            expect(wrapper.findWhere(n => n.type() === 'h3' && n.text() === 'NO UPCOMING EVENTS').length).toBe(1)
        })
    })

    describe('render with events', () => {
        const wrapper = shallow(<Events events={events} />)

        it('render with events', () => {
            expect(wrapper.length).toBe(1)
        })

        it('render .show-event components', () => {
            expect(wrapper.find('.show-event').length).toBe(events.length)
        })

        describe('ModalEvent functonality', () => {
            it('initial state', () => {
                const state = wrapper.instance().state
                expect(state.eventInModal).toEqual({})
                expect(state.showEventModal).toBe(false)
            })

            it('click first .show-event', () => {
                wrapper.find('.show-event').first().simulate('click')
                const state = wrapper.instance().state
                expect(state.eventInModal).toBe(events[0])
                expect(state.showEventModal).toBe(true)
            })

            it('handleCloseModalEvent function', () => {
                wrapper.instance().handleCloseModalEvent()
                const state = wrapper.instance().state
                expect(state.showEventModal).toBe(false)
            })
        })
    })
})