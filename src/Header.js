import React from 'react'
import PropTypes from 'prop-types'

import './Header.css'
import History from './History'
import Search from './Search'

const Header = (props) => {
    return (
        <div className="header-transparent header-transparent-light menu-fixed-dark menu-dark-mobiles xs-menu-wrapper-dark">
            <header className="header-wrapper">
                <div className="megamenu">
                    <div className="row">
                        <Search performSearch={props.performSearch} />
                        <History history={props.history} />
                    </div>
                </div>
            </header>
        </div>
    )
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