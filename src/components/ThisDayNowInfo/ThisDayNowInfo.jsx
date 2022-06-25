import React from "react";
import './ThisDayNowInfo.scss'

const ThisDayNowInfo = ({data}) => {
    return(
        <div className="thisday__info__now__wrapper">
        <div className="thisday__info__now__info">
            <ul className="thisday__info__now__row">    
                Chance of Rain
              {data.list[0].pop ? <li className="this__info__row__number"> {data.list[0].pop * 100} % </li>: <p className="this__info__row__number">0 %</p>}
            </ul>
            <ul className="thisday__info__now__row">
                Humidity
               {data.list[0].main  ? <li className="this__info__row__number">{data.list[0].main.humidity}</li> : null} 
            </ul>
            <ul className="thisday__info__now__row">
                Wind Speed
                {data.list[0].wind ? <li className="this__info__row__number">{data.list[0].wind.speed} m/sec</li> : null} 
            </ul>
            {/* <ul className="thisday__info__now__row">
                Visiblity
                <li className="this__info__row__number">{data.visibility}</li>
            </ul> */}
            <ul className="thisday__info__now__row">
                Pressure
                {data.list[0].main ? <li className="this__info__row__number">{data.list[0].main.pressure} Hpa</li> : null} 
            </ul>
        </div>
        </div>
    )
}

export default ThisDayNowInfo;