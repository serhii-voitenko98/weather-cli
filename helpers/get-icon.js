export const getWeatherIcon = iconCode => {
    switch(iconCode.slice(0, -1)) {
        case '01':
            return '☀️';
        case '02':
            return '⛅';
        case '03':
            return '☁️';
        case '04':
            return '☁️';
        case '09':
            return '🌧️';
        case '10':
            return '🌦️';
        case '11':
            return '🌩️';
        case '13':
            return '❄️';
        case '50':
            return '🌫️';
        default:
            return '🌡️';
    }
};
