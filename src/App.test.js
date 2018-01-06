import React from 'react'
import App from './App'

import  Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('<App />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<App />)
        expect(wrapper.length).toBe(1)
    })
    it('should have .container class', () => {
        const wrapper = shallow(<App />)
        expect(wrapper.is('.container')).toBe(true)
    })
})
