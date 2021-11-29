export default function dedent(strings, ...values) {
    const valuesForReplace = [...values];
    const source = [...strings];

    source.forEach((value, index, array) => {
        if (value.startsWith('\n')) {
            array[index] = value.replace('\n', valuesForReplace.shift() + '\n');
        }
    });

    return source.join('').split('\n').filter(v => Boolean(v.trim()) && v != '\n')
        .map((value, index, array) => {
            if (index === array.length - 1) {
                return value.trim();
            }

            return value.trim() + '\n';
        })
        .join('');
};
