import React from 'react';
import { BMEBox, BMEGrid } from '../../index';

const TopbarContent: React.FunctionComponent = ({ children }) => (
    <BMEGrid.Col mobile={3} tablet={7} desktop={10} alignY="center">
        <BMEBox alignX="right" alignY="center" width="full" height="full">
            {children}
        </BMEBox>
    </BMEGrid.Col>
);

export default TopbarContent;
