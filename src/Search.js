import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { performSearch } from './actions'

class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            lastSearch: '',
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleEnter = this.handleEnter.bind(this)
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

    render() {
        return(
            <div className="col-sm-8 col-md-6 menu-search">
                <input type="text" ref="query" placeholder="Search" onKeyUp={(key) => this.handleEnter(key)} />
                <button className="default" onClick={this.handleClick}><i className="icon icon_search"></i></button>
            </div>
        )
    }
}

Search.propTypes = {
    performSearch: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        performSearch: (query) => dispatch(performSearch(query))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)