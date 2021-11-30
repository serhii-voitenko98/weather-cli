import { getArgs } from "./helpers/args.js";
import { printError, printHelp, printSuccess, printWeather } from "./services/log.service.js";
import { saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js";
import { getWeather } from "./services/api.service.js";
import { prepareWeatherData } from "./helpers/prepare-data.js";

const saveToken = async token => {
    if (!token.trim().length) {
        return printError('Token is required!');
    }

    try {
        await saveKeyValue(TOKEN_DICTIONARY.TOKEN, token);
        printSuccess('Token has been saved!');
    } catch (e) {
        printError(`Saving token error: ${e.message}`);
    }
};

const saveCity = async city => {
    if (!city.trim().length) {
        return printError('City is required!');
    }

    try {
        await saveKeyValue(TOKEN_DICTIONARY.CITY, city);
        printSuccess('City has been saved!');
    } catch (e) {
        printError(`Saving city error: ${e.message}`);
    }
};

const getForcast = async () => {
    try {
        const weather = await getWeather();
        console.log(weather);
        printWeather(prepareWeatherData(weather));
    } catch(e) {
        if (e?.response?.status == 404) {
            printError('Wrong city name');
        } else if (e?.response?.status == 401) {
            printError('Wrong token');
        } else {
            printError(e.message);
        }
    }
};

const initCLI = async () => {
    const args = getArgs(process.argv);
    if (args.h) {
        printHelp();
    }

    if (args.t) {
        await saveToken(args.t);
    }

    if (args.c) {
        await saveCity(args.c);
    }

    if (!Object.keys(args).length) {
        getForcast();
    }
};

initCLI();
