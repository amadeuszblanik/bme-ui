import React from 'react';
import { BMEBox, BMEImage, BMENav, BMEText, BMETopbar } from '../../index';

export default {
    title: 'App Top Bar',
};

export const Component = ({ brand, ...args }) => (
    <>
        <BMETopbar {...args}>
            <BMETopbar.Brand brand={brand}>
                <BMEImage source="https://blanik.me/assets/logo.svg" width="42px" />
                <BMEBox padding={{ x: { left: 's' } }}>
                    <BMEText fontFamily="mono" italic>
                        Blanik.me
                    </BMEText>
                </BMEBox>
            </BMETopbar.Brand>
            <BMETopbar.Content>
                <BMENav alignX="right">
                    <BMENav.Item>About me</BMENav.Item>
                    <BMENav.Item active>Skills</BMENav.Item>
                    <BMENav.Item>Experience</BMENav.Item>
                    <BMENav.Item>Code samples</BMENav.Item>
                    <BMENav.Item>Contact</BMENav.Item>
                    <BMENav.Item>GDPR</BMENav.Item>
                </BMENav>
            </BMETopbar.Content>
        </BMETopbar>
    </>
);

Component.args = {
    variant: 'dark',
};

Component.argTypes = {
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
