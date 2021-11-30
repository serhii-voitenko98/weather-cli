export const prepareWeatherData = res => ({
    country: res.sys?.country,
    city: res.name,
    icon: res.weather[0]?.icon,
    description: res.weather[0]?.description,
    temperature: {
        value: res.main?.temp,
        feels_like: res.main?.feels_like,
    },
    pressure: res.main?.pressure,
    humidity: res.main?.humidity,
    wind_speed: res.wind?.speed,
    sunrise: res.sys?.sunrise,
    sunset: res.sys?.sunset,
});
