import React, { useCallback, useState } from 'react';
import { BMEForm } from '../../../index';

export default {
    title: 'Form/Input with character limit',
};

export const Component = ({ value, name, helperText, errorText, maxLimit, ...args }) => {
    const [stateValue, setStateValue] = useState(value);

    const [characters, setCharacters] = useState(value.length || 0);

    const handleChange = useCallback((nextValue: string) => {
        if (maxLimit && nextValue.length > maxLimit) {
            return;
        }

        setStateValue(nextValue);
        setCharacters(nextValue.length);
    }, []);

    return (
        <BMEForm>
            <BMEForm.Label helperText={helperText} errorText={errorText} characters={characters} maxLimit={maxLimit}>
                <BMEForm.TextField name={name} value={stateValue} onChange={handleChange} {...args} />
            </BMEForm.Label>
        </BMEForm>
    );
};

Component.args = {
    value: '',
    name: 'name',
    label: 'Name',
    required: true,
    helperText: 'eg. John Doe',
    errorText: 'This field is required',
    valid: false,
    maxLimit: 16,
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
    maxLimit: {
        control: {
            type: 'number',
        },
    },
};
