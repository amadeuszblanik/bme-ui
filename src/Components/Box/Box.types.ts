import { SpacingSize } from '../../Mixins/spacing';
import { Palette } from '../../Theme/Theme';
import { AlignDirectionValues, AlignXValues, AlignYValues } from '../../Mixins/makeFlex';

export interface BoxStyledComponentProps {
    rounded?: 'full' | boolean;
    background?: Palette;
    padding?: SpacingSize;
    margin?: SpacingSize;
    alignX?: AlignXValues;
    alignY?: AlignYValues;
    inline?: boolean;
    direction?: AlignDirectionValues;
    width?: 'full' | 'half';
    height?: 'full' | 'fullPage' | 'half';
}
