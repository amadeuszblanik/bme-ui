import React, { useState } from 'react';
import { BMEForm } from '../../../index';

export default {
    title: 'Form/Select',
};

export const Component = ({ value, options, name, ...args }) => {
    const [stateValue, setStateValue] = useState(value);

    return (
        <BMEForm>
            <BMEForm.Select options={options} name={name} value={stateValue} onChange={setStateValue} {...args} />
        </BMEForm>
    );
};

Component.args = {
    value: '',
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
};

Component.argTypes = {
    value: {
        control: {
            type: 'text',
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
};
