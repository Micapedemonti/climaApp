import { useEffect,useState } from "react"
const Api = ({ciudad}) =>{


    const [weatherData, setWeatherData] = useState(null);
     const apiKey= "be454d68474e61c070edc0083e4b91a0"

     useEffect(() => {
      
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
     .then(response => response.json())
     .then(data =>{

        setWeatherData(data)
     })
 }, [ciudad]);







    return (
<div>
    { weatherData && weatherData.main && ( // agrega una verificación condicional
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature max : {weatherData.main.temp_max} °C</p>
          <p>Temperature min: {weatherData.main.temp_min} °C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
        </div>
     
      )}
    
    </div>      
    )
}

export default Api