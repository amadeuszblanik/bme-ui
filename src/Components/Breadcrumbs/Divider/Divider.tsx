import React from 'react';
import { BreadcrumbsDividerProperties } from '../Breadcrumbs.types';
import { BMEText } from '../../../index';
import { BreadcrumbsDivider } from './Divider.styled';

const Divider: React.FunctionComponent<BreadcrumbsDividerProperties> = ({ dividerChar }) => (
    <BreadcrumbsDivider>
        <BMEText size="s">{dividerChar}</BMEText>
    </BreadcrumbsDivider>
);

export default Divider;
