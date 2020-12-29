import React, { useCallback, useState } from 'react';
import { action } from '@storybook/addon-actions';
import { BMEForm } from '../../../index';

export default {
    title: 'Form/Switch',
};

export const Component = ({ value, name, label, ...args }) => {
    const [stateValue, setStateValue] = useState(value);

    const handleChange = useCallback((nextValue) => {
        action('Changed value')(nextValue);
        setStateValue(nextValue);
    }, []);

    return (
        <BMEForm>
            <BMEForm.Switch name={name} value={stateValue} label={label} onChange={handleChange} {...args} />
        </BMEForm>
    );
};

Component.args = {
    value: false,
    options: [
        { value: '1', content: 'Lorem' },
        { value: '2', content: 'Ipsum' },
        { value: '3', content: 'Dolor' },
    ],
    name: 'name',
    label: 'Name',
    helperText: 'eg. John Doe',
    errorText: 'This field is required',
    required: true,
    variant: 'primary',
};

Component.argTypes = {
    value: {
        control: {
            type: 'boolean',
        },
    },
    options: {
        control: {
            type: 'object',
        },
    },
    name: {
        control: {
            type: 'text',
        },
    },
    label: {
        control: {
            type: 'text',
        },
    },
    helperText: {
        control: {
            type: 'text',
        },
    },
    errorText: {
        control: {
            type: 'text',
        },
    },
    required: {
        control: {
            type: 'boolean',
        },
    },
    valid: {
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
