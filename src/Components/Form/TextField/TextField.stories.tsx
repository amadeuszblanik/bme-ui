import React, { useState } from 'react';
import { BMEForm } from '../../../index';

export default {
    title: 'Forms/Input',
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
    required: {
        control: {
            type: 'boolean',
        },
    },
};
