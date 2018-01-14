import React from 'react'
import History from './History'

import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('<History />', () => {
    describe('renders with default props', () => {
        const wrapper = shallow(<History />)
        it('renders without crashing', () => {
            expect(wrapper.length).toBe(1)
        })
    })

    describe('render with history', () => {
        const history = [{ id: 100 }, { id: 102 }, { id: 103 }, { id: 104 }, { id: 105 }]
        const loadHistory = jest.fn()
        const wrapper = shallow(<History history={history} loadHistory={loadHistory} />)

        it('renders without crashing', () => {
            expect(wrapper.length).toBe(1)
        })

        it('click on history component', () => {
            wrapper.find('.history').at(2).simulate('click')
            expect(loadHistory).toBeCalledWith(2)
        })
    })
})