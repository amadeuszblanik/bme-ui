import React, { useState } from 'react';
import { BMEBox, BMEText } from '../../../index';
import { LabelComponentProps } from './Label.types';

const Label: React.FunctionComponent<LabelComponentProps> = ({ helperText, errorText, valid, children }) => {
    const [stateValid] = useState(valid || true);

    return (
        <BMEBox width="full" direction="column">
            <BMEBox width="full">{children}</BMEBox>
            <BMEBox width="full" alignX="justify" padding={{ y: 's', x: 'm' }}>
                <BMEText size="xxs" variant={!stateValid ? 'required' : null}>
                    {!stateValid ? errorText : helperText}
                </BMEText>
            </BMEBox>
        </BMEBox>
    );
};

Label.defaultProps = {
    helperText: '&nbsp;',
    errorText: '&nbsp;',
};

export default Label;
