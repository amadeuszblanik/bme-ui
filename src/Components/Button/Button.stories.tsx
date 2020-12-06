import React from 'react';
import { BMEButton, BMEText } from '../../index';

export default {
    title: 'Button',
};

export const Component = ({ content, ...args }) => (
    <>
        <BMEButton {...args}>
            <BMEText>{content}</BMEText>
        </BMEButton>
    </>
);

Component.args = {
    content: 'Click me! 👆',
    variant: 'secondary',
};

Component.argTypes = {
    content: {
        control: 'text',
    },
    variant: {
        control: {
            type: 'inline-radio',
            options: ['primary', 'secondary', 'tertiary', 'dark', 'light', false],
        },
    },

    outline: {
        control: 'boolean',
    },

    rounded: {
        control: 'boolean',
    },
};
