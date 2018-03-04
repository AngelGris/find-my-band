import apis from './Api'

export const loadEvents = (query) => {
    return dispatch => {
        dispatch(loadEventsRequest())
        apis.searchEvents(query, 'FindMyBand', (res) => dispatch(loadEventsSuccess(res)))
            .catch(() => dispatch(loadEventsError()))
    }
}

export const loadEventsError = () => {
    return {
        type: 'LOAD_EVENTS_ERROR'
    }
}

export const loadEventsRequest = () => {
    return {
        type: 'LOAD_EVENTS_REQUEST'
    }
}

export const loadEventsSuccess = (data) => {
    return {
        type: 'LOAD_EVENTS_SUCCESS',
        events: data
    }
}

export const loadHistory = (index) => {
    return {
        type: 'LOAD_HISTORY',
        index: index
    }
}

export const loadVideos = (query) => {
    return dispatch => {
        //dispatch(loadVideosRequest())
        apis.searchVideos(query, 'AIzaSyCTFwOrrws40mGulV5Jwsv__w6Z9NdjozA', (res) => dispatch(loadVideosSuccess(res.items)))
            .catch(() => dispatch(loadVideosError()))
    }
}

export const loadVideosError = () => {
    return {
        type: 'LOAD_VIDEOS_ERROR'
    }
}

export const loadVideosRequest = () => {
    return {
        type: 'LOAD_VIDEOS_REQUEST'
    }
}

export const loadVideosSuccess = (data) => {
    return {
        type: 'LOAD_VIDEOS_SUCCESS',
        videos: data
    }
}

export const performSearch = (query) => {
    return dispatch => {
        dispatch(performSearchRequest())
        apis.searchBand(query, 'FindMyBand', (res) => dispatch(performSearchSuccess(query, res)))
            .catch(() => dispatch(performSearchError()))
    }
}

export const performSearchError = () => {
    return {
        type: 'PERFORM_SEARCH_ERROR'
    }
}

export const performSearchRequest = () => {
    return {
        type: 'PERFORM_SEARCH_REQUEST'
    }
}

export const performSearchSuccess = (query, data) => {
    return {
        type: 'PERFORM_SEARCH_SUCCESS',
        band: data,
        query: query
    }
}

export const updateHistory = (band) => {
    return {
        type: 'UPDATE_HISTORY',
        band: band
    }
}