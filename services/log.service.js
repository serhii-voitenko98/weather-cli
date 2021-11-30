import chalk from 'chalk';
import dedent from "dedent";
import { getWeatherIcon } from "../helpers/get-icon.js";

const printError = message => {
    console.log(chalk.bgRed(' ERROR ') + ' ' + message);
};

const printSuccess = message => {
    console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message);
};

const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan(' HELP ')}
        Without arguments - print weather
        -s [CITY] for city setting
        -h for help
        -t [API_KEY] for token setting
        `
    );
};

const printWeather = (data) => {
    console.log(
        dedent`${chalk.bgBlue(' WEATHER ')} Weather in ${data.country}, ${data.city}.
        ${getWeatherIcon(data.icon)}  ${data.description}
        Temperature: ${data.temperature.value}°C feels like ${data.temperature.feels_like}°C
        Pressure: ${data.pressure}
        Humidity: ${data.humidity}
        Wind speed: ${data.wind_speed} m/s
        Sunrise: ${new Date(data.sunrise)}
        Sunset: ${new Date(data.sunset)}
        `
    );
};

export { printError, printSuccess, printHelp, printWeather };
