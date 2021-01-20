import React from 'react';
import { BMEGrid, BMEList, BMEText } from '../../index';
import { PaletteValues } from '../../Theme/Theme';

export default {
    title: 'Components/List',
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
