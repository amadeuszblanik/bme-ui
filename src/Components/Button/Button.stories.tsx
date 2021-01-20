import React from 'react';
import { BMEButton, BMEText } from '../../index';
import {PaletteValues} from "../../Theme/Theme";

export default {
    title: 'Components/Button',
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
            type: 'select',
            options: PaletteValues,
        },
    },

    outline: {
        control: 'boolean',
    },

    rounded: {
        control: 'boolean',
    },
};
