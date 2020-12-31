import styled, { createGlobalStyle } from 'styled-components';

import BmeIconsEot from './bme-icons.eot';
import BmeIconsWoff from './bme-icons.woff';
import BmeIconsWoff2 from './bme-icons.woff2';
import { Palette } from '../../Theme/Theme';

export const GlobalIcon = createGlobalStyle`
  @font-face {
    font-family: "bme-icons";
    src: url(${BmeIconsEot}) format("embedded-opentype"),
url(${BmeIconsWoff2}) format("woff2"),
url(${BmeIconsWoff}) format("woff");
}
`;

export const StyledIcon = styled.i<{ icon: string | number; variant?: Palette }>`
    font-family: bme-icons !important;
    font-style: normal;
    font-weight: normal !important;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${({ theme, variant }) =>
        variant ? `var(--icon-color, ${theme.bme.palette[variant]})` : 'var(--icon-color)'};

    &:before {
        content: '\\f${({ icon }) => icon}';
    }
`;
