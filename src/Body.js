import React from 'react'
import PropTypes from 'prop-types'

import Band from './Band'
import Events from './Events'

const Body = (props) => {
    return (
        <div>
            <section className="section-larger bg-img bg53 stellar" data-stellar-background-ratio="0.4">
                <div className="intro-with-transparent-menu"></div>
                <div className="bg-overlay gradient-1"></div>
                <div className="container">
                    <div className="row mt50 mb50">
                        <Band band={props.band} />
                    </div>
                </div>
            </section>
            <div className="shadow3"></div>
            {props.band.id !== undefined && <Events events={props.band.events} />}
        </div>
    )
}

Body.propTypes = {
    band: PropTypes.object,
}

Body.defaultProps = {
    band: {},
}

export default Body