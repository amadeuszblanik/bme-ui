import React from 'react';
import { BMEBox, BMEGlobalIcon, BMEGrid, BMEIcon, BMEText } from '../../index';
import { IconNames } from './Icons.names';

export default {
    title: 'Getting started/Icon list',
};

export const Component = () => (
    <>
        <BMEGlobalIcon />
        <BMEGrid>
            {Object.keys(IconNames).map((key) => {
                const value = IconNames[key];

                return (
                    <BMEGrid.Col mobile={1} tablet={4} desktop={4} key={key}>
                        <div style={{ fontSize: '24px' }}>
                            <BMEBox direction="row" padding={{ y: { bottom: 's' } }}>
                                <BMEBox padding={{ x: 'm' }}>
                                    <BMEIcon icon={value} />
                                </BMEBox>
                                <BMEBox padding={{ x: 'm' }}>
                                    <BMEText>{key}</BMEText>
                                </BMEBox>
                            </BMEBox>
                        </div>
                    </BMEGrid.Col>
                );
            })}
        </BMEGrid>
    </>
);
