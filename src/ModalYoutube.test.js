import React from 'react'
import ModalYoutube from './ModalYoutube'

import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('<ModalYoutube />', () => {
    const band = {
        id: 1,
        name: 'Test band',
        videos: [
            {
                id: {
                    videoId: 'asdfg1',
                },
                snippet: {
                    title: 'test video 1',
                    thumbnails: {
                        default: {
                            url: 'http://something.com'
                        }
                    }
                }
            },
            {
                id: {
                    videoId: 'asdfg2',
                },
                snippet: {
                    title: 'test video 2',
                    thumbnails: {
                        default: {
                            url: 'http://something.com'
                        }
                    }
                }
            },
            {
                id: {
                    videoId: 'asdfg3',
                },
                snippet: {
                    title: 'test video 3',
                    thumbnails: {
                        default: {
                            url: 'http://something.com'
                        }
                    }
                }
            },
        ]
    }
    const handleClose = jest.fn()

    describe('renders with no videos', () => {
        const wrapper = shallow(<ModalYoutube band={{ videos : [] }} handleClose={handleClose} showModal={false} />)

        it('renders without crashing', () => {
            expect(wrapper.length).toBe(1)
        })

        it('doesn\'t render Modal', () => {
            expect(wrapper.find('Modal').length).toBe(0)
        })
    })

    describe('render with videos', () => {
        const wrapper = shallow(<ModalYoutube band={band} handleClose={handleClose} showModal={false} />)

        it('renders without crushing', () => {
            expect(wrapper.length).toBe(1)
        })

        it('renders Modal', () => {
            expect(wrapper.find('Modal').length).toBe(1)
        })

        it('renders all thumbnails', () => {
            expect(wrapper.find('.videos-play').length).toBe(band.videos.length)
        })

        it('loads new video', () => {
            wrapper.find('.videos-play').at(2).simulate('click')
            expect(wrapper.instance().state.videoInPlayer).toBe('https://www.youtube.com/embed/' + band.videos[2].id.videoId + '?autoplay=true&enablejsapi=1&rel=0')
        })
    })
})