import React from 'react'
import { Alert } from 'react-bootstrap'
import { connect } from 'react-redux'

import Band from './Band'
import Events from './Events'
import './Body.css'

const Body = (props) => {
    return (
        <div>
            <section className="section-larger bg-img bg53 stellar" data-stellar-background-ratio="0.4">
                {props.error  && <Alert bsStyle="danger"><label>{props.error}</label></Alert>}
                <div className="bg-overlay gradient-1"></div>
                <div className="container">
                    <div className="row mt50 mb50">
                        <Band />
                    </div>
                </div>
            </section>
            <div className="shadow3"></div>
            <Events />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        error: state.band.error
    }
}

export default connect(mapStateToProps)(Body)