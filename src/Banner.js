import React, {useState, useEffect} from 'react'
import './Banner.css'
import {Button} from '@material-ui/core'
import Search from './Search'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';


function Banner() {
    const [showSearch, setShowSearch] = useState(false)



    return (
        <div className="banner">
            <div className="banner__search">
                {showSearch && <Search/>}
            <Button 
            onClick={()=> setShowSearch(!showSearch)}
            className="banner__searchButton" variant="outlined">
               {showSearch? "Hide": "Search Dates"}
               {showSearch? <ExpandLessIcon/> :  <ExpandMoreIcon /> }
              
            </Button>
         
            </div>
            <div className="banner__info">
            <h2>Holiday in random destinations</h2>
            <h5>Plan a holiday with us and see the differences </h5>
            <Button variant="outlined">Explore</Button>
            </div>

       
        </div>
    )
}

export default Banner
