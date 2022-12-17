# BME-UI
Under development — NOT PUBLIC YET

## Quick-links

[npm](https://www.npmjs.com/package/bme-ui)
[storybook](https://amadeuszblanik.github.io/bme-ui)

## Installation

Use the package manager [npm](https://docs.npmjs.com/cli/install) or [yarn](https://yarnpkg.com/getting-started) to install BME-UI.

```bash
yarn add bme-ui
npm install --save bme-ui
```

Due to styled-compopnents issue you need to add manually styles:
```scss
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=IBM+Plex+Serif:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap');
    @import url('https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css');
```

## Usage

```typescript
import React from 'react';
import { BMEText } from 'bme-ui';

const Foo: React.FunctionComponent = () => <BMEText>Hello world</BMEText>

export default Foo;
```

More about usage: [storybook](https://amadeuszblanik.github.io/bme-ui)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://github.com/amadeuszblanik/bme-ui/blob/master/LICENSE)

## Credits
*[leungwensen/svg-icon](https://github.com/leungwensen/svg-icon)
