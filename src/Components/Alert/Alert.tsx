import React from 'react';
import { StyledAlert, StyledAlertCloseButton } from './Alert.styled';
import { AlertComponentProps } from './Alert.types';
import { BMEBox, BMEIcon } from '../../index';
import { IconNames } from '../Icon/Icons.names';

const AlertClose: React.FunctionComponent<AlertComponentProps> = ({ onClose }) =>
    onClose ? (
        <StyledAlertCloseButton onClick={() => onClose()}>
            <BMEIcon icon={IconNames.CloseL} />
        </StyledAlertCloseButton>
    ) : (
        <></>
    );

const Alert: React.FunctionComponent<AlertComponentProps> = ({ children, onClose, variant }) => (
    <StyledAlert variant={variant}>
        <BMEBox width="full" alignX="justify">
            <BMEBox>{children}</BMEBox>
            <BMEBox>
                <AlertClose onClose={onClose} />
            </BMEBox>
        </BMEBox>
    </StyledAlert>
);

Alert.defaultProps = {
    variant: 'primary',
};

export default Alert;
