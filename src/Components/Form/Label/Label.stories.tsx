import React from 'react';
import { BMEForm } from '../../../index';

export default {
    title: 'Form/Label',
};

export const Component = ({ ...args }) => (
    <BMEForm>
        <BMEForm.Label {...args}>
            <BMEForm.TextField name="Sample" onChange={() => null} />
        </BMEForm.Label>
    </BMEForm>
);

Component.args = {
    helperText: 'eg. John Doe',
    errorText: 'This field is required',
    valid: false,
};

Component.argTypes = {
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
    valid: {
        control: {
            type: 'boolean',
        },
    },
    characters: {
        control: {
            type: 'number',
        },
    },
    maxLimit: {
        control: {
            type: 'number',
        },
    },
};
