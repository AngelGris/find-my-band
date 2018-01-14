import React, { Component } from 'react'
import { Tooltip, OverlayTrigger } from 'react-bootstrap'
import PropTypes from 'prop-types'

class History extends Component {
    constructor(props) {
        super(props)

        this.handleLoadHistory = this.handleLoadHistory.bind(this)
    }

    handleLoadHistory(index) {
        this.props.loadHistory(index)
    }

    renderHistory(band, index) {
        const tooltip = <Tooltip id={'tooltip-' + band.id}>{band.name}</Tooltip>

        return(
            <OverlayTrigger placement="bottom" overlay={tooltip} key={band.id}>
                <div className="history" onClick={() => this.handleLoadHistory(index)}>
                    <img src={band.thumb_url} alt={band.name} />
                </div>
            </OverlayTrigger>
        )
    }

    render() {
        const { history } = this.props

        return (
            <div id="previous-searches" className="col-sm-4 col-md-6">
            {history.length > 0 && history.map((band, index) => this.renderHistory(band, index))}
            </div>
        )
    }
}

History.propTypes = {
    history: PropTypes.array,
    loadHistory: PropTypes.func,
}

History.defaultProps = {
    history: [],
    loadHistory: () => void(0),
}

export default History