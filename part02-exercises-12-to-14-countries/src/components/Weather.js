import axios from "axios";
import { useState, useEffect } from "react";

export default function Weather({ country }) {
    const [weatherData, setWeatherData] = useState("");

    useEffect(() => {
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
            )
            .then(response => {
                console.log(response.data);
                setWeatherData(response.data);
            });
    }, []);

    if (weatherData) {
        if (weatherData.hasOwnProperty("code")) {
            console.log("weatherData has a code");
            console.log("message: ", weatherData.message);
            return (
                <div>
                    The Weather API is responding:
                    <br />
                    {weatherData.message}
                </div>
            );
        } else {
            const iconUrl = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
            return (
                <>
                    <h2>Weather in {country.capital[0]}</h2>
                    <h3>{weatherData.weather[0].description}</h3>
                    <img src={iconUrl} width='75px' alt='' />
                    <h3>
                        temperature:{" "}
                        {(weatherData.main.temp - 273.15).toLocaleString(
                            undefined,
                            {
                                maximumFractionDigits: 1,
                            }
                        )}{" "}
                        Celsius
                    </h3>

                    <h3>wind {weatherData.wind.speed} m/s</h3>
                </>
            );
        }
    } else {
        return "";
    }
}
