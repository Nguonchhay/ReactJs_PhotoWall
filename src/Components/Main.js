import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'

import { URL_HOME, URL_PHOTO_CREATE } from './routers'

export default class Main extends Component {
    constructor() {
        super()
    }

    render() {
        return (

        <div>
            <h1>
                <Link to={URL_HOME}>
                    Potowall
                </Link>
            </h1>

            <Route exact path={URL_HOME} render={() => (
                <div>
                    <PhotoWall {...this.props} />
                </div>
            )}/>

            <Route path={URL_PHOTO_CREATE} render={({ history }) => (
                <AddPhoto {...this.props} onHistory={history} />
            )}/>
        </div>
        )
    }
}