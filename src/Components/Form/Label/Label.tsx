import React, { useState } from 'react';
import { BMEBox, BMEText } from '../../../index';
import { LabelCharacterLimitComponentProps, LabelComponentProps } from './Label.types';
import { isRealNumber } from '../../../Utils';

const CharacterLimit: React.FunctionComponent<LabelCharacterLimitComponentProps> = ({ characters, maxLimit }) =>
    isRealNumber(characters) && maxLimit ? (
        <BMEText size="xxs">
            {characters} / {maxLimit}
        </BMEText>
    ) : null;

const Label: React.FunctionComponent<LabelComponentProps> = ({
    helperText,
    errorText,
    valid,
    children,
    ...characterLimitProps
}) => {
    const [stateValid] = useState(valid || true);

    return (
        <BMEBox width="full" direction="column">
            <BMEBox width="full">{children}</BMEBox>
            <BMEBox width="full" alignX="justify" padding={{ y: 's', x: 'm' }}>
                <BMEText size="xxs" variant={!stateValid ? 'required' : null}>
                    {!stateValid ? errorText : helperText}
                </BMEText>
                <CharacterLimit {...characterLimitProps}></CharacterLimit>
            </BMEBox>
        </BMEBox>
    );
};

Label.defaultProps = {
    helperText: '&nbsp;',
    errorText: '&nbsp;',
};

export default Label;
