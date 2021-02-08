import styled from 'styled-components';
import { BMEBox } from '../../index';
import { ListStyledComponentProps } from './List.types';
import { clearButtonStyles, hexToRGBA, makeFlex, spacing } from '../../Mixins';

export const StyledList = styled(BMEBox)<ListStyledComponentProps>`
    overflow: hidden;
    border: ${({ borderColour, theme }) =>
            borderColour ? hexToRGBA(theme.bme.palette[borderColour], 0.33) : `var(--bme-colour-text)`}
        1px solid;
`;

export const StyledListItem = styled.button<ListStyledComponentProps>`
    ${clearButtonStyles()}
    position: relative;
    display: inline-flex;
    width: ${makeFlex('row', 'left', 'center')};
    ${spacing('padding', { x: 'm', y: 's' })}
    border-bottom: ${({ borderColour, theme }) =>
        borderColour ? hexToRGBA(theme.bme.palette[borderColour], 0.33) : `var(--bme-colour-text)`}
        1px solid;
    ${({ lastChild }) => (lastChild ? 'border: none;' : '')}
`;
