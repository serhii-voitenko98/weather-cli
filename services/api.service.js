import axios from 'axios';
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js';

const getWeather = async () => {
    const city = process.env.CITY || await getKeyValue(TOKEN_DICTIONARY.CITY);
    const token = process.env.TOKEN || await getKeyValue(TOKEN_DICTIONARY.TOKEN);
    if (!token) {
        throw new Error('Token is not defined. Please setup the key by using argument -t [API_KEY]');
    }
    if (!city) {
        throw new Error('City is not defined. Please setup the city by using argument -c [CITY]');
    }
    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            lang: 'en',
            units: 'metric',
        },
    });

    return data;
};

export { getWeather };
