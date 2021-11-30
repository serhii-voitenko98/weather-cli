import { homedir } from 'os';
import { join } from 'path';
import { promises } from 'fs';

const filePath = join(homedir(), 'weather-data.json');
const TOKEN_DICTIONARY = {
    TOKEN: 'token',
    CITY: 'city',
}

const isExist = async filePath => {
    try {
        await promises.stat(filePath);
        return true;
    } catch {
        return false;
    }
};

const saveKeyValue = async (key, value) => {
    let data = { [key]: value };

    if (await isExist(filePath)) {
        const file = await promises.readFile(filePath);
        data = { ...JSON.parse(file), ...data };
    }

    return promises.writeFile(filePath, JSON.stringify(data));
};

const getKeyValue = async (key) => {
    if (await isExist(filePath)) {
        const fileString = await promises.readFile(filePath);
        const data = { ...JSON.parse(fileString) };
        return data[key];
    }

    return null;
};

export { saveKeyValue, getKeyValue, TOKEN_DICTIONARY };
