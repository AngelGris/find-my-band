const band = (state = {
    band: {},
    error: false,
    history: [],
    isFetching: false
}, action = null) => {
    let { band, error, history } = state

    switch (action.type) {
        case 'LOAD_HISTORY':
            band = state.history[action.index]
            history = addBandToHistory(state.history, state.band)

            return {
                ...state,
                band: band,
                history: history
            }
        case 'PERFORM_SEARCH_ERROR':
            return {
                ...state,
                error: true,
                isFetching: false
            }
        case 'PERFORM_SEARCH_REQUEST':
            return {
                ...state,
                error: false,
                isFetching: true
            }
        case 'PERFORM_SEARCH_SUCCESS':
            if (action.band.name !== undefined) {
                band = action.band
                error = false

                if (state.band.id !== undefined) {
                    // Update search history
                    if (state.band.id !== action.band.id) {
                        let index = isBandInHistory(history, action.band)

                        if (index > -1) {
                            history.splice(index, 1)
                        }

                        history = addBandToHistory(history, state.band)
                    }
                }
            } else {
                error = 'Band "' + action.query + '" not found'
            }

            return {
                ...state,
                band: band,
                error: error,
                history: history,
                isFetching: false
            }
        default:
            return state
    }
}

export default band

function addBandToHistory(history, band) {
    if (band.id !== undefined && isBandInHistory(history, band) === -1) {
        history.unshift(band)
        history = history.slice(0, 5)
    }

    return history
}

function isBandInHistory(history, band) {
    let index = -1

    history.forEach((b, i) => {
        if(b.id === band.id) {
            index = i
        }
    })

    return index
}