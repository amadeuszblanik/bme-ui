import React from 'react';
import { BMEGlobalIcon, BMEIcon } from '../../index';
import { IconNames } from './Icons.names';

export default {
    title: 'Components/Icon',
};

export const Component = ({ icon, variant, sizeInPx }) => (
    <>
        <BMEGlobalIcon />
        <div style={{ fontSize: sizeInPx || 16 + 'px' }}>
            <BMEIcon icon={icon} variant={variant} />
        </div>
    </>
);

Component.args = {
    icon: IconNames[0],
    sizeInPx: 24,
};

Component.argTypes = {
    icon: {
        control: {
            type: 'select',
            options: IconNames,
        },
    },
    variant: {
        control: {
            type: 'inline-radio',
            options: ['primary', 'secondary', 'tertiary', 'dark', 'light', false],
        },
    },
    sizeInPx: {
        control: {
            type: 'number',
        },
    },
};
