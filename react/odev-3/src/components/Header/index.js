import React from 'react'
import { UseWeather } from '../../context/WeatherContext'
import axios from "axios";

function Header() {
    const{weather, setWeather} = UseWeather()
    const cityGeoList = [
        {
            "key" : "ist",
            "name": "İstanbul",
            "lat" : "41.000",
            "lon" : "28.0100"
        },
        {
            "key" : "an",
            "name": "Ankara",
            "lat" : "39.9300",
            "lon" : "32.8500"
        },
        {
            "key" : "siv",
            "name": "Sivas",
            "lat" : "39.7500",
            "lon" : "37.0167"
        },
        {
            "key" : "sam",
            "name": "Samsun",
            "lat" : "41.2867",
            "lon" : "36.3300"
        }
    ]
    
    if(Object.keys(weather).length == 0)
        axios(`https://api.openweathermap.org/data/2.5/onecall?lat=41.0100&lon=28.0100&appid=be2248f494b5358be581696babeac98d`)
            .then((res) => setWeather(res.data.daily))

    const handleCityChange = (e) => {
        const city = cityGeoList[e.target.value];
        axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.lon}&appid=be2248f494b5358be581696babeac98d
        `)
            .then((res) => setWeather(res.data.daily))
        
        //axios(`https://raw.githubusercontent.com/MesutYilmaz01/kodluyoruz/main/weather.json`)
            //.then((res) => setWeather(res.data.daily))
       
    };
    return (
        <div className="row justify-content-center">
            <div className="mt-5 col-md-3">
                <select className="form-select" onChange={ (e) => handleCityChange(e)}>
                    {Object.keys(cityGeoList).map(function(keyName, keyIndex) {
                        return (
                            <option value={keyName} key={keyIndex}>
                                {cityGeoList[keyName].name}
                            </option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}

export default Header
