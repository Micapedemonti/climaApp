import { useEffect,useState } from "react"
import './FetchApi.css'

const Api = ({ciudad}) =>{


    const [weatherData, setWeatherData] = useState(null);
     const apiKey= "be454d68474e61c070edc0083e4b91a0"

     useEffect(() => {
     
      
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
     .then(response => response.json())
     .then(data =>{
     
        setWeatherData(data)
        console.log(data)
     })
 }, [ciudad]);



    return (
<div>
    { weatherData && weatherData.main&& ( // agrega una verificación condicional
        <div className="weather_container">
        <div className="weather_data">
          <h2>{weatherData.name}</h2>
          <h2>Temperatura Actual {Math.round(weatherData.main.temp)}°C </h2>
          <p>Temp max : {Math.round(weatherData.main.temp_max)}°C</p>
          <p>Temp min: {Math.round(weatherData.main.temp_min)} °C</p>
          <p>Humedad: {weatherData.main.humidity}%</p>
          </div>
        </div>
     
      )}
    
    </div>      
    )
}

export default Api