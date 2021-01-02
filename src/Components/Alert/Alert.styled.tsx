import styled from 'styled-components';
import { boxShadow, clearButtonStyles, spacing, textColour, transition } from '../../Mixins';
import { Palette } from '../../Theme/Theme';

export const StyledAlert = styled.div<{ variant: Palette }>`
    display: block;
    width: 100%;
    ${spacing('padding', { x: 'l', y: 'm' })}
    border-radius: 5px;
    background-color: ${({ theme, variant }) => theme.bme.palette[variant]};
    box-shadow: ${boxShadow()};

    ${({ theme, variant }) => (variant ? `--bme-colour-text: ${textColour(theme.bme.palette[variant], theme)};` : '')}
    ${({ theme, variant }) => (variant ? `--icon-color: ${textColour(theme.bme.palette[variant], theme)};` : '')}
    
    ${transition(['box-shadow'])}
    
    &:hover {
        box-shadow: ${boxShadow(2)};
    }
`;

export const StyledAlertCloseButton = styled.button`
    ${clearButtonStyles()}
`;
