import React, { Component } from 'react'
import { Tooltip, OverlayTrigger } from 'react-bootstrap'

import './Header.css'

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            lastSearch: ''
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleEnter = this.handleEnter.bind(this)
        this.handleLoadHistory = this.handleLoadHistory.bind(this)
    }

    handleClick() {
        if (this.refs.query.value !== this.state.lastSearch) {
            this.setState = {
                lastSearch: this.refs.query.value
            }

            this.props.performSearch(this.refs.query.value)
        }
    }

    handleEnter(key) {
        if (key.keyCode === 13) {
            this.handleClick()
        }
    }

    handleLoadHistory(index) {
        this.props.loadHistory(index)
    }

    renderHistory(band, index) {
        const tooltip = <Tooltip id={'tooltip-' + band.id}>{band.name}</Tooltip>

        return(
            <OverlayTrigger placement="bottom" overlay={tooltip} key={band.id} container={this.state.tooltipContainer}>
                <div className="history" onClick={() => this.handleLoadHistory(index)}>
                    <img src={band.thumb_url} alt={band.name} />
                </div>
            </OverlayTrigger>
        )
    }

    render() {
        const { history } = this.props
        return (
            <div className="header-transparent header-transparent-light menu-fixed-dark menu-dark-mobiles xs-menu-wrapper-dark">
                <header className="header-wrapper">
                    <div className="megamenu">
                        <div className="row">
                            <div className="col-sm-8 col-md-6 menu-search">
                                <input type="text" ref="query" placeholder="Search" onKeyUp={(key) => this.handleEnter(key)} />
                                <button className="default" onClick={this.handleClick}><i className="icon icon_search"></i></button>
                            </div>
                            <div id="previous-searches" className="col-sm-4 col-md-6">
                            {history.length > 0 && history.map((band, index) => this.renderHistory(band, index))}
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header