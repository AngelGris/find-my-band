import React from 'react'
import Body from './Body'

import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('<Body />', () => {
    let band = {}
    let wrapper = shallow(<Body band={band} />)

    it('renders without crashing', () => {
        expect(wrapper.length).toBe(1)
    })

    it('renders <Band />', () => {
        expect(wrapper.find('Band').length).toBe(1)
    })

    it('doesn\'t render <Events />', () => {
        expect(wrapper.find('Events').length).toBe(0)
    })

    it('renders band with events', () => {
        band = {
            id: "250",
            name: "Foo Fighters",
            thumb_url: "https://s3.amazonaws.com/bit-photos",
            facebook_page_url: "https://www.facebook.com/foofighters",
            videos: [{}, {}, {}, {}, {}],
            events: [{}, {}, {}, {}, {}]
        }

        wrapper = shallow(<Body band={band} />)
        expect(wrapper.length).toBe(1)
    })

    it('render <Events />', () => {
        expect(wrapper.find('Events').length).toBe(1)
    })
})