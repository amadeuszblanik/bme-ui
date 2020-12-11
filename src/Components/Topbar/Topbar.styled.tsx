import styled from 'styled-components';
import { TopbarStyledComponentProps } from './Topbar.types';
import { makeFlex, textColour } from '../../Mixins';
import { Palette } from '../../Theme/Theme';

export const StyledTopbar = styled.header<TopbarStyledComponentProps>`
    position: ${({ fixed }) => (fixed ? 'fixed' : 'relative')};
    top: 0;
    left: 0;

    display: flex;
    ${makeFlex('row', 'center', 'center')}
    width: 100%;
    ${({ theme, variant }) => (variant ? `color: ${textColour(theme.bme.palette[variant] as Palette, theme)};` : '')}
    ${({ theme, variant }) => (variant ? `background: ${theme.bme.palette[variant]};` : '')}
  ${({ theme, variant }) =>
        variant ? `--bme-colour-text: ${textColour(theme.bme.palette[variant as Palette], theme)};` : ''}
`;
