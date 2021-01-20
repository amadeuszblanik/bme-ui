import styled from 'styled-components';
import { clearButtonStyles, spacing, transition } from '../../../Mixins';

export const BreadcrumbsItem = styled.div`
    ${spacing('margin', { x: 's' })}
`;

export const BreadcrumbsItemLink = styled.button`
    ${clearButtonStyles()}
    position: relative;

    &:after {
        content: '';
        position: absolute;
        bottom: 2px;
        left: 50%;
        display: block;
        width: 100%;
        max-width: 85%;
        height: 100%;
        max-height: 1px;
        background-color: var(--bme-colour-text);
        border-radius: 0;
        opacity: 1;
        transform: translateX(-50%);
        ${transition(['max-width', 'max-height', 'opacity', 'bottom', 'transform'], 125)}
    }

    &:hover,
    &:active {
        &:after {
            bottom: 50%;
            max-width: 100%;
            height: 100%;
            max-height: 100%;
            border-radius: 2px;
            opacity: 0.33;
            transform: translateX(-50%) translateY(50%);
        }
    }
`;
