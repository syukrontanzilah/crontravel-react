import React from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import {Avatar} from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

function Header() {
    return (
        <div className="header">
            <div className="header__titleLogo">
                  <img
           className="header__logo"
            src="https://us.123rf.com/450wm/ikalvi/ikalvi1712/ikalvi171200406/92424242-stock-vector-logo-for-travel-agency-tropical-resort-beach-hotel-spa-summer-vacation-symbol-logo-of-travel-agency-.jpg?ver=6"
            alt=""

           />
           <p className="header__title">CRONTRAVEL</p>
            </div>

            <div className="header__center">
                <input type="text"
                placeholder="Search Destination"
                />
                <SearchIcon />

            </div>

            <div className="header__right">
                <p>become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar style={{width:'30px', height:'30px'}}/>
            </div>
         
        </div>
    )
}

export default Header;
