export const getArgs = ([executer, file, ...rest]) => {
    const res = {};

    rest.forEach((item, index, array) => {
        if (item.charAt(0) == '-') {
            if (index === array.length - 1 || array[index + 1].charAt(0) == '-') {
                return res[item.substr(1)] = true;
            }

            res[item.substr(1)] = array[index + 1];
        }
    });

    return res;
};
