import React from 'react';
import { BMEBreadcrumbs } from '../../index';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Components/Breadcrumbs',
};

export const Component = ({ items, ...args }) => <BMEBreadcrumbs items={items} {...args} />;

Component.args = {
    items: [
        { text: 'Home', callBack: () => action('Home callback')() },
        { text: 'Library', callBack: () => action('Library callback')() },
        { text: 'Data', callBack: () => action('Data callback')(), active: true },
    ],
};

Component.argTypes = {
    items: {
        control: {
            type: 'object',
        },
    },
    customDivider: {
        control: {
            type: 'text',
        },
    },
};
