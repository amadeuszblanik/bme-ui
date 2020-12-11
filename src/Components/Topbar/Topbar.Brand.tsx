import React from 'react';
import { BMEBox, BMEGrid } from '../../index';

const TopbarBrand: React.FunctionComponent = ({ children }) => (
    <BMEGrid.Col mobile={1} tablet={1} desktop={2} alignY="center">
        <BMEBox alignY="center">{children}</BMEBox>
    </BMEGrid.Col>
);

export default TopbarBrand;
