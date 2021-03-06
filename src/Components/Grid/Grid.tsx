import React from 'react';
import styled, { useTheme } from 'styled-components';
import { default as SCGrid } from 'styled-components-grid';

import { GridColComponentProps, GridComponentProps, GridSubcomponents } from './Grid.types';
import { WIDTH_HEIGHT_VALUES } from '../Box/Box.variants';
import { makeFlex, spacing } from '../../Mixins';

const StyledGrid = styled(SCGrid)<GridComponentProps>`
    width: ${({ width }) => WIDTH_HEIGHT_VALUES[width] || '100%'};
`;

const StyledCol = styled(SCGrid.Unit)`
    display: flex;
    ${({ direction, alignX, alignY }) => (direction || alignX || alignY ? makeFlex(direction, alignX, alignY) : '')}
    padding: ${({ theme }) => theme.bme.grid.gap.mobile / 2}px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
        padding: ${({ theme }) => theme.bme.grid.gap.tablet / 2}px;
    }
`;

const GridCol: React.FunctionComponent<GridColComponentProps> = ({ children, mobile, tablet, desktop, ...props }) => {
    const {
        bme: {
            grid: { sizes },
        },
    } = useTheme();

    const size = {
        xs: mobile / sizes.mobile,
        md: tablet / sizes.tablet,
        xl: desktop / sizes.desktop,
    };

    return (
        <StyledCol size={size} {...props}>
            {children}
        </StyledCol>
    );
};

const StyledContainer = styled.div`
    width: 100%;
    ${spacing('padding', { x: 'm' })}
    margin: 0 auto;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
        max-width: 1180px;
    }
`;

const GridContainer: React.FunctionComponent = ({ children }) => <StyledContainer>{children}</StyledContainer>;

const Grid: React.FunctionComponent<GridComponentProps> & GridSubcomponents = ({ children, ...args }) => (
    <StyledGrid {...args}>{children}</StyledGrid>
);

Grid.Col = GridCol;
Grid.Container = GridContainer;

export default Grid;
