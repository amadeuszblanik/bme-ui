// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

const { argv } = process;

if (argv.length < 3) {
    throw Error('You need to name your component. eg. npm run generate:component test');
}

const componentName = process.argv[2];
const componentNameSentenceCase = `${componentName[0].toUpperCase()}${componentName.substr(1)}`;

const directory = `src/Components/${componentNameSentenceCase}`;

if (!fs.existsSync(directory)) {
    fs.mkdir(directory, (errMkdir) => {
        if (errMkdir) throw errMkdir;
        console.log('Successfully generated component directory');
    });
}

// Base typescript

const baseTSContent = `import React from 'react';
import { Styled${componentNameSentenceCase} } from './${componentNameSentenceCase}.styled';

const ${componentNameSentenceCase}: React.FunctionComponent = ({ children }) => (
    <Styled${componentNameSentenceCase}>
        {children}
    </Styled${componentNameSentenceCase}>
);

export default ${componentNameSentenceCase};`;

fs.writeFile(`${directory}/${componentNameSentenceCase}.tsx`, baseTSContent, (errWrite) => {
    if (errWrite) throw errWrite;
    console.log('Successfully generated base typescript component');
});

// Styled typescript

const styledTSContent = `import styled from 'styled-components';

export const Styled${componentNameSentenceCase} = styled.div\`
    background-color: \${({ theme }) => theme.bme.palette.primary};
\`;
`;

fs.writeFile(`${directory}/${componentNameSentenceCase}.styled.tsx`, styledTSContent, (errWrite) => {
    if (errWrite) throw errWrite;
    console.log('Successfully generated styled typescript component');
});

// Story typescript

const storyTSContent = `import React from 'react';
import { BME${componentNameSentenceCase} } from '../../index';

export default {
    title: 'Components/${componentNameSentenceCase}',
};

export const Component = ({ ...args }) => <BME${componentNameSentenceCase} {...args}></BME${componentNameSentenceCase}>;

Component.args = {
    variant: 'dark',
};

Component.argTypes = {
    fixed: {
        control: {
            type: 'boolean',
        },
    },
    variant: {
        control: {
            type: 'inline-radio',
            options: ['primary', 'secondary', 'tertiary', 'dark', 'light', false],
        },
    },
};`;

fs.writeFile(`${directory}/${componentNameSentenceCase}.stories.tsx`, storyTSContent, (errWrite) => {
    if (errWrite) throw errWrite;
    console.log('Successfully generated stories typescript component');
});

// Write to index.ts

fs.readFile('src/index.ts', 'utf-8', (errRead, data) => {
    if (errRead) throw errRead;

    const splitData = data.split('\n').filter((entry) => entry && entry.length > 0);

    let importContent = splitData
        .filter((entry) => entry.startsWith('import '))
        .filter((entry) => !entry.includes(`import ${componentNameSentenceCase}`));
    let exportContent = splitData
        .filter((entry) => entry.startsWith('export '))
        .filter((entry) => !entry.includes(`export { ${componentNameSentenceCase}`));

    importContent = [
        ...importContent,
        `import ${componentNameSentenceCase} from './Components/${componentNameSentenceCase}/${componentNameSentenceCase}';`,
    ];
    exportContent = [...exportContent, `export { ${componentNameSentenceCase} as BME${componentNameSentenceCase} };`];

    fs.writeFile('src/index.ts', [...importContent, '', ...exportContent].join('\n'), (errWrite) => {
        if (errWrite) throw errWrite;
        console.log('Successfully generated component list');
    });
});
