import React from 'react';
import { BMEGrid, BMEList, BMEText } from '../../index';
import { PaletteValues } from '../../Theme/Theme';
import {action} from "@storybook/addon-actions";

export default {
    title: 'Components/List',
};

export const Component = ({ ...args }) => (
    <BMEGrid>
        <BMEGrid.Col mobile={4} tablet={2} desktop={3} />
        <BMEGrid.Col mobile={4} tablet={4} desktop={6}>
            <BMEList {...args}>
                <BMEList.Item onClick={() => action('onClick')(0)}>
                    <BMEText>Lorem ipsum</BMEText>
                </BMEList.Item>
                <BMEList.Item onClick={() => action('onClick')(1)}>
                    <BMEText>Dolor sit amet</BMEText>
                </BMEList.Item>
                <BMEList.Item onClick={() => action('onClick')(2)}>
                    <BMEText>Lorem ipsum</BMEText>
                </BMEList.Item>
                <BMEList.Item onClick={() => action('onClick')(3)}>
                    <BMEText>Dolor sit amet</BMEText>
                </BMEList.Item>
                <BMEList.Item onClick={() => action('onClick')(4)}>
                    <BMEText>Lorem ipsum</BMEText>
                </BMEList.Item>
                <BMEList.Item onClick={() => action('onClick')(5)}>
                    <BMEText>Dolor sit amet</BMEText>
                </BMEList.Item>
            </BMEList>
        </BMEGrid.Col>
    </BMEGrid>
);

Component.argTypes = {
    background: {
        control: {
            type: 'select',
            options: PaletteValues,
        },
    },
    borderColour: {
        control: {
            type: 'select',
            options: PaletteValues,
        },
    },
};
