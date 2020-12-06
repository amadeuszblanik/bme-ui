import React from 'react';
import styled from 'styled-components';
import { BMEBox, BMEImage } from '../../index';
import {
    CardComponentProps,
    CardStyledComponentProps,
    CardStyledSubComponentProps,
    CardSubcomponents,
    CardThumbnailComponentProps,
} from './Card.types';
import { hexToRGBA } from '../../Mixins';

const StyledCard = styled(BMEBox)<CardStyledComponentProps>`
    overflow: hidden;
    border: ${({ borderColour, theme }) => hexToRGBA(theme.bme.palette[borderColour], 0.33)} 1px solid;
`;

const StyledCardHeader = styled(BMEBox)<CardStyledComponentProps>`
    border-bottom: ${({ borderColour, theme }) => hexToRGBA(theme.bme.palette[borderColour], 0.33)} 1px solid;
`;

const StyledCardThumbnail = styled(BMEBox)<CardStyledComponentProps>`
    border-bottom: ${({ borderColour, theme }) => hexToRGBA(theme.bme.palette[borderColour], 0.33)} 1px solid;
`;

const StyledCardBody = styled(BMEBox)<CardStyledComponentProps>`
    border-bottom: ${({ borderColour, theme }) => hexToRGBA(theme.bme.palette[borderColour], 0.33)} 1px solid;
`;

const StyledCardFooter = styled(BMEBox)``;

const CardHeader: React.FunctionComponent<CardStyledSubComponentProps> = ({ children, borderColour }) => (
    <StyledCardHeader borderColour={borderColour} direction="column" padding={{ x: 'm', y: 's' }}>
        {children}
    </StyledCardHeader>
);

const CardThumbnail: React.FunctionComponent<CardThumbnailComponentProps> = ({ borderColour, source, alt }) => (
    <StyledCardThumbnail borderColour={borderColour}>
        <BMEImage source={source} alt={alt} width="100%" height="350px" />
    </StyledCardThumbnail>
);

const CardBody: React.FunctionComponent<CardStyledSubComponentProps> = ({ children, borderColour }) => (
    <StyledCardBody borderColour={borderColour} padding={{ x: 'm', y: 'm' }}>
        {children}
    </StyledCardBody>
);

const CardFooter: React.FunctionComponent<CardStyledSubComponentProps> = ({ children }) => (
    <StyledCardFooter padding={{ x: 'm', y: 's' }}>{children}</StyledCardFooter>
);

const Card: React.FunctionComponent<CardComponentProps> & CardSubcomponents = ({
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
        <StyledCard width="full" direction="column" rounded borderColour={borderColour} background={background}>
            {childrenWithProps}
        </StyledCard>
    );
};

Card.defaultProps = {
    borderColour: 'light',
};

Card.Header = CardHeader;
Card.Thumbnail = CardThumbnail;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
