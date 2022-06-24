import React from "react";
import './ThisDayInfo.scss'

const ThisDayInfo = ({selector}) => {
    const {list,main} = selector
    const image = `https://openweathermap.org/img/wn/${selector.weather[0].icon}@2x.png`
    console.log(selector)
    return(
        <div className="thisday__info">
            <div className="thisday__info__wrapper">
                <span className="thisday__info__time">{selector.dt_txt}</span>
                <img src={image} alt="" />
                <span className="thisday__info__description">{selector.weather[0].description}</span>
                <span>{selector.main.temp} °C</span>
            </div>
        </div>
    )
}

export default ThisDayInfo;