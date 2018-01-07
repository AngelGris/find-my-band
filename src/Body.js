import React, { Component } from 'react'

import Band from './Band'
import Events from './Events'

class Body extends Component {
    render () {
        return (
            <div>
                <section className="section-larger bg-img bg53 stellar" data-stellar-background-ratio="0.4">
                    <div className="intro-with-transparent-menu"></div>
                    <div className="bg-overlay gradient-1"></div>
                    <div className="container">
                        <div className="row mt50 mb50">
                            <Band band={this.props.band} />
                        </div>
                    </div>
                </section>
                <div className="shadow3"></div>
                {this.props.band.id !== undefined && <Events events={this.props.band.events} />}
            </div>
        )
    }
}

export default Body