import React from 'react';
import { StyledAccordionTitle } from './Title.styled';
import { AccordionTitleStyledProps } from '../Accordion.types';
import { BMEText } from '../../../index';

export const Title: React.FunctionComponent<AccordionTitleStyledProps> = ({ children, variant, onClick }) => (
    <StyledAccordionTitle variant={variant} onClick={onClick}>
        <BMEText>{children}</BMEText>
    </StyledAccordionTitle>
);
