import React from 'react'
import App from './App'

import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'
import moxios from 'moxios'

import apis from './Api'

Enzyme.configure({ adapter: new Adapter() })

describe('<App />', () => {
    const wrapper = shallow(<App api={apis} appId="FindMyBand" youtubeApiKey="AIzaSyCTFwOrrws40mGulV5Jwsv__w6Z9NdjozA" />)

    it('renders without crashing', () => {
        expect(wrapper.length).toBe(1)
    })

    it('should have .wrapper class', () => {
        expect(wrapper.is('.wrapper')).toBe(true)
    })

    it('shows Header', () => {
        expect(wrapper.find('Header').length).toBe(1)
    })

    it('shows Body', () => {
        expect(wrapper.find('Body').length).toBe(1)
    })

    it('shows Footer', () => {
        expect(wrapper.find('Footer').length).toBe(1)
    })

    describe('search cicle', () => {
        //const wrapper = mount(<App api={apis} appId="FindMyBand" youtubeApiKey="AIzaSyCTFwOrrws40mGulV5Jwsv__w6Z9NdjozA" />)

        beforeEach(() => {
            moxios.install(apis.api)
        })

        afterEach(() => {
            moxios.uninstall(apis.api)
        })

        it('initial values', () => {
            expect(wrapper.instance().state.band.id).toBe(undefined)
            expect(wrapper.instance().state.history.length).toBe(0)
        })

        /*it('first search', () => {
            wrapper.instance().performSearch('nirvana')

            moxios.stubRequest(/artist/, {
                status: 200,
                response: {
                    id: "182",
                    name: "Nirvana",
                    url: "https://www.bandsintown.com/a/184?came_from=267&app_id=a",
                    image_url: "https://s3.amazonaws.com/bit-photos/large/267414.jpeg",
                    thumb_url: "https://s3.amazonaws.com/bit-photos/thumb/267414.jpeg",
                    facebook_page_url: "https://www.facebook.com/pages/Nervana/409308175799582",
                    mbid: "9282c8b4-ca0b-4c6b-b7e3-4f7762dfc4d6",
                    tracker_count: 3244000,
                    upcoming_event_count: 0
                }
            })

            console.log(wrapper.instance().state.band)
            expect(wrapper.instance().state.band.id).toBe(182)
            expect(wrapper.instance().state.history.length).toBe(0)
        })*/
    })

    describe('history cicle', () => {
        it('initial values', () => {
            expect(wrapper.instance().state.history.length).toBe(0)
        })

        it('insert first band to history', () => {
            wrapper.instance().addBandToHistory({ id: 182 })
            expect(wrapper.instance().state.history.length).toBe(1)
            expect(wrapper.instance().state.history[0].id).toBe(182)
        })

        it('insert second band to history', () => {
            wrapper.instance().addBandToHistory({ id: 183 })
            expect(wrapper.instance().state.history.length).toBe(2)
            expect(wrapper.instance().state.history[0].id).toBe(183)
            expect(wrapper.instance().state.history[1].id).toBe(182)
        })

        it('insert third band to history', () => {
            wrapper.instance().addBandToHistory({ id: 184 })
            expect(wrapper.instance().state.history.length).toBe(3)
            expect(wrapper.instance().state.history[0].id).toBe(184)
            expect(wrapper.instance().state.history[1].id).toBe(183)
            expect(wrapper.instance().state.history[2].id).toBe(182)
        })

        it('insert fourth band to history', () => {
            wrapper.instance().addBandToHistory({ id: 185 })
            expect(wrapper.instance().state.history.length).toBe(4)
            expect(wrapper.instance().state.history[0].id).toBe(185)
            expect(wrapper.instance().state.history[1].id).toBe(184)
            expect(wrapper.instance().state.history[2].id).toBe(183)
            expect(wrapper.instance().state.history[3].id).toBe(182)
        })

        it('insert fifth band to history', () => {
            wrapper.instance().addBandToHistory({ id: 186 })
            expect(wrapper.instance().state.history.length).toBe(5)
            expect(wrapper.instance().state.history[0].id).toBe(186)
            expect(wrapper.instance().state.history[1].id).toBe(185)
            expect(wrapper.instance().state.history[2].id).toBe(184)
            expect(wrapper.instance().state.history[3].id).toBe(183)
            expect(wrapper.instance().state.history[4].id).toBe(182)
        })

        it('check if band is in history', () => {
            expect(wrapper.instance().isBandInHistory({id: 184})).toBe(2)
            expect(wrapper.instance().isBandInHistory({id: 185})).toBe(1)
            expect(wrapper.instance().isBandInHistory({id: 186})).toBe(0)
            expect(wrapper.instance().isBandInHistory({id: 100})).toBe(-1)
        })

        it('insert sixth band to history', () => {
            wrapper.instance().addBandToHistory({ id: 187 })
            expect(wrapper.instance().state.history.length).toBe(5)
            expect(wrapper.instance().state.history[0].id).toBe(187)
            expect(wrapper.instance().state.history[1].id).toBe(186)
            expect(wrapper.instance().state.history[2].id).toBe(185)
            expect(wrapper.instance().state.history[3].id).toBe(184)
            expect(wrapper.instance().state.history[4].id).toBe(183)
        })

        it('insert seventh band to history', () => {
            history = wrapper.instance().addBandToHistory({ id: 188})
            expect(wrapper.instance().state.history.length).toBe(5)
            expect(wrapper.instance().state.history[0].id).toBe(188)
            expect(wrapper.instance().state.history[1].id).toBe(187)
            expect(wrapper.instance().state.history[2].id).toBe(186)
            expect(wrapper.instance().state.history[3].id).toBe(185)
            expect(wrapper.instance().state.history[4].id).toBe(184)
        })

        it('insert repeated band to history', () => {
            history = wrapper.instance().addBandToHistory({ id: 187 })
            expect(wrapper.instance().state.history.length).toBe(5)
            expect(wrapper.instance().state.history[0].id).toBe(188)
            expect(wrapper.instance().state.history[1].id).toBe(187)
            expect(wrapper.instance().state.history[2].id).toBe(186)
            expect(wrapper.instance().state.history[3].id).toBe(185)
            expect(wrapper.instance().state.history[4].id).toBe(184)
        })

        it('load band from history', () => {
            const band = wrapper.instance().state.history[2]
            wrapper.instance().loadHistory(2)
            expect(wrapper.instance().state.band.id).toBe(band.id)
        })
    })
})
