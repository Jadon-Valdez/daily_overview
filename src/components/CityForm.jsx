import React, {useState} from 'react'
import axios from 'axios'
import '../static/CityForm.css'


const CityForm = () => {

    const key = "a9bedcd18ce249e62f055e9528d13fb0"
    const [city, setCity] = useState("");
    const [weatherInfo, setWeatherInfo] = useState([]);

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${key}`,
            city,
        )
            .then(res => {setWeatherInfo(res.data)})
            .catch(err => {console.log(err); setWeatherInfo({err: "City does not exist!"})})
    }

    return (
        <div className="all">
            <form onSubmit={onSubmitHandler}>
                <input type="text" placeholder="What city are you in?" onChange={e => setCity(e.target.value)} />
                <div>
                    <button>Submit</button>
                </div>
            </form>
            <div className="weather">
                <h2>{weatherInfo.name}</h2>
                <p>Current Temperature: {weatherInfo.main.temp}°F</p>
                <p>High: {weatherInfo.main.temp_max}°F | Low: {weatherInfo.main.temp_min}°F</p>
            </div>
        </div>
    )
}

export default CityForm
