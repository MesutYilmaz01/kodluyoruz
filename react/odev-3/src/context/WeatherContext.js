import { createContext, useContext, useState, useEffect } from "react";

const weatherContext = createContext()

export const WeatherProvider = ({children}) => {
    const [weather, setWeather] = useState({})
    const values = {
        weather,
        setWeather,
    }
    return <weatherContext.Provider value={values}>{children}</weatherContext.Provider>
}

export const UseWeather = () => useContext(weatherContext)