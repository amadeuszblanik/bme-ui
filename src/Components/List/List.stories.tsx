import React from 'react';
import { BMEGrid, BMEList, BMEText } from '../../index';

export default {
    title: 'List',
};

export const Component = ({ ...args }) => (
    <BMEGrid>
        <BMEGrid.Col mobile={4} tablet={2} desktop={3} />
        <BMEGrid.Col mobile={4} tablet={4} desktop={6}>
            <BMEList {...args}>
                <BMEList.Item>
                    <BMEText>Lorem ipsum</BMEText>
                </BMEList.Item>
                <BMEList.Item>
                    <BMEText>Dolor sit amet</BMEText>
                </BMEList.Item>
            </BMEList>
        </BMEGrid.Col>
    </BMEGrid>
);

Component.argTypes = {
    background: {
        control: {
            type: 'inline-radio',
            options: ['primary', 'secondary', 'tertiary', 'dark', 'light', false],
        },
    },
    borderColour: {
        control: {
            type: 'inline-radio',
            options: ['primary', 'secondary', 'tertiary', 'dark', 'light'],
        },
    },
};
