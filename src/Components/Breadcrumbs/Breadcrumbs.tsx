import React from 'react';
import { StyledBreadcrumbs } from './Breadcrumbs.styled';
import { BreadcrumbsProperties } from './Breadcrumbs.types';
import Item from './Item/Item';
import Divider from './Divider/Divider';

const Breadcrumbs: React.FunctionComponent<BreadcrumbsProperties> = ({ items, customDivider }) => (
    <StyledBreadcrumbs>
        {items.map((item, index) => (
            <>
                {index > 0 ? <Divider dividerChar={customDivider} /> : <></>}
                <Item key={index} {...item} />
            </>
        ))}
    </StyledBreadcrumbs>
);

Breadcrumbs.defaultProps = {
    customDivider: '→',
};

export default Breadcrumbs;
