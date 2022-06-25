import React, {useState} from "react";
import logo from '../svg/logo.svg'
import NavMenu from "./NavMenu/NavMenu";
import ThisDay from "./ThisDay/ThisDay";
import ThisDayNowInfo from "./ThisDayNowInfo/ThisDayNowInfo";
import axios from 'axios'
import ThisDayInfo from "./ThisDayInfo/ThisDayInfo.jsx";
import './HomePage.scss'
import Welcome from "./Welcome/Welcome";


const HomePage = () => {
    const [data, setData] = useState({});
    const [location, setLocation] = useState(''); 

    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=27303e307f6a4c6af409af5ff28dedd3&units=metric&cnt=7&lang=ua`;

    const searchLocation = (event) => {
        event.preventDefault();
        if(location.length !== 0){
            axios.get(url).then((response) => {
                setData(response.data)
            })
            setLocation('')
        }else{
            alert('City not found')
        }
    }
    return(
        <>
            <NavMenu searchLocation={searchLocation} location={location} setLocation={setLocation}/>
           {data.city !== undefined ? <ThisDay data={data}/> : <Welcome/>} 
                {data.city !== undefined  ? <div className="info_about_day">
                    {data.list?.map((item,index)=> {
                        return <ThisDayInfo selector={item} key={item.id}/>
                    })}
                </div> : null}
           {data.city !== undefined  ? <ThisDayNowInfo data={data}/> : null} 
        </>
    )
}

export default HomePage;