import React from 'react';
import { BMEBox, BMEImage } from '../../index';

export default {
    title: 'Components/Image',
};

export const Component = ({ content, source, ...args }) => (
    <>
        <BMEBox width="half" alignX="center" alignY="center">
            <BMEImage source={source} {...args} />
        </BMEBox>
    </>
);

Component.args = {
    source: 'https://images.pexels.com/photos/3078831/pexels-photo-3078831.jpeg',
    width: 200,
    lazy: true,
};

Component.argTypes = {
    src: {
        control: 'text',
    },
    width: {
        control: 'number',
    },
    lazy: {
        control: 'boolean',
    },
};
