import React from 'react'
import Item from './Item'
import { UseWeather } from '../../context/WeatherContext'

function List() {
    const {weather, setWeather} = UseWeather()
    var days = [ 'Sunday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Monday'];
    return (
        <div className="row justify-content-center">
            {Object.keys(weather).length == 0 ? 'yok' : weather.map( (item, key) => {
                let now = new Date();
                let newDate = now.setDate(now.getDate() + key)
                return(
                    <div key={key} className="col-md-1 text-center mt-5">
                        <Item dayName={days[new Date(newDate).getDay()]}  img={item.weather[0].icon} maxTemp={item.temp.max} minTemp={item.temp.min} />
                    </div>
                )
            })}
        </div>
    )
}

export default List
