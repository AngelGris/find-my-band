import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './Header.css'
import History from './History'
import Search from './Search'
import { loadHistory } from './actions'

const Header = ({band, history, loadHistory, performSearch}) => {
    return (
        <div className="header-transparent header-transparent-light menu-fixed-dark menu-dark-mobiles xs-menu-wrapper-dark">
            <header className="header-wrapper">
                <div className="megamenu">
                    <div className="row">
                        <Search />
                        <History loadHistory={loadHistory} />
                    </div>
                </div>
            </header>
        </div>
    )
}

Header.propTypes = {
    loadHistory: PropTypes.func,
}

Header.defaultProps = {
    loadHistory: () => void(0),
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadHistory: (index) => dispatch(loadHistory(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)