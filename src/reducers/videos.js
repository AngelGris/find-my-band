const videos = (state = {
    error: false,
    isFetching: false,
    videos: []
}, action = null) => {
    switch (action.type) {
        case 'LOAD_VIDEOS_ERROR':
            return {
                ...state,
                error: true,
                isFetching: false,
                videos: []
            }
        case 'LOAD_VIDEOS_REQUEST':
            return {
                ...state,
                error: false,
                isFetching: true,
                videos: []
            }
        case 'LOAD_VIDEOS_SUCCESS':
            return {
                ...state,
                error: false,
                isFetching: false,
                videos: action.videos
            }
        default:
            return state
    }
}

export default videos