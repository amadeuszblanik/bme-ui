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
    required: {
        control: {
            type: 'boolean',
        },
    },
};
