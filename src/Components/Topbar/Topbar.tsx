import React from 'react';
import TopbarBrand from './Topbar.Brand';
import TopbarContent from './Topbar.Content';
import { StyledTopbar } from './Topbar.styled';
import { TopbarStyledComponentProps, TopSubcomponents } from './Topbar.types';
import { BMEGrid } from '../../index';

const Topbar: React.FunctionComponent<TopbarStyledComponentProps> & TopSubcomponents = ({ children, ...args }) => (
    <StyledTopbar {...args}>
        <BMEGrid.Container>
            <BMEGrid>{children}</BMEGrid>
        </BMEGrid.Container>
    </StyledTopbar>
);

Topbar.Brand = TopbarBrand;
Topbar.Content = TopbarContent;

export default Topbar;
