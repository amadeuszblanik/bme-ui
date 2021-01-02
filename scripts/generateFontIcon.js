// eslint-disable-next-line @typescript-eslint/no-var-requires
const { generateFonts } = require('fantasticon');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

const findIconName = (content) => {
    const contentByLine = content.split('\n').filter((entry) => entry.includes('.icon-'))[0];

    if (!contentByLine) {
        return;
    }

    return contentByLine
        .split('.icon-')[1]
        .split(':before')[0]
        .split('-')
        .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
        .join('');
};

const findIconContent = (content) => {
    const contentByLine = content.split('\n').filter((entry) => entry.includes('content:'))[0];

    if (!contentByLine) {
        return;
    }

    return contentByLine.split('content: "')[1].split('";')[0];
};

const isStartWithNumber = (value) => (typeof value === 'string' ? !isNaN(Number(value[0])) : false);

const generateIconKey = (key, duplicatedKeys, index) => {
    if (!key || !duplicatedKeys) {
        return;
    }

    if (duplicatedKeys.includes(key)) {
        console.debug({ key, duplicatedKeys });
        key = `${key}${index}`;
    }

    if (isStartWithNumber(key)) {
        const wordsInKey = key.split(/(?=[A-Z])/);

        if (wordsInKey.length < 2) {
            return `Icon${key}`;
        }

        const secondWord = wordsInKey[1];

        if (isStartWithNumber(secondWord)) {
            return `Icon${key}`;
        }

        wordsInKey[1] = wordsInKey[0];
        wordsInKey[0] = secondWord;

        return wordsInKey.join('');
    }

    return key;
};

const findDuplicates = (values) => values.filter((item, index) => values.indexOf(item) != index);

generateFonts({
    name: 'bme-icons',
    fontTypes: ['eot', 'woff2', 'woff'],
    assetTypes: ['css', 'ts'],
    formatOptions: {},
    pathOptions: {},
    codepoints: {},
    fontHeight: 300,
    round: undefined,
    descent: undefined,
    normalize: true,
    selector: '.bme-icon',
    tag: 'i',
    prefix: 'icon',
    fontsUrl: '',
    inputDir: 'icons/',
    outputDir: 'src/Components/Icon',
}).then(() => {
    fs.readFile('src/Components/Icon/bme-icons.css', 'utf-8', (errRead, data) => {
        if (errRead) throw errRead;

        const content = data
            .split('}')
            .map((entry) => [findIconName(entry), findIconContent(entry)])
            .filter((entry) => entry.every(Boolean));

        const duplicatedKeys = findDuplicates(content.flatMap(([key]) => key));

        const contentAsEnum = content.map(
            (entry, index) => `${generateIconKey(entry[0], duplicatedKeys, index)} = '${entry[1]}',`,
        );

        const dataToWrite = `export enum IconNames {
    ${contentAsEnum.join('\n    ')}
}
`;

        fs.writeFile('src/Components/Icon/Icons.names.ts', dataToWrite, (errWrite) => {
            if (errWrite) throw errWrite;
            console.log('Successfully generated Icons.names.ts');
        });
    });
});
