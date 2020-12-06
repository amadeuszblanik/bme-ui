import React from 'react';
import { BMEBadge, BMEBox, BMEButton, BMEText } from '../../index';

export default {
    title: 'Badge',
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
