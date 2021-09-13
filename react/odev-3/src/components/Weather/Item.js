import React from 'react'
import { UseWeather } from '../../context/WeatherContext'

function Item({dayName, img, maxTemp, minTemp}) {
    const {weather, setWeather} = UseWeather()
    return (
        <>
            <div>
                {dayName.substring(0,3)}
            </div>
            <div>
                <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} width="50" height="50"/>
            </div>
            <div>
                {Math.floor(maxTemp - 273.15)}℃  {Math.floor(minTemp - 273.15)}℃
            </div>
                
        </>
    )
}

export default Item
