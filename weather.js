import { getArgs } from "./helpers/args.js";
import { printError, printHelp, printSuccess } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";

const saveToken = async token => {
    try {
        await saveKeyValue('token', token);
        printSuccess('Token has been saved!');
    } catch(e) {
        printError(`Saving token error: ${e.message}`);
    }
};

const saveCity = async city => {
    try {
        await saveKeyValue('city', city);
        printSuccess('City has been saved!');
    } catch(e) {
        printError(`Saving city error: ${e.message}`);
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
};

initCLI();

fetch('https://google.com').then(d => d.json()).then(console.log);
