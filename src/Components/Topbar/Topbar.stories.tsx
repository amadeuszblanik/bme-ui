import React from 'react';
import { BMENav, BMETopbar } from '../../index';

export default {
    title: 'App Top Bar',
};

export const Component = ({ ...args }) => (
    <>
        <BMETopbar {...args}>
            <BMENav alignX="right">
                <BMENav.Item>About me</BMENav.Item>
                <BMENav.Item active>Skills</BMENav.Item>
                <BMENav.Item>Experience</BMENav.Item>
                <BMENav.Item>Code samples</BMENav.Item>
                <BMENav.Item>Contact</BMENav.Item>
                <BMENav.Item>GDPR</BMENav.Item>
            </BMENav>
        </BMETopbar>
    </>
);

Component.args = {
    brand: 'https://blanik.me/assets/logo.svg',
    variant: 'dark',
};

Component.argTypes = {
    brand: {
        control: {
            type: 'text',
        },
    },
    fixed: {
        control: {
            type: 'boolean',
        },
    },
    variant: {
        control: {
            type: 'inline-radio',
            options: ['primary', 'secondary', 'tertiary', 'dark', 'light', false],
        },
    },
};
