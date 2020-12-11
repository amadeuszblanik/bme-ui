import React from 'react';
import styled from 'styled-components';
import { TopbarComponentProps, TopbarStyledComponentProps } from './Topbar.types';
import { BMEBox, BMEGrid, BMEImage, BMEText } from '../../index';
import { makeFlex, textColour } from '../../Mixins';
import { validURL } from '../../Utils';
import { Palette } from '../../Theme/Theme';

const StyledTopbar = styled.header<TopbarStyledComponentProps>`
    position: ${({ fixed }) => (fixed ? 'fixed' : 'relative')};
    top: 0;
    left: 0;

    display: flex;
    ${makeFlex('row', 'center', 'center')}
    width: 100%;
    ${({ theme, variant }) => (variant ? `color: ${textColour(theme.bme.palette[variant] as Palette, theme)};` : '')}
    ${({ theme, variant }) => (variant ? `background: ${theme.bme.palette[variant]};` : '')}
  ${({ theme, variant }) =>
        variant ? `--bme-colour-text: ${textColour(theme.bme.palette[variant as Palette], theme)};` : ''}
`;

const Topbar: React.FunctionComponent<TopbarComponentProps> = ({ children, brand, ...args }) => {
    const brandIsURL = validURL(brand);

    return (
        <StyledTopbar {...args}>
            <BMEGrid.Container>
                <BMEGrid>
                    <BMEGrid.Col mobile={1} tablet={1} desktop={2} alignY="center">
                        <BMEBox alignY="center">
                            {brandIsURL ? (
                                <BMEImage source={brand} width="42px" />
                            ) : (
                                <BMEText fontFamily="mono">{brand}</BMEText>
                            )}
                        </BMEBox>
                    </BMEGrid.Col>
                    <BMEGrid.Col mobile={3} tablet={7} desktop={10}>
                        <BMEBox alignX="right" alignY="center" width="full" height="full">
                            {children}
                        </BMEBox>
                    </BMEGrid.Col>
                </BMEGrid>
            </BMEGrid.Container>
        </StyledTopbar>
    );
};

export default Topbar;
