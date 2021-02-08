import React from 'react';
import { ListComponentProps, ListSubcomponents } from './List.types';
import { StyledList } from './List.styled';
import ListItem from './Item/Item';

const List: React.FunctionComponent<ListComponentProps> & ListSubcomponents = ({
    children,
    borderColour,
    background,
}) => {
    const childrenWithProps = React.Children.map(children, (child, index) => {
        const lastChild = index === React.Children.toArray(children).length - 1;
        const props = { borderColour, lastChild };

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

List.Item = ListItem;

export default List;
