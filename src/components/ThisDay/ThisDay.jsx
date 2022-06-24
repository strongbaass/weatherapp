import React, {useState} from "react";
import './ThisDay.scss'

const ThisDay = ({data}) => {
    return(
        <div className="this__day__wrapper">
            <div className="this__day__info">
            {data.city ? <h3 className="this__day__info__city">{data.city.name}</h3> : null }
            {data.city.name ?  <h6 className="this__day__info__date"><span>{new Date().toLocaleDateString()}</span></h6> : null}
            </div>
            <div className="this__day__info__temp">
                {data.list[0].main ? <h1>{data.list[0].main.temp_min}°C</h1> : null}
            </div>
        </div>
    )
}

export default ThisDay;