import styled from 'styled-components';
import { AccordionTitleStyledProps } from '../Accordion.types';
import { addFocus, clearButtonStyles, spacing, textColour, transition } from '../../../Mixins';

export const StyledAccordionTitle = styled.button<AccordionTitleStyledProps>`
    ${clearButtonStyles()}
    display: block;
    width: 100%;
    ${spacing('margin', { y: { bottom: 'm' } })}
    ${spacing('padding', { x: 'l', y: 'm' })}
    background-color: ${({ theme, variant }) => theme.bme.palette[variant]};
    border-radius: 8px;
    ${({ theme, variant }) => (variant ? `--bme-colour-text: ${textColour(theme.bme.palette[variant], theme)};` : '')}
    ${transition(['background', 'background-color'])};
    ${({ theme }) => addFocus(theme)}
`;
