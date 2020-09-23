import React from 'react'
import './Banner.css'
import {Button} from '@material-ui/core'

function Banner() {
    return (
        <div className="banner">
            <div className="banner__info">
            <h2>Holiday in random destinations</h2>
            <h5>Plan a holiday with us and see the differences </h5>
            <Button variant="outlined">Explore</Button>
            </div>
        </div>
    )
}

export default Banner
