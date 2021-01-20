import React, { useCallback, useState } from 'react';
import { AccordionSubcomponents, AccordionComponentProps } from './Accordion.types';
import { BMEBox } from '../../index';
import { Item } from './Item/Item';

const Accordion: React.FunctionComponent<AccordionComponentProps> & AccordionSubcomponents = ({
    children,
    variant,
    variantActive,
}) => {
    const [stateOpenIndex, setStateOpenIndex] = useState(0);

    const handleClickAccordionTab = (index) =>
        useCallback(() => {
            if (index === stateOpenIndex) {
                setStateOpenIndex(-1);
                return;
            }
            setStateOpenIndex(index);
        }, [stateOpenIndex]);

    const childrenWithProps = React.Children.map(children, (child, index) => {
        const active = index === stateOpenIndex;
        const props = {
            variant: active ? variantActive : variant,
            onClick: handleClickAccordionTab(index),
            open: active,
        };
        if (React.isValidElement(child)) {
            return React.cloneElement(child, props);
        }
        return child;
    });

    return (
        <BMEBox width="full" direction="column" rounded>
            {childrenWithProps}
        </BMEBox>
    );
};

Accordion.defaultProps = {
    variant: 'primary',
    variantActive: 'secondary',
};

Accordion.Item = Item;

export default Accordion;
