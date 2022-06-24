import React, { useState } from "react";
import logo from '../../svg/logo.svg'
import search from '../../svg/search.svg'
import './NavMenu.scss'

const NavMenu = ({setLocation, searchLocation, location, }) => {
    return(
        <header className="header__content">
            <nav className="header__content__navigation">
                <img className="header__content__logo" src={logo} alt="" />
                <div className="header__content__search">
              <form className="header__content__form" onSubmit={searchLocation}> 
                <input className="header__content__input" value={location}  onChange={event => setLocation(event.target.value)} type="text" name="city" placeholder="City" />
                <button onClick={searchLocation} type="submit" className="header__content__button" ><img src={search} alt=""/></button>
            </form> 
                </div>
                {/* <div className="header__content__selectbox">
                    <span>°C /</span>
                    <span>°F</span>
                </div> */}
            </nav>
        </header>
    )
}

export default NavMenu;