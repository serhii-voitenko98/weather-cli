import chalk from 'chalk';
import dedent from "../helpers/dedent.js";

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

export { printError, printSuccess, printHelp };
