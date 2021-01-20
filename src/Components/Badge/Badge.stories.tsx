import React from 'react';
import { BMEBadge, BMEBox, BMEButton, BMEText } from '../../index';
import {PaletteValues} from "../../Theme/Theme";

export default {
    title: 'Components/Badge',
};

export const Component = ({ content, ...args }) => (
    <>
        <BMEBox width="full">
            <BMEText>
                Messages
                <BMEBadge {...args}>{content}</BMEBadge>
            </BMEText>
        </BMEBox>
        <BMEBox width="full">
            <BMEButton variant="tertiary">
                <BMEText>
                    Messages
                    <BMEBadge {...args}>{content}</BMEBadge>
                </BMEText>
            </BMEButton>
        </BMEBox>
    </>
);

Component.args = {
    content: '99+',
    variant: 'dark',
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
