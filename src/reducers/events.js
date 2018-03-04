const events = (state = {
    error: false,
    events: [],
    isFetching: false
}, action = null) => {
    switch (action.type) {
        case 'LOAD_EVENTS_ERROR':
            return {
                ...state,
                error: true,
                events: [],
                isFetching: false
            }
        case 'LOAD_EVENTS_REQUEST':
            return {
                ...state,
                error: false,
                events: [],
                isFetching: true
            }
        case 'LOAD_EVENTS_SUCCESS':
            return {
                ...state,
                error: false,
                events: action.events,
                isFetching: false
            }
        default:
            return state
    }
}

export default events