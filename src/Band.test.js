import React from 'react'
import Band from './Band'

import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('<Band />', () => {
    let band = {}
    const wrapper = shallow(<Band band={band} />)

    it('renders without crashing', () => {
        expect(wrapper.length).toBe(1)
    })

    it('show band information', () => {
        band = {
            id: "250",
            name: "Foo Fighters",
            thumb_url: "https://s3.amazonaws.com/bit-photos",
            facebook_page_url: "https://www.facebook.com/foofighters",
            videos: [{}, {}, {}, {}, {}]
        }
        const wrapper = shallow(<Band band={band} />)
        expect(wrapper.find('img').length).toBe(1)
        expect(wrapper.find('h2').text()).toBe(band.name)
        expect(wrapper.find({ href: band.facebook_page_url}).length).toBe(1)
        expect(wrapper.find('.fa-youtube').length).toBe(1)
        expect(wrapper.find('ModalYoutube').length).toBe(1)
    })

    it('open ModalYoutube', () => {
        wrapper.instance().handleOpenModalYoutube()
        expect(wrapper.instance().state.showYoutubeModal).toBe(true)
    })

    it('close ModalYoutube', () => {
        wrapper.instance().handleCloseModalYoutube()
        expect(wrapper.instance().state.showYoutubeModal).toBe(false)
    })
})
