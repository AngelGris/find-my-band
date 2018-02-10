import React from 'react'
import Search from './Search'

import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('<Search />', () => {
    const handleSearch = jest.fn()
    const wrapper = mount(<Search performSearch={handleSearch} />)

    it('renders without crashing', () => {
        expect(wrapper.length).toBe(1)
    })

    describe('new search', () => {
        it('button clicked with empty values', () => {
            wrapper.find('button').simulate('click')
            expect(handleSearch.mock.calls.length).toBe(0)
        })

        it('type search', () => {
            wrapper.ref('query').value = 'a'
            expect(wrapper.ref('query').value).toBe('a')
        })

        it('button clicked with search string', () => {
            wrapper.find('button').simulate('click')
            expect(handleSearch.mock.calls.length).toBe(1)
        })

        it('handle enter key', () => {
            wrapper.ref('query').value = 'aa'
            wrapper.find('input').simulate('keyUp', {
                keyCode: 13,
                which: 13,
                key: 'enter'
            })
            expect(handleSearch.mock.calls.length).toBe(2)
        })
    })
})