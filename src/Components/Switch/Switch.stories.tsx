import React, { useState } from 'react';
import { BMESwitch } from '../../index';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Components/Switch',
};

export const Component = ({ checked, ...args }) => {
    const [stateChecked, setStateChecked] = useState<boolean>(checked);

    const handleClick = (nextValue: boolean) => {
        action('onClick value')(nextValue);
        setStateChecked(nextValue);
    };

    return <BMESwitch checked={stateChecked} {...args} onClick={handleClick} />;
};

Component.args = {
    checked: false,
    variant: 'primary',
};

Component.argTypes = {
    checked: {
        control: {
            type: 'boolean',
        },
    },
    variant: {
        control: {
            type: 'inline-radio',
            options: ['primary', 'secondary', 'tertiary', 'dark', 'light'],
        },
    },
};
