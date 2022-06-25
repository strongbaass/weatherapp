import React from "react";
import './Welcome.scss'

const Welcome = () => {
    return(
        <div className="welcome__info">
            <div className="welcome__info__wrapper">
                <h1 className="welcome__info__wrapper__title">Welcome to weather app!</h1> 
                <h2 className="welcome__info__wrapper__description">Enter city in which you want to see weather.</h2>
            </div>
        </div>
    )
}

export default Welcome;