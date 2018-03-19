import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Photo from './Photo'

import { URL_PHOTO_CREATE } from './../routers'

function PhotoWall(props) {
    return <div>
            <Link
                className="add-icon"
                to={URL_PHOTO_CREATE}
            />
            
            <div className="photo-grid">
                {props.posts
                    .sort((x, y) => {
                        return y.id - x.id
                    })
                    .map((post, index) => <Photo key={ index } post={ post } onRemovePhoto={ props.onRemovePhoto } />)}
            </div>
        </div>
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default PhotoWall