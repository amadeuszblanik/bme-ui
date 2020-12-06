import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { ImageComponentProps, ImageComponentStyledFigureProps, ImageComponentStyledImageProps } from './Image.types';
import { useIntersection } from '../../Hooks';
import { transition } from '../../Mixins';

const StyledFigure = styled.figure<ImageComponentStyledFigureProps>`
    position: relative;
    overflow: hidden;

    ${({ width }) => (width ? `width: ${width};` : '')}
    ${({ height }) => (height ? `height: ${height};` : '')}
  margin: 0;
    padding: 0;
    background-color: ${({ lazy, loaded }) => (lazy && !loaded ? 'var(--bme-colour-text)' : 'transparent')};
    opacity: ${({ loaded }) => (loaded ? 1 : 0.33)};
    ${transition(['opacity', 'background-color'])}

    &:after {
        position: relative;
        display: inline-block;
        padding-bottom: ${({ lazy }) => (lazy ? 100 : 0)}%;
        content: '';
        ${transition(['padding-bottom'])}
    }
`;

const StyledImage = styled.img<ImageComponentStyledImageProps>`
    ${({ fixedSize }) =>
        fixedSize
            ? `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  `
            : ''}
    max-width: 100%;
    height: auto;
    opacity: ${({ loaded }) => (loaded ? 1 : 0)};
    ${transition(['opacity'])}
`;

const Image: React.FunctionComponent<ImageComponentProps> = ({ source, alt, lazy, width, height }) => {
    const { ref, intersectionRatio } = useIntersection();
    const [loading, setLoading] = useState(false);
    const [loaded, setLoaded] = useState(!lazy);

    useEffect(() => {
        if (intersectionRatio > 0.5) {
            setLoading(true);
        }
    }, [intersectionRatio]);

    const handleLoaded = () => {
        setLoaded(true);
    };

    return (
        <StyledFigure ref={ref} width={width} height={height} lazy={lazy} loaded={loaded}>
            <StyledImage
                fixedSize={Boolean(width && height)}
                src={loading ? source : ''}
                alt={alt}
                onLoad={handleLoaded}
                loaded={loaded}
            />
        </StyledFigure>
    );
};

Image.defaultProps = {
    alt: '',
};

export default Image;
