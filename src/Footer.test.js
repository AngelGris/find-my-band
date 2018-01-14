import React from 'react'
import Footer from './Footer'

import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('<Footer />', () => {
    const wrapper = shallow(<Footer />)

    it('renders without crashing', () => {
        expect(wrapper.length).toBe(1)
    })
})