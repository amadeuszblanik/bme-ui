import React, { useState } from 'react';
import { BMEForm } from '../../../index';

export default {
    title: 'Form/Input',
};

export const Component = ({ value, name, ...args }) => {
    const [stateValue, setStateValue] = useState(value);

    return (
        <BMEForm>
            <BMEForm.TextField name={name} value={stateValue} onChange={setStateValue} {...args} />
        </BMEForm>
    );
};

Component.args = {
    value: '',
    name: 'name',
    label: 'Name',
    characterLimit: 20,
    helperText: 'eg. John Doe',
    errorText: 'This field is not valid',
    required: true,
};

Component.argTypes = {
    value: {
        control: {
            type: 'text',
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
    characterLimit: {
        control: {
            type: 'number',
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
