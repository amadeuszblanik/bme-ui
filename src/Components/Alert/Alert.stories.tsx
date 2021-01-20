import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { BMEAlert, BMEBox, BMEButton, BMEGlobalIcon, BMEText } from '../../index';
import {PaletteValues} from "../../Theme/Theme";

export default {
    title: 'Components/Alert',
};

export const Component = ({ ...args }) => {
    const [displayAlert, setDisplayAlert] = useState(true);

    return (
        <>
            <BMEGlobalIcon />
            <BMEBox direction="column" width="full">
                <BMEBox width="full" padding={{ y: { bottom: 'l' } }}>
                    <BMEAlert {...args}>
                        <BMEText>A simple alert component — check it out!</BMEText>
                    </BMEAlert>
                </BMEBox>

                {displayAlert ? (
                    <BMEAlert
                        {...args}
                        onClose={() => {
                            action('Alert onClose')();
                            setDisplayAlert(false);
                        }}
                    >
                        <BMEText>A simple alert component — check it out!</BMEText>
                    </BMEAlert>
                ) : (
                    <BMEButton onClick={() => setDisplayAlert(true)}>Undo</BMEButton>
                )}
            </BMEBox>
        </>
    );
};

Component.args = {
    variant: 'dark',
};

Component.argTypes = {
    variant: {
        control: {
            type: 'select',
            options: PaletteValues,
        },
    },
};
