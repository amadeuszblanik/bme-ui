import styled from 'styled-components';
import { spacing } from '../../../Mixins';

export const ItemWrapperStyled = styled.div``;

export const ContentStyled = styled.div<{ open?: boolean }>`
    display: block;
    width: 100%;
    max-height: ${({ open }) => (open ? '100%' : '0')};
    height: ${({ open }) => (open ? 'inherit' : '0')};
    ${({ open }) => spacing('margin', { y: { bottom: open ? 'm' : 'none' } })}
    ${({ open }) => spacing('padding', { x: open ? 'l' : 'none', y: open ? 'm' : 'none' })}
    opacity: ${({ open }) => (open ? 1 : 0)};
    overflow: hidden;
`;
