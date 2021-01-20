import { DefaultTheme } from 'styled-components';
import { hexToRGBA, transition } from './index';

const addFocus = (theme: DefaultTheme): string => `
  box-shadow: 0 0 0 0 ${hexToRGBA(theme.bme.palette.focus, 0)};
  ${transition(['box-shadow'], 275)}

  &:focus {
    box-shadow: 0 0 0 5px ${theme.bme.palette.focus};
    border-radius: 3px;
    outline: none;
  }
`;

export default addFocus;
