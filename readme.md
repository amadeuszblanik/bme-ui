# BME-UI
Beta releases

## Links
* [npm](https://www.npmjs.com/package/bme-ui)
* [storybook](https://amadeuszblanik.github.io/bme-ui)
* [usage example](https://github.com/amadeuszblanik/wolfie-app)

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Installation
Use the package manager [npm](https://docs.npmjs.com/cli/install) or [yarn](https://yarnpkg.com/getting-started) to install BME-UI.

```bash
yarn add bme-ui@beta
```
npm install --save bme-ui@beta
```

## Usage
```typescript
import React from 'react';
import { BmeText } from 'bme-ui';

const Foo: React.FunctionComponent = () => <BmeText>Hello world</BmeText>

export default Foo;
```

More about usage: [storybook](https://amadeuszblanik.github.io/bme-ui)

## Theme Provider

```typescript
import { ThemeProvider } from "styled-components";
import { BmeTest } from "bme-ui";
import dark from "bme-ui/dist/themes/dark";
import type { AppProps } from "next/app";

function App({ Component, ...rest }: AppProps) {
  return (
      <ThemeProvider theme={dark}>
        <BmeTest variant="primary" />
        <Component {...props.pageProps} />
      </ThemeProvider>
    );
}

export default App;
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://github.com/amadeuszblanik/bme-ui/blob/master/LICENSE)

## Credits
*[leungwensen/svg-icon](https://github.com/leungwensen/svg-icon)
