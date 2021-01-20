import React from 'react';
import { BreadcrumbsItemSingle } from '../Breadcrumbs.types';
import { BreadcrumbsItem, BreadcrumbsItemLink } from './Item.styled';
import { BMEText } from '../../../index';

const Item: React.FunctionComponent<BreadcrumbsItemSingle> = ({ text, callBack, active }) => (
    <BreadcrumbsItem>
        {!active ? (
            <BreadcrumbsItemLink onClick={callBack}>
                <BMEText size="s">{text}</BMEText>
            </BreadcrumbsItemLink>
        ) : (
            <BMEText size="s">{text}</BMEText>
        )}
    </BreadcrumbsItem>
);

export default Item;
