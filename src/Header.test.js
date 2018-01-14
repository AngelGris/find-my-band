import React from 'react'
import Header from './Header'

import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('<Header />', () => {
    const performSearch = jest.fn()
    const loadHistory = jest.fn()
    const wrapper = shallow(<Header band={{}} history={[]} performSearch={performSearch} loadHistory={loadHistory} />)

    it('renders without crashing', () => {
        expect(wrapper.length).toBe(1)
    })

    it('renders <Search />', () => {
        expect(wrapper.find('Search').length).toBe(1)
    })

    it('renders <History />', () => {
        expect(wrapper.find('History').length).toBe(1)
    })
})