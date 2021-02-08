import React from 'react';
import { ListStyledSubComponentProps } from '../List.types';
import { StyledListItem } from '../List.styled';

const ListItem: React.FunctionComponent<ListStyledSubComponentProps> = ({
    children,
    borderColour,
    lastChild,
    onClick,
}) => (
    <StyledListItem
        as={onClick ? 'button' : 'div'}
        borderColour={borderColour}
        lastChild={lastChild}
        onClick={() => (onClick ? onClick() : null)}
    >
        {children}
    </StyledListItem>
);

export default ListItem;
