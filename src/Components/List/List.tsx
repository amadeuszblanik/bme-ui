import React from 'react';
import styled from 'styled-components';
import { BMEBox } from '../../index';
import {
    ListComponentProps,
    ListStyledComponentProps,
    ListStyledSubComponentProps,
    ListSubcomponents,
} from './List.types';
import { hexToRGBA } from '../../Mixins';

const StyledList = styled(BMEBox)<ListStyledComponentProps>`
    overflow: hidden;
    border: ${({ borderColour, theme }) => hexToRGBA(theme.bme.palette[borderColour], 0.33)} 1px solid;
`;

const StyledListItem = styled(BMEBox)<ListStyledComponentProps>`
    border-bottom: ${({ borderColour, theme }) => hexToRGBA(theme.bme.palette[borderColour], 0.33)} 1px solid;
`;

const ListItem: React.FunctionComponent<ListStyledSubComponentProps> = ({ children, borderColour }) => (
    <StyledListItem borderColour={borderColour} direction="column" padding={{ x: 'm', y: 's' }}>
        {children}
    </StyledListItem>
);

const List: React.FunctionComponent<ListComponentProps> & ListSubcomponents = ({
    children,
    borderColour,
    background,
}) => {
    const childrenWithProps = React.Children.map(children, (child) => {
        const props = { borderColour };
        if (React.isValidElement(child)) {
            return React.cloneElement(child, props);
        }
        return child;
    });

    return (
        <StyledList width="full" direction="column" rounded borderColour={borderColour} background={background}>
            {childrenWithProps}
        </StyledList>
    );
};

List.defaultProps = {
    borderColour: 'light',
};

List.Item = ListItem;

export default List;
