import React from 'react';
import { StyledIcon } from './Icon.styled';
import { IconComponentProps } from './Icon.types';

const Icon: React.FunctionComponent<IconComponentProps> = ({ icon, variant }) => (
    <StyledIcon icon={icon} variant={variant} />
);

export default Icon;
