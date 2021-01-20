import React from 'react';
import { AccordionStyledSubComponentProps } from '../Accordion.types';
import { Title } from '../Title/Title';
import { ContentStyled, ItemWrapperStyled } from './Item.styled';

export const Item: React.FunctionComponent<AccordionStyledSubComponentProps> = ({
    children,
    title,
    variant,
    onClick,
    open,
}) => (
    <ItemWrapperStyled>
        <Title variant={variant} onClick={onClick}>
            {title}
        </Title>
        <ContentStyled open={open}>{children}</ContentStyled>
    </ItemWrapperStyled>
);

Item.defaultProps = {
    open: false,
};
