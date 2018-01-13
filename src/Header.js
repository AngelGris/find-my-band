import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Header.css'
import History from './History'
import Search from './Search'

class Header extends Component {
    render() {
        const { history, performSearch } = this.props
        return (
            <div className="header-transparent header-transparent-light menu-fixed-dark menu-dark-mobiles xs-menu-wrapper-dark">
                <header className="header-wrapper">
                    <div className="megamenu">
                        <div className="row">
                            <Search performSearch={performSearch} />
                            <History history={history} />
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

Header.propTypes = {
    band: PropTypes.object,
    history: PropTypes.array,
    loadHistory: PropTypes.func,
    performSearch: PropTypes.func.isRequired,
}

Header.defaultProps = {
    band: {},
    history: [],
    loadHistory: () => void(0),
}

export default Header