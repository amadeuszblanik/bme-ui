import { Sizes } from '../Theme/Theme';
import { sizeToPx } from '../Utils';

interface Sizing {
    x?:
        | Sizes
        | {
              left?: Sizes;
              right?: Sizes;
          };
    y?:
        | Sizes
        | {
              top?: Sizes;
              bottom?: Sizes;
          };
}

export type SpacingSize = Sizes | Sizing;
type Type = 'padding' | 'margin';

const spacing = (type: Type, size: SpacingSize): string => {
    switch (typeof size) {
        case 'object': {
            const response = [];
            const { x, y } = size;

            switch (typeof x) {
                case 'object': {
                    if (x.left) {
                        response.push(`${type}-left: ${sizeToPx(x.left)}px;`);
                    }
                    if (x.right) {
                        response.push(`${type}-right: ${sizeToPx(x.right)}px;`);
                    }
                    break;
                }
                case 'string': {
                    response.push(`${type}-left: ${sizeToPx(x as Sizes)}px;`);
                    response.push(`${type}-right: ${sizeToPx(x as Sizes)}px;`);
                    break;
                }
            }

            switch (typeof y) {
                case 'object': {
                    if (y.top) {
                        response.push(`${type}-top: ${sizeToPx(y.top)}px;`);
                    }
                    if (y.bottom) {
                        response.push(`${type}-bottom: ${sizeToPx(y.bottom)}px;`);
                    }
                    break;
                }
                case 'string': {
                    response.push(`${type}-top: ${sizeToPx(y as Sizes)}px;`);
                    response.push(`${type}-bottom: ${sizeToPx(y as Sizes)}px;`);
                    break;
                }
            }

            return response.join('');
        }
        case 'string': {
            return `${type}: ${sizeToPx(size as Sizes)}px;`;
        }
    }

    throw new Error('Mixins::Spacing — Wrong type of size. Needs to be an object or string.');
};

export default spacing;
